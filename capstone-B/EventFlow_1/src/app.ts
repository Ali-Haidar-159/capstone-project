// Require All The Modules , Packages And Objects : 

import express , {Application,Request,Response,NextFunction} from "express" ;
import cors from "cors" ;
import morgan from "morgan";
import passport  from "passport";
import session from "express-session";

// import {createServer} from "https" ;
import {createServer} from "http" ;
import path from "path";
import fs from "fs" ;

import "./config/passport.config" ;
import "./config/passport2.config" ;
import "./config/passportSerialize.config"
import { ResponseTemp } from "./types/Response";
import { swaggerSpec, swaggerUi } from "./config/swagger.config";

import { authRouter } from "./router/auth.router";
import { userRouter } from "./router/user.router";
import { clubRouter } from "./router/club.router";
import { eventRouter } from "./router/event.router";
import { authRouter2 } from "./router/auth2.router";
import { superAdminRouter } from "./router/superAdminAuth.router";

// Global Variables 



//Creating Server : 

let app:Application = express() ;
// let myServer = createServer({

//     key : fs.readFileSync(path.join(__dirname , "asset" , "SSL" , "key.pem")) ,
//     cert : fs.readFileSync(path.join(__dirname , "asset" , "SSL" , "cert.pem")) 
    
// } , app) ;

let myServer = createServer(app) ;

// Connect With Server : 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , "public"))) ;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(morgan("dev")) ;

app.set("trust proxy" , 1) ;
app.use(session({

        secret : "keyboard cat" ,
        saveUninitialized : true ,
        resave : false

    })
);
app.use(passport.initialize()) ;
app.use(passport.session()) ;

app.use("/auth" , authRouter) ;
app.use("/auth" , authRouter2) ;
app.use("/auth" , superAdminRouter) ;
app.use("/users" , userRouter) ;
app.use("/clubs" , clubRouter) ;
app.use("/events" , eventRouter) ;


// Request-Response-Cycle : 

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/" , function(req:Request , res:Response<ResponseTemp>):Response<ResponseTemp>{

    return res.status(200).json({

        status : 200 ,
        message : "HOME PAGE"

    });

});

// Important Middlewares 

app.use(function(req:Request , res:Response , next:NextFunction):void{

    res.set("Cache-Control" , "public, max-age=3600") ;
    next() ;

}) ;

app.use(function(req:Request , res:Response<ResponseTemp> , next:NextFunction):Response<ResponseTemp>{

    return res.status(404).json({

        status : 404 ,
        message : "Page Not Found !!!" 

    });

});

app.use(function(err:any , req:Request , res:Response<ResponseTemp> , next:NextFunction):Response<ResponseTemp>{

    return res.status(500).json({

        status : 500 ,
        message : "Find Server Error !!!" ,
        error : err

    });

});

// Exports Code :

export {myServer} ;
