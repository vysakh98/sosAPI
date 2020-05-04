'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 return queryInterface.createTable('Othercontributions', {
  Othresid:{
     type:Sequelize.INTEGER,
     primaryKey:true,
  },
  Organization:{
    type:Sequelize.STRING,
    allowNull:true
  },
  Description:{
    type:Sequelize.STRING,
    allowNull:true
  },
  Amount:{
    type:Sequelize.INTEGER,
    allowNull:true
  },
   sosId:{
    type:Sequelize.INTEGER,
    allowNull:true
  },
  createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE
})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Othercontributions');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
