// Import all the packages and modules 

import express from "express" ;
import { upload } from "../config/cloudinary.config";

import { getAllApproveEvents, getAllEventsOfAClub, 
    getDeleteSingleEventById, 
    getNotApproveEvents, 
    getRecommendation, 
    getSingleEventById, postCreateEvent, 
    putApproveEvent} from "../controller/event.controller";

// Global variables 

let eventRouter = express.Router() ;

// Router code 

eventRouter.post("/create-event", upload.array("images"), postCreateEvent);
eventRouter.get("/recommendation", getRecommendation);
eventRouter.get("/club-event/:id", getAllEventsOfAClub);
eventRouter.put("/approve/:id", putApproveEvent);
eventRouter.get("/", getAllApproveEvents);
eventRouter.get("/not-approve", getNotApproveEvents);

eventRouter.get("/:id", getSingleEventById);   

eventRouter.get("/delete/:id" , getDeleteSingleEventById) ;

// Export code 

export {eventRouter}
