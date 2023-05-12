module.exports = (sequelize, Sequelize) => {
  const Cat = sequelize.define("cat", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Cat;
};
