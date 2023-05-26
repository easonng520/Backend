const db = require("../models");
const Cat = db.cats;
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
   const bodyFavourites = req.body.favourites;
  const paramsFavourites = req.params.favourites;
    const queryFavourites = req.query.favourites;
 

 console.log('bodyFavourites:'+bodyFavourites)
   console.log('paramsFavourites:'+paramsFavourites)
  console.log('queryFavourites:'+queryFavourites)
  
  Cat.update({favourites:bodyFavourites}, {
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
