module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("messages", {
    message: {
      type: Sequelize.STRING,
    },
    reply: {
      type: Sequelize.STRING,
    },
     catid: {
      type: Sequelize.INTEGER,
    }
  });

  return Message;
};


