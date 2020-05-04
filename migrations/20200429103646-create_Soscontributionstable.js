'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Soscontributions', 
      {
        sosid:{
    type:Sequelize.INTEGER,
    primaryKey:true,
  },
        Amount:{
    type:Sequelize.INTEGER
  },
  createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE
  });

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Soscontributions')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
