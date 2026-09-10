// Import all the packages and modules 

import express from "express" ;
import { postSuperAdmin } from "../controller/superAdminAuth.controller";

// Global Variable

let superAdminRouter = express.Router() ;

// Router Code 

superAdminRouter.post("/super-admin" , postSuperAdmin) ;

// Export Code 

export {superAdminRouter}
