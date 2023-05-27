module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("messages", {
    type: {
      type: Sequelize.STRING,
    },
    filename: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB("long"),
    },


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
  favourites: {
      type: Sequelize.STRING
    }


    
  });

  return Message;
};


