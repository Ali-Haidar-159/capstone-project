// Import all the packages and modules 

import {Request,Response} from "express" ;
import { prismaGlobal } from "../utils/prismaGobal.utils";
import {v4 as uuidv4} from "uuid" ;
import bcrypt from "bcrypt" ;
import { Prisma } from "../../generated/prisma";

import { ResponseTemp } from "../types/Response";
import { ClubInterface, SingleClub } from "../types/club.types";

// Global variables 


let saltRounds:number = 10 ;

// Controller code 

function createClubId(clubName : string):string
{
    let clubId : string ;

    let nameWithOutSpace = clubName.replaceAll(" " , "-") ;

    clubId = `${nameWithOutSpace.toLocaleLowerCase()}-${new Date().getMilliseconds()}`

    return clubId ;

}

let postCreateClub = async function(req:Request<{},{},ClubInterface,{}> , res:Response<ResponseTemp>) :Promise<Response<ResponseTemp> | void>{

    try
    {
        let {clubName,category,description,clubEmail,clubAdmin} = req.body ;

        let existingClub = await prismaGlobal.clubDetails.findUnique({

            where : {
                club_email : clubEmail
            }

        }) ;

        if(existingClub)
        {
            return res.status(409).json({

                status : 409 ,
                success : false ,
                message : "A club with this email already exists !" ,
                data : existingClub

            }) ;
        }

        
        let clubId:string = createClubId(clubName)  ;
        let hash = await bcrypt.hash(clubId , saltRounds) ;

        let [newClub] = await prismaGlobal.$transaction([
            prismaGlobal.clubDetails.create({

                data : {
                    club_id : clubId ,     
                    name : clubName ,
                    category,
                    description  ,
                    club_email : clubEmail ,
                    admin : clubAdmin
                }

            }),
            prismaGlobal.admin.create({

                data : {
                    club_id : clubId ,
                    club_password : hash
                }

            })
        ]) ;
        

        return res.status(200).json({

            status : 200 ,
            success : true ,
            message : `Club Created Successfully.The newly created club is ${clubName}.` ,
            data : newClub

        }) ;

    }
    catch(err : unknown)
    {
        if(err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002")
        {
            return res.status(409).json({

                status : 409 ,
                success : false ,
                message : "A club with this email already exists !" ,
                error : err.message

            }) ;
        }

        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to create club !" ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to create club !" ,
                error : err

            }) ;
        }
    }
}


let getAllClubs = async function(req:Request,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {

        let allClubs = await prismaGlobal.clubDetails.findMany() ;

        if(!allClubs)
        {
            return res.status(400).json({

                status : 400 ,
                success : true ,
                message : "No club created yet !" 

            }) ;
        }

        return res.status(200).json({

            status : 200 ,
            success : true ,
            message : `All the created clubs .` ,
            data : allClubs

        }) ;

    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to get all club !" ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to get all club !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }
    

}


let getSingleClub = async function(req:Request<SingleClub>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {
        let  {id} = req.params ;

        let club = await prismaGlobal.clubDetails.findUnique({


            where : {
                club_id : id 
            }

        }) ;

        if(!club)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `There is no club with this id !`
            }) ;
        }

        return res.status(200).json({

            status : 200 ,
            success : true ,
            message : `Find the club` ,
            data : club

        }) ;

    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to get this club !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to get this club !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


let getDeleteClub = async function(req:Request<SingleClub>,res:Response<ResponseTemp>):Promise<Response<ResponseTemp> | void>{

    try
    {
        let  {id} = req.params ;

        let deletedClub = await prismaGlobal.clubDetails.delete({


            where : {
                club_id : id 
            }

        }) ;

        if(!deletedClub)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `There is no club with this id to delete!`
            }) ;
        }

        return res.status(200).json({

            status : 200 ,
            success : true ,
            message : `Club deleted successfully` ,
            data : deletedClub

        }) ;

    }
    catch(err : unknown)
    {
        if(err instanceof Error)
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : `Find error to delete this club !` ,
                error : err.message

            }) ;
        }
        else
        {
            return res.status(400).json({

                status : 400 ,
                success : false ,
                message : "Find error to delete this club !" ,
                error : err

            }) ;
        }
    }
    finally
    {
        prismaGlobal.$disconnect() ;
    }

}


// Export code 

export {postCreateClub,getAllClubs,getSingleClub,getDeleteClub}
