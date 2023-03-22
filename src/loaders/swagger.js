const path = require('path');

module.exports = {
    swaggerDefinition: {
        openapi: "1.0.0",
        info: {
            version: "1.0.0",
            title: "proyectBase back-end",
            description: "Service back-end for read endPoints",
            contact: {
                name: "proyectBase Documentation api",
                url: '',
                email: 'dasvv7@gmail.com'
            }
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "first version server"
            }]
    },
    apis: [
        path.resolve(__dirname, '../') + '/routes/*.js'
    ]
}
