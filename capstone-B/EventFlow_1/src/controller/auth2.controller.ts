// Import all the modules and packages 

import {Request,Response,NextFunction} from "express" ;
import passport from "passport";
import bcrypt from "bcrypt" ;

import { ResponseTemp } from "../types/Response";


// Global Variables 


// Main code 


//================= postRegister ===============================

let postLoginAdmin = async function (req:Request,res:Response<ResponseTemp>,next:NextFunction):Promise<Response<ResponseTemp> | void>{

    try
    {

        passport.authenticate("admin" , function(err:any,user:any,info:any){

            if (err)
            {
                return next(err);
            } 

            if (!user)
            {
                return res.status(400).json({
                    status : 400 ,
                    message: info?.message || "Admin not found"
                });
            }

            req.logIn(user, function(err) {
                
                if (err) 
                {
                    return next(err);
                }

                return res.json({ 
                    status: 200 ,
                    message: "Login successful", 
                    data : user 
                });
            
            });

        })(req, res, next);

    }
    catch(error : unknown)
    {
        return res.status(500).json({

            status : 500 ,
            message : "Find Error To Login User !!!" ,
            error : error 

        });
    }

}


// Export Code 

export {postLoginAdmin}
