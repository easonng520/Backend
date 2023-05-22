const swaggerAutogen = require('swagger-autogen')()
const doc = {
  info: {
    title: 'loveCATS API',
    description: 'Description',
  },
  host: 'https://backend.easonng520.repl.co/',
  schemes: ['https'],
};
const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/auth.routes','./app/routes/cat.routes','./app/routes/upload.routes','./app/routes/user.routes']
swaggerAutogen(outputFile, endpointsFiles,doc)