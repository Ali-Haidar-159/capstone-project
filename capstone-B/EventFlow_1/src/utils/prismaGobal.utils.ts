// import all the packages and modules 

import { PrismaClient } from "../../generated/prisma";

// main code 

let prismaGlobal =  new PrismaClient() ;

// export code 

export {prismaGlobal}
