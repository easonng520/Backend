module.exports = (sequelize, Sequelize) => {
  const Breed = sequelize.define("breeds", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return Breed;
};
