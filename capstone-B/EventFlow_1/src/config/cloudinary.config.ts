// Import all the packages and modules 

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import {v2 as cloudinary} from "cloudinary" ;
import path from "path" ;

// Global Variables 



// Configuration code 

cloudinary.config({

    cloud_name : "dj29eymmp", 
    api_key : "459345149799637", 
    api_secret : "fLiZ2UzeEv6U0-GRF7N4R4BXcXg"

}) ;

let storage = new CloudinaryStorage({

    cloudinary : cloudinary ,
    params : function(req,file){

        return {
            folder : "EventFlow Events",
            public_id : path.parse(file.originalname).name,
            allowed_formats : ["jpg" , "png"]
        }

    }

}) ;

let upload = multer({storage : storage}) ;

// Export Code 

export {upload}
