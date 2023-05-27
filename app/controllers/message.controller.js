const db = require("../models");
const Message = db.messages;
const Op = db.Sequelize.Op;

// Create and Save a new Cat
exports.create = (req, res) => {
  // Validate request
  /*
  if (!req.body.message) {
    res.status(400).send({
      message: "Content can not be empty!"
   });
    return;
  }
*/

     const bodyFavourites = req.body.message;
  const paramsFavourites = req.params.message;
    const queryFavourites = req.query.message;
   console.log('bodyFavourites:'+bodyFavourites)
   console.log('paramsFavourites:'+paramsFavourites)
  console.log('queryFavourites:'+queryFavourites)
  
  // Create a Cat
  const message = {
    message: req.query.message,
    catid: req.query.catid

  };
  console.log(message)
  // Save Cat in the database
  Message.create(message)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message."
      });
    });
};

// Retrieve all Cats from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Message.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cats."
      });
    });
};



// Update a Cat by the id in the request
exports.update = (req, res) => {

  
  const id = req.params.id;
console.log("paramsid"+id)
 
     const bodyMessage = req.body.message;
  const paramsMessage = req.params.message;
    const queryMessage = req.query.message;
   console.log('bodyMessage:'+bodyMessage)
   console.log('paramsMessage:'+paramsMessage)
  console.log('queryMessage:'+queryMessage)
  
 
    Message.update({message:queryMessage}, {
    where: { id: id }
  })

    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Message with id=${id}. Maybe Cat was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cat with id=" + id
      });
    });
};

// Delete a Cat with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Message.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Message with id=${id}. Maybe Cat was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Message with id=" + id
      });
    });
};

