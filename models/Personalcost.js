
 'use strict';
  module.exports = (sequelize, DataTypes) => {
    var PC = sequelize.define("Personalcost", {
  PersonalCostId:{
     type:DataTypes.INTEGER,
     primaryKey:true,
  },
  JobTitle:{
    type:DataTypes.STRING,
    allowNull:true
  },
  Units:{
    type:DataTypes.STRING,
    allowNull:true
  },
  NoOfUnits:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  UnitValue:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  Total:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  Description:{
    type:DataTypes.STRING(1234),
    allowNull:true
  },
  Type:{
    type:DataTypes.STRING,
    allowNull:true
  },
  ProjectBudjetId:{
     type:DataTypes.INTEGER,
     allowNull:false
  }});

    PC.associate = (models) => {
       models.Personalcost.belongsTo(models.ProjectBudjet, { foreignKey:"ProjectBudjetId"});
    };

    return PC ;
  };