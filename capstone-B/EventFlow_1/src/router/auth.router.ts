// Import all the modules and packages 

import express from "express" ;
import { getLogout, getMe, postLogin, postRegister } from "../controller/auth.controller";

// Main code 

let authRouter = express.Router() ;

authRouter.post("/register" , postRegister) ;
authRouter.post("/login" , postLogin) ;
authRouter.get("/me", getMe);

authRouter.get("/logout" , getLogout) ;


// exports code 

export {authRouter} ;