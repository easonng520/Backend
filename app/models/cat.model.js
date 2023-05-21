module.exports = (sequelize, Sequelize) => {
  const Cat = sequelize.define("cats", {
    published: {
      type: Sequelize.BOOLEAN
    },
   image: {
      type: Sequelize.STRING
    },
      name: {
      type: Sequelize.STRING
    },
      sex: {
      type: Sequelize.STRING
    },
 breed: {
      type: Sequelize.STRING
    },
   DOB: {
      type: Sequelize.STRING
    },
       microchip: {
      type: Sequelize.STRING
    },
        centre: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
  remark: {
      type: Sequelize.STRING
    }
    
  });

  return Cat;
};
