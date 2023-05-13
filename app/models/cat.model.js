module.exports = (sequelize, Sequelize) => {
  const Cat = sequelize.define("cat", {
    title: {
      type: Sequelize.STRING
    },
 breed: {
      type: Sequelize.STRING
    },
      microchip: {
      type: Sequelize.INTEGER
    },
       DOB: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.INTEGER
    },
          sex: {
      type: Sequelize.INTEGER
    },
          name: {
      type: Sequelize.INTEGER
    },
          image: {
      type: Sequelize.INTEGER
    },
          remark: {
      type: Sequelize.INTEGER
    },
      centre: {
      type: Sequelize.STRING
    },
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
