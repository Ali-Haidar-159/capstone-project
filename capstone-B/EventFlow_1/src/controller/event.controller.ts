// Import all the packages and modules 

import {Request,Response} from "express" ;
import multer  from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { prismaGlobal } from "../utils/prismaGobal.utils";
import {v4 as uuidv4} from "uuid" ;

import { ResponseTemp } from "../types/Response";
import { EventInterface, SingleEvent, TicketInterface , DiscountType } from "../types/Events";
import { SingleClub } from "../types/club.types";
import { recommendationGenerate } from "../utils/recommendation.util";

// Global variables 


interface EventAndTicketInterface
{
    event : EventInterface ;
    ticket : TicketInterface;
}

// Controller code 

let postCreateEvent = async function(req:Request<{},{},EventAndTicketInterface,{}>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let {event , ticket} = req.body ;

        if (typeof event === "string") event = JSON.parse(event);
        if (typeof ticket === "string") ticket = JSON.parse(ticket);

        let {title,description,category,club_name,date,location,venue,total_seat} = event ;
        let {ticket_name,ticket_type , ticket_description ,price,codeForDiscount,discount,discountType} = ticket ;

        club_name = club_name.trim() ;

        let event_id:string = uuidv4() ;
        total_seat = Number(total_seat) ;

        let files = req.files as Express.Multer.File[];
        let filesPath:string[] = files.map(function(item){

            return item.path ;

        }) ;
        let img_url = JSON.stringify(filesPath) ;

        let newEvent = await prismaGlobal.events.create({

            data:{

                event_id ,
                title,
                description ,
                category ,
                club_name ,
                date ,
                location ,
                venue ,
                total_seat ,
                img_url

            }

        }) ;

        let newEventTicket = await prismaGlobal.ticket.create({

            data : {
                event_id ,
                ticket_name ,
                ticket_type ,
                ticket_description ,
                price ,
                codeForDiscount ,
                discount ,
                discountType 
            }

        }) ;

        let newEventDetails = {
            newEvent ,
            newEventTicket
        }

        res.status(201).json({

            status : 201 ,
            success : true ,
            message : "New Event is created." ,
            data : newEventDetails

        }) ; 


    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to create event !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to create event !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getSingleEventById = async function(req:Request<SingleEvent>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let eventId = req.params.id ;

        let event = await prismaGlobal.events.findUnique({


            where : {
                event_id : eventId 
            }

        }) ;

        if(!event)
        {
            res.status(400).json({

                status : 400 ,
                success : false ,
                message : "No event found by this event id !157" 

            }) ;
        }

        res.status(200).json({

            status : 200 ,
            success : true ,
            message : "Find the event" ,
            data : event

        }) ;


    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to get event !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to get event !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getAllApproveEvents = async function(req:Request,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let event = await prismaGlobal.events.findMany({


            where : {
                
                isApporve : true

            }

        }) ;

        if(!event)
        {
            res.status(400).json({

                status : 400 ,
                success : false ,
                message : "No event found!" 

            }) ;
        }

        res.status(200).json({

            status : 200 ,
            success : true ,
            message : "Find all approved the event" ,
            data : event

        }) ;


    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to get event !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to get event !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getNotApproveEvents = async function(req:Request,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let event = await prismaGlobal.events.findMany({


            where : {
                
                isApporve : false

            }

        }) ;

        if(!event)
        {
            res.status(400).json({

                status : 400 ,
                success : false ,
                message : "No event found!" 

            }) ;
        }

        res.status(200).json({

            status : 200 ,
            success : true ,
            message : "Find all approved the event" ,
            data : event

        }) ;


    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to get event !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to get event !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getAllEventsOfAClub = async function(req:Request<SingleClub,{},{},{}>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let clubId = req.params.id ;

        let club = await prismaGlobal.clubDetails.findUnique({
            where : {
                club_id : clubId
            }
        }) ;

        if(!club)
        {
            res.status(400).json({

                status : 400 ,
                success : false ,
                message : "No club found by this id !" 

            }) ;
        }

        let events = await prismaGlobal.events.findMany({


            where : {
                
                club_name : club?.name

            }

        }) ;

        if(!events)
        {
            res.status(400).json({

                status : 400 ,
                success : false ,
                message : "No event found!" 

            }) ;
        }

        res.status(200).json({

            status : 200 ,
            success : true ,
            message : "Find all the events of this club" ,
            data : events

        }) ;


    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to get event !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to get event !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getDeleteSingleEventById = async function(req:Request<SingleEvent>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let eventId = req.params.id ;

        let event = await prismaGlobal.events.delete({


            where : {
                event_id : eventId 
            }

        }) ;

        if(!event)
        {
            res.status(400).json({

                status : 400 ,
                success : false ,
                message : "No event found by this event id !389" 

            }) ;
        }

        res.status(200).json({

            status : 200 ,
            success : true ,
            message : "Deleted the event" ,
            data : event

        }) ;


    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to delete event !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to delete event !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let putApproveEvent = async function(req:Request<SingleEvent>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let eventId = req.params.id ;

        let event = await prismaGlobal.events.update({


            where : {
                event_id : eventId 
            } ,

            data:{
                isApporve : true
            }

        }) ;

        if(!event)
        {
            res.status(400).json({

                status : 400 ,
                success : false ,
                message : "No event found by this event id !464" 

            }) ;
        }

        res.status(200).json({

            status : 200 ,
            success : true ,
            message : "Approved the event" ,
            data : event

        }) ;


    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to approve event !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to approve event !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    } 

}



let getRecommendation = async function(req:Request , res:Response){

    try
    {
        if (!req.isAuthenticated()) 
        {
            return res.status(401).json({
                message: "You are not logged in!"
            });
        }
        
        let userGmail = (req.user as any).gmail;  ;

        const recommended = await recommendationGenerate(userGmail,6);

        res.status(200).json({

            status : 200 ,
            success : true ,
            message : userGmail ,
            // message : "Successfully generate the recommendation ..." ,
            data : recommended

        });

    }
    catch(err)
    {
        res.status(400).json({

            status : 400 ,
            success : false ,
            message : "Find error in recommendation !" ,
            error : err

        });
    }


}


// Export code 

export {postCreateEvent,getSingleEventById,getAllApproveEvents,
    getAllEventsOfAClub,getDeleteSingleEventById,
    putApproveEvent , getRecommendation,getNotApproveEvents}
