// Require All The Modules , Packages And Objects : 

import  {Request,Response,NextFunction} from "express" ;
import {Prisma} from "../../generated/prisma" ;

import { prismaGlobal } from "../utils/prismaGobal.utils";

import { ResponseTemp } from "../types/Response";
import { UserIdInterface, UserProfileInterface } from "../types/RequestBody";
import { UserRegisteredEvents } from "../types/Events";

// Global Variables 


// Controller Code 

let postUserData =async function(req:Request<{},{},UserProfileInterface,{}>,res:Response) : Promise<Response<ResponseTemp> | void >{

    try
    {

        let {gmail,name,number,gender,institute,address,department} = req.body ;
        let {interest,course,major,hobby} = req.body ;

        if (!gmail || !name) {
            return res.status(400).json({
                status : 400 ,
                success : false ,
                message : "Gmail and Name should be required !!!" ,
                error: "Gmail and name are required!" 
            });
        }

        let newUserProfile = await prismaGlobal.userProfile.create({

            data : {
                gmail ,
                name ,
                mobile : number ,
                gender ,
                institute ,
                address ,
                department
            }

        });

        let newUserInterest = await prismaGlobal.userInterest.create({

            data : {
                gmail ,
                interest ,
                completed_course : course ,
                major ,
                hobby ,
                department
            }

        });

        return res.status(201).json({
            status: 201,
            success: true,
            message: "User data is stored successfully.",
            data: newUserProfile
        });
    }
    catch (err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to store data." ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to store data." ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getUserData = async function(req:Request<UserIdInterface,{},{},{}> , res:Response) : Promise<Response<ResponseTemp> | void>{

        try
        {
            let userGmail:string = req.params.gmail ;

            let user = await prismaGlobal.userProfile.findUnique({
                where : {
                    gmail : userGmail 
                },
                include: {
                    userInterest: true 
                } as any,
                
            });

            if(!user)
            {
                return res.status(201).json({

                    status : 400 ,
                    success : false ,
                    message : `User not found by this Gmail.` ,
                });
            }
            else
            {
                return res.status(201).json({

                    status : 200 ,
                    success : true ,
                    message : `The user's gmail : ${userGmail}` ,
                    data : user
                });
            }

            
        }        
        catch (err : unknown)
        {
            if(err instanceof Error)
            {
                return res.status(400).json({

                    status : 400 ,
                    success : false ,
                    message : "Find error to store data." ,
                    error : err.message

                }) ;
            }
            else
            {
                return res.status(400).json({

                    status : 400 ,
                    success : false ,
                    message : "Find error to store data." ,
                    error : err

                }) ;
            }
        }
        finally
        {
            prismaGlobal.$disconnect() ;
        }

}


let postRegisteredEvents = async function(req:Request<{},{},UserRegisteredEvents,{}>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {
        let {gmail , events} = req.body ;

        let isUserRegister = await prismaGlobal.registeredEvents.findUnique({

            where : {
                gmail : gmail 
            }

        });

        if(isUserRegister)
        {
            let alreadyRegisterEvents = isUserRegister.events ;

            if(!Array.isArray(alreadyRegisterEvents))
            {
                alreadyRegisterEvents = [] ;
            }

            let newRegisteredEvents = [...alreadyRegisterEvents , events] as Prisma.JsonArray ;

            let updatedRegisteredEvents = await prismaGlobal.registeredEvents.update({

                where : {
                    gmail : gmail 
                } ,
                data : {
                    events : newRegisteredEvents 
                }

            }) ;


        }
        else
        {

            let newNewUser = await prismaGlobal.registeredEvents.create({

                data : {
                    gmail : gmail ,
                    events: Array.isArray(events) ? events as unknown as Prisma.InputJsonValue : [events] as unknown as Prisma.InputJsonValue,
                }

            })

        }

        return res.status(200).json({

                status : 200 ,
                success : true ,
                message : "Event registered successfully.", 
                data : `Gmail : ${gmail} , Event id : ${events.id} , IsAttend : ${events.isAttend}` 

            }) ;

    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to register event" ,
                error : err.message 

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to register event" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getRegisteredEvents = async function(req:Request,res:Response):Promise<Response<ResponseTemp> | void>{

    try
    {
        let {gmail} = req.params ;

        let allRegisteredEvents = await prismaGlobal.registeredEvents.findUnique({
            where : {
                gmail : gmail
            }
        }) ;

        if(!allRegisteredEvents)
        {
            return res.status(200).json({

                status : 200 ,
                success : true ,
                message : `There is no registered events using this Gmail : ${gmail}.`

            }) ;

        }

        return res.status(200).json({

            status : 200 ,
            success : true ,
            message : `All registered events of Gmail : ${gmail}` ,
            data : allRegisteredEvents

        }) ;

    }
    catch (err: unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to register event" ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to register event" ,
                error : err

            }) ;
        }
    }

}


// Exports Code :

export {postUserData,getUserData,postRegisteredEvents,getRegisteredEvents}
