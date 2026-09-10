// import all the packages and modules 

import express from "express" ;
import { postLoginAdmin } from "../controller/auth2.controller";

// Global all variables 

let authRouter2 = express.Router() ;

// Router Code 

authRouter2.post("/admin" , postLoginAdmin) ;

// Export Code 

export {authRouter2} ;
