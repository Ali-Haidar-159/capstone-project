// Import all the modules and packages 

import {Request,Response,NextFunction} from "express" ;
import { prismaGlobal } from "../utils/prismaGobal.utils";
import passport from "passport";
import {v4 as uuidv4} from "uuid" ;
import bcrypt from "bcrypt" ;

import { ResponseTemp } from "../types/Response";
import { RegistrationInterface } from "../types/RequestBody";


// Global Variables 


// Main code 


//================= postRegister ===============================

let postRegister = async function (req:Request<{},{},RegistrationInterface,{}>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {
        let {gmail,password} = req.body ;
        let id = uuidv4() ;

        let salRounds:number = 10 ;

        bcrypt.hash(password , salRounds , async function(err,hash){

            let newUser = await prismaGlobal.registration.create({

                data : {
                    id : id ,
                    gmail : gmail ,
                    password : hash
                }

            }) ;

            return res.status(200).json({

                status : 200 ,
                message : "New user account is created" ,
                data : newUser 

            });

        }) ;

    }
    catch(error : unknown)
    {
        return res.status(500).json({

            status : 500 ,
            message : "Find Error To Register A New User !!!" ,
            error : error 

        });

    }

}

//================= postLogin ===============================

let postLogin = async function (req:Request,res:Response<ResponseTemp>,next:NextFunction):Promise<Response<ResponseTemp> | void>{

    try
    {

        passport.authenticate("user" , function(err:any,user:any,info:any){

            if (err)
            {
                return next(err);
            } 

            if (!user)
            {
                return res.status(400).json({
                    status : 400 ,
                    message: info.message 
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

let getMe = function (req: Request, res: Response) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
        return res.status(401).json({
        status: 401,
        message: "Not authenticated",
        });
    }

    return res.status(200).json({
        status: 200,
        message: "Authenticated user fetched",
        data: req.user, // Passport automatically injects user
    });
}



//================= getLogout ===============================


let getLogout = function(req:Request , res:Response , next:NextFunction):void {

    req.logout(function(err){
        if(err) return next(err);

        req.session.destroy(() => {
            res.clearCookie("connect.sid", {
                path: "/",
                httpOnly: true,
                sameSite: "lax",
                secure: false 
            });

            return res.status(200).json({
                status: 200,
                message: "Logged out successfully"
            });
        });
    });

}





// Exports Code 

export {postRegister , postLogin , getMe , getLogout}
