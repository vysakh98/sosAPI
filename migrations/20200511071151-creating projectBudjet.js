'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProjectBudjets', {
     ProjectBudjetId:{
    type:Sequelize.INTEGER,
    primaryKey:true,
  },
  ProjectName:{
    type:Sequelize.STRING
  },
  LeadOrganization:{
    type:Sequelize.STRING
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
    return queryInterface.dropTable('ProjectBudjets')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
