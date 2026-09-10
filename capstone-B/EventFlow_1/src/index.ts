// Require All The Modules , Packages And Objects : 

import { myServer } from "./app";

import chalk from "chalk";
import dotenv from "dotenv" ;
dotenv.config() ;

// Global Variables  

const preferredPort = Number(process.env.PORT || 5000) ;
let consoleDesign = chalk.bgRed.bold.italic ;
const maxPortAttempts = 10;

//Listening Server : 

function listenOnPort(portNumber:number , attempt:number = 0):void{

    myServer.listen(portNumber , function():void{

        console.log(consoleDesign(`Server Is Running At http://localhost:${portNumber} ...`));

    });
}

myServer.on("error" , function(error:NodeJS.ErrnoException):void{

    if(error.code === "EADDRINUSE")
    {
        const portError = error as NodeJS.ErrnoException & { port?: number | string };
        const attemptedPort = Number(portError.port ?? preferredPort);
        const nextPort = attemptedPort + 1;
        const offset = nextPort - preferredPort;

        if(offset > maxPortAttempts)
        {
            console.error(`No free port found between ${preferredPort} and ${preferredPort + maxPortAttempts}.`) ;
            process.exit(1) ;
        }

        console.warn(`Port ${attemptedPort} is already in use. Retrying on port ${nextPort}...`) ;
        listenOnPort(nextPort , offset) ;
        return ;
    }

    console.error(error) ;
    process.exit(1) ;

}) ;

listenOnPort(preferredPort) ;

// Exports Code :


