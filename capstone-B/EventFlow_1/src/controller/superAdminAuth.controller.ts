// Import all the packages and modules 

import {Request,Response,NextFunction} from "express" ;

import { ResponseTemp } from "../types/Response";
import { SuperAdmin } from "../types/SuperAdmin.type";

// Global Variable



// Controller Code 

let postSuperAdmin = function(req:Request<{},{},SuperAdmin,{}> , res:Response<ResponseTemp>):Response<ResponseTemp>{

    try
    {

        let {gmail, userId , password} = req.body ;

        if(gmail === "super.admin.ewu@gmail.com")
        {
            if(userId === "east-west-university")
            {

                if(password === "super-ewu")
                {
                    return res.status(200).json({

                        status : 200 ,
                        success : true ,
                        message : "Successfully logged in super-admin" 

                    });
                }
                else
                {
                    return res.status(400).json({

                        status : 400 ,
                        success : false ,
                        message : "Find error to authenticate super admin !" ,
                        error : "Password is incorrect !" 

                    });
                }

            }
            else
            {
                return res.status(400).json({

                    status : 400 ,
                    success : false ,
                    message : "Find error to authenticate super admin !" ,
                    error : "User id is incorrect !" 

                });
            }
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to authenticate super admin !",
                error : "Incorrect the gmail !" 

            });
        }

    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to authenticate super admin !" ,
                error : err.message 

            });
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to authenticate super admin !" ,
                error : err 

            });
        }
    }

}

// Export Code 

export {postSuperAdmin}
