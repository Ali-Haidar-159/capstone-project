// Import all the packages and modules 

import express from "express" ;

import { getAllClubs, getDeleteClub, getSingleClub, postCreateClub } from "../controller/club.controller";

// Global Variables 

let clubRouter = express.Router() ;

// Router Code 

clubRouter.post("/create-club" , postCreateClub) ;
clubRouter.get("/all" , getAllClubs) ;
clubRouter.get("/:id" , getSingleClub) ;
clubRouter.get("/delete/:id" , getDeleteClub) ;

// Export code 

export {clubRouter}
