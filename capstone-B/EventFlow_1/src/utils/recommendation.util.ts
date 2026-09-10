// import all the modules and packages 

import express from "express" ;
// import events from "../asset/data.json" ;
import natural from "natural";
import {PrismaClient} from "../../generated/prisma" ;

// Global object 

let prisma = new PrismaClient() ;
const TfIdf = natural.TfIdf;

// turn text to vector

function toVector(tfidf: any, docIndex: number, allTerms: any[]) 
{
    return allTerms.map(term => {
        const v = tfidf.tfidf(term, docIndex);
        return typeof v === "number" && !isNaN(v) ? v : 0;
    });
}

// cosine similarity

function cosineSimilarity(a: number[], b: number[]) 
{
    let dot = 0, magA = 0, magB = 0;

    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        magA += a[i] * a[i];
        magB += b[i] * b[i];
    }

    if (magA === 0 || magB === 0) return 0;

    const result = dot / (Math.sqrt(magA) * Math.sqrt(magB));
    return isNaN(result) ? 0 : result;
}

//main fun
async function recommendationGenerate (gmail:string , limit:any)
{

    let user = await prisma.userInterest.findUnique({

        where :{
            gmail : gmail
        }

    }) ;

    let events = await prisma.events.findMany({

        where : {
            isApporve : true
        }

    })

    if(!user)
    {
        return "Not Found User" ;
    }

    // 1. prepare the user data 

    let userDept = user.department;
    let userMajor = user.major;
    let userInterestsArray = (user.interest || "")
        .split(",")
        .map(s => s.trim().toLowerCase());

    let userCompletedCourseArray = (user.completed_course || "")
        .split(",")
        .map(s => s.trim().toLowerCase());

    let userHobbiesArray = (user.hobby || "")
        .split(",")
        .map(s => s.trim().toLowerCase());

    let userTextForDocument:string = [userDept , userMajor , ...userInterestsArray , ...userCompletedCourseArray , ...userHobbiesArray].filter(Boolean).join(" ").toLowerCase() ;


    // 2. prepare the events data

    const eventTextForDocument = events.map(ev => {
        return {
        id: ev.event_id,
        text: [
            ev.title,
            ev.description
        ]
        .join(" ")
        .toLowerCase()
        };
    });

    // 3. Create TF-IDF model
    
    const tfidf = new TfIdf();

    tfidf.addDocument(userTextForDocument.split(" "), "user");
    eventTextForDocument.forEach((ev, idx) => {
        tfidf.addDocument(ev.text.split(" "), `event-${idx}`);
    });

    // 4) Collect unique terms

    const allTerms = new Set();
    tfidf.documents.forEach(doc => {
        Object.keys(doc).forEach(term => allTerms.add(term));
    });


    const allTermsArray = Array.from(allTerms);

    // 5) Build user vector
    const userVector = toVector(tfidf, 0, allTermsArray);


    // 6) Build vectors for each event
    const scoredEvents = eventTextForDocument.map((ev, idx) => {
    const evVector = toVector(tfidf, idx + 1, allTermsArray);
    const score = cosineSimilarity(userVector, evVector);

        return {
            event: events[idx],
            score,
        };
    });

    // 7) Sort by similarity score
    scoredEvents.sort((a:any, b:any) => b.score - a.score);

    // 8) Return top-k events
    return scoredEvents.slice(0, limit).map(e => ({
        id: e.event.event_id,
        title: e.event.title,
        score: e.score
    }));

}


// Export Code 

export{recommendationGenerate}

