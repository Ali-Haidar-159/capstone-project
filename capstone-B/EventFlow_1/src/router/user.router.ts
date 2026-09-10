// Require All The Modules , Packages And Objects : 

import express from "express" ;

import { getRegisteredEvents, getUserData, postRegisteredEvents, postUserData } from "../controller/user.controller";

// Global Variables 

let userRouter = express.Router() ;

// Router Code 

userRouter.post("/user-data" , postUserData) ;
userRouter.get("/user-data/:gmail" , getUserData) ;

userRouter.post("/registered-events", postRegisteredEvents) ;
userRouter.get("/registered-events/:gmail" , getRegisteredEvents) ;

// Exports Code :

export {userRouter}
