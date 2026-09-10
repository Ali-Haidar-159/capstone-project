// Import all the packages and modules 

import { Strategy as LocalStrategy} from "passport-local" ;
import passport from "passport";
import bcrypt from "bcrypt" ;
import {PrismaClient} from "../../generated/prisma" ;

// Main code 

let prisma = new PrismaClient() ;

passport.use("user",new LocalStrategy( { usernameField: "gmail" }, async function(gmail:string,password:string,done:any){

    try
    {
        let user:any = await prisma.registration.findUnique({

            where : {
                gmail : gmail
            }

        }) ;

        if(!user)
        {
            return done(null,false,{message : "User not found !!!"}) ;
        }

        let isPasswordMatched:boolean = await bcrypt.compare(password,user.password) ;

        if(!isPasswordMatched)
        {
            return done(null,false,{message : "Incorrect Password !!!"}) ;
        }
        else
        {
            return done(null,user) ;
        }
    }
    catch(error : unknown)
    {
        return done(error , false , {message : "Something Error !!!"}) ;
    }

}));


// passport.serializeUser(function(user:any,done){

//     return done(null ,user.gmail) ;

// }) ;

// passport.deserializeUser(async function(gmail:string,done){

//     try
//     {
//         let user:any = await prisma.registration.findUnique({
//             where : {
//                 gmail : gmail 
//             }
//         }) ;

//         if(!user)
//         {
//             return done(null , false) ;
//         }
//         else
//         {
//             return done(null,user) ;
//         }
//     }
//     catch(error : any)
//     {
//         return done(error,false) ;
//     }

// });

// Exports code 

export {passport}
