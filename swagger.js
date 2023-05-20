const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/cat.routes']

swaggerAutogen(outputFile, endpointsFiles)