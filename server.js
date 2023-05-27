const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

//var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

global.__basedir = __dirname;

var corsOptions = {
  //origin: "http://localhost:8081"
  origin: "*"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
const Centre = db.centre;
const Breed = db.breed;
const Cat = db.cats;
const Message = db.messages;

 db.sequelize.sync();
// force: true will drop the table if it already exists


db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to loveCATS application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/upload.routes")(app);
require("./app/routes/cat.routes")(app);
require("./app/routes/contact.routes")(app);

require("./app/routes/favourites.routes")(app);

require("./app/routes/message.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

  Centre.create({
    id: 1,
    name: "Hong Kong Centre",
    address:"5 Wan Shing Street, Wan Chai, Hong Kong",
    email:"hkc@lovecats.com",
    phone:"28020501",
  });
 
  Centre.create({
 id: 2,
    name: "Kowloon Centre",
    address:"105 Princess Margaret Road, Kowloon",
    email:"kc@lovecats.com",
    phone:"27139104",
  });
 
  Centre.create({
     id: 3,
    name: "Mui Wo Clinic",
    address:"Shop 14, Mui Wo Clinic, 3 Ngan Wan Road, Mui Wo, Lantau'",
    email:"mwc@lovecats.com",
    phone:"29840060",
  });
  
    Centre.create({
     id: 4,
    name: "Sai Kung Centre",
    address:"7 Sha Tsui Path, Sai Kung",
    email:"skc@lovecats.com",
    phone:"27921535",
  });

    Breed.create({
    id: 1,
    name: "Bengal Cross"
  });

    Breed.create({
    id: 2,
    name: "Chinchilla"
  });

    Breed.create({
    id: 3,
    name: "Domestic Short Hair"
  });

    Breed.create({
    id: 4,
    name: "Domestic Long Hair"
  });

    Breed.create({
    id: 5,
    name: "Scottish Fold"
  });


 Cat.create({
   image:"1.jpg",
    name: "Muffin",
sex:"Male",   
    centre: "Kowloon Centre",
  breed:"Scottish Fold",
   DOB:"2021-1-1",
   microchip:"314985631"
  });
    
 Cat.create({
    image:"2.jpg",
      name: "Cathy",
   sex:"Male", 
    centre: "Mui Wo Clinic",
  breed:"Domestic Short Hair",
   DOB:"2021-1-1",
   microchip:"514941531",
     favourites:"1"
  });

   Cat.create({
    image:"3.jpg",
      name: "Della",
     sex:"Male", 
    centre: "Hong Kong Centre",
  breed:"Bengal Cross",
   DOB:"2021-1-1",
   microchip:"53376193",
     favourites:"1,2"
  });


  Message.create({
   message:"Message 1",
    reply: "Reply 1",
catid:2
  });
    
 Message.create({
    message:"Message 2",
      reply: "Reply 2",
catid:1
  });

 Message.create({
    message:"Message 3",
    catid:3
  });
  
  Message.create({
    message:"Message 4",
      reply: "Reply 4",
catid:1
  });
   
  
}