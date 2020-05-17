'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.createTable('LOCs',{
    LOCId:{
     type:Sequelize.INTEGER,
     primaryKey:true,
  },
  JobTitle:{
    type:Sequelize.STRING,
  },
  Units:{
    type:Sequelize.STRING,
  },
  NoOfUnits:{
    type:Sequelize.INTEGER,
  },
  UnitValue:{
    type:Sequelize.INTEGER,
  },
  Description:{
    type:Sequelize.STRING(1234),
  },
   Total:{
    type:Sequelize.INTEGER,
    allowNull:true
  },
  Type:{
    type:Sequelize.STRING,
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
   
    return queryInterface.dropTable('LOCs')

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
