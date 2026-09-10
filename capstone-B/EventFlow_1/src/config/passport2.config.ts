// Import all the packages and modules 

import { Strategy as LocalStrategy} from "passport-local" ;
import passport from "passport";
import bcrypt from "bcrypt" ;
import {PrismaClient} from "../../generated/prisma" ;

// Main code 

let prisma = new PrismaClient() ;

passport.use("admin",new LocalStrategy( { usernameField: "club_id" }, async function(club_id:string,password:string,done:any){

    try
    {
        let admin:any = await prisma.admin.findUnique({

            where : {
                club_id : club_id
            }

        }) ;

        if(!admin)
        {
            return done(null,false,{message : "Admin not found !!!"}) ;
        }

        let isPasswordMatched:boolean = await bcrypt.compare(password,admin.club_password) ;

        if(!isPasswordMatched)
        {
            return done(null,false,{message : "Incorrect Password !!!"}) ;
        }
        else
        {
            return done(null,admin) ;
        }
    }
    catch(error : unknown)
    {
        return done(error , false , {message : "Something Error !!!"}) ;
    }

}));


// passport.serializeUser(function(admin:any,done){

//     return done(null ,admin.club_id) ;

// }) ;

// passport.deserializeUser(async function(club_id:string,done){

//     try
//     {
//         let admin:any = await prisma.admin.findUnique({
//             where : {
//                 club_id : club_id 
//             }
//         }) ;

//         if(!admin)
//         {
//             return done(null , false) ;
//         }
//         else
//         {
//             return done(null,admin) ;
//         }
//     }
//     catch(error : any)
//     {
//         return done(error,false) ;
//     }

// })

// Exports code 

export {passport}
