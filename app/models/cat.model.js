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
           
    image: {
      type: Sequelize.STRING
    },
          remark: {
      type: Sequelize.STRING
    }
    
  });

  return Cat;
};
