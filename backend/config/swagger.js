/*
Purpose: Swagger configuration
Used In: server.js
Dependencies: swagger-jsdoc
*/

const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fashnix API",
      version: "1.0.0",
      description: "Production-ready E-commerce API documentation",
    },
    servers: [
      {
        url: "https://fashnix-backend-e5as.onrender.com",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
