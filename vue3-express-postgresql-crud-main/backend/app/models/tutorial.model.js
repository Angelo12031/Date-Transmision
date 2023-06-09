module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
    make: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.FLOAT
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    motorCapacity: {
      type: Sequelize.STRING
    }
  });

  return Car;
};