module.exports = (sequelize, Sequelize) => {
  const Centre = sequelize.define("centres", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
      address: {
      type: Sequelize.STRING
    },
      email: {
      type: Sequelize.STRING
    },
      phone: {
      type: Sequelize.STRING
    }
  });

  return Centre;
};
