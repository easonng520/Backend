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
    },

      
      name: {
      type: Sequelize.STRING
    },
      sex: {
      type: Sequelize.INTEGER
    },
 breed: {
      type: Sequelize.STRING
    },
   
       DOB: {
      type: Sequelize.DATE
    },
       microchip: {
      type: Sequelize.INTEGER
    },
        centre: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER
    },
           
    image: {
      type: Sequelize.INTEGER
    },
          remark: {
      type: Sequelize.INTEGER
    }
    
  });

  return Cat;
};
