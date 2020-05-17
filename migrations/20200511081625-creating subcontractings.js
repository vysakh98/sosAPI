'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SubContractings', {
      SubContractingId:{
     type:Sequelize.INTEGER,
     primaryKey:true,
  },
  JobTitle:{
    type:Sequelize.STRING,
    allowNull:true
  },
  Units:{
    type:Sequelize.STRING,
    allowNull:true
  },
  NoOfUnits:{
    type:Sequelize.INTEGER,
    allowNull:true
  },
  UnitValue:{
    type:Sequelize.INTEGER,
    allowNull:true
  },
  Total:{
    type:Sequelize.INTEGER,
    allowNull:true
  },
  Description:{
    type:Sequelize.STRING(1234),
    allowNull:true
  },
  Type:{
    type:Sequelize.STRING,
    allowNull:true
  },
  ProjectBudjetId:{
     type:Sequelize.INTEGER,
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
    return queryInterface.dropTable('SubContractings')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
