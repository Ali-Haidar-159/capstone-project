// import all the modules and packages 

import swaggerJsDoc from "swagger-jsdoc" ;
import swaggerUi from "swagger-ui-express" ;

// Global Variables 



// Configuration code 

const options = {
    definition: {
        openapi: "3.0.0", // Version of OpenAPI
        info: {
        title: "Event Flow API",        // API Title
        version: "1.0.0",               // API Version
        description: "University Event Management API", // API Description
        },
        servers: [
        {
            url: "/" ,
        },
        ],
    },
    apis: ["./dist/swagger_comments/*.js"], // Path to the API docs (swagger comments in routes)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsDoc(options);

// export code 

export {swaggerSpec , swaggerUi}
