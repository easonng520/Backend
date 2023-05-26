const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Update a Cat by the id in the request
exports.update = (req, res) => {

  const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

const arrayWithoutD = arrayOfLetters.filter(function (letter) {
    return letter !== 'd';
});

// arrayOfLetters is unchanged
console.log(arrayOfLetters); // ['a', 'b', 'c', 'd', 'e', 'f']

console.log(arrayWithoutD); // ['a', 'b', 'c', 'e', 'f']
  
  const id = req.params.id;
   const catid = req.params.catid;
  
  const email = "a";
  console.log(catid)
  User.update({email:email}, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Favourites was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Favourites with id=${id}. Maybe Favourites was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cat with id=" + id
      });
    });
};
