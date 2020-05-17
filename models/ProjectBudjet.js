
'use strict';
  module.exports = (sequelize, DataTypes) => {
    var PB = sequelize.define("ProjectBudjet", {
    ProjectBudjetId:{
    type:DataTypes.INTEGER,
    primaryKey:true,
	},
	ProjectName:{
		type:DataTypes.STRING
	},
  LeadOrganization:{
    type:DataTypes.STRING
  }
    });


    PB.associate = (models) => {
       models.ProjectBudjet.hasMany(models.Personalcost,{foreignKey:"ProjectBudjetId"})
       models.ProjectBudjet.hasMany(models.PEM,{foreignKey:"ProjectBudjetId"})
       models.ProjectBudjet.hasMany(models.ProjectSupplie,{foreignKey:"ProjectBudjetId"})
       models.ProjectBudjet.hasMany(models.SubContracting,{foreignKey:"ProjectBudjetId"})
       models.ProjectBudjet.hasMany(models.MAW,{foreignKey:"ProjectBudjetId"})
       models.ProjectBudjet.hasMany(models.Travel,{foreignKey:"ProjectBudjetId"})
       models.ProjectBudjet.hasMany(models.LOC,{foreignKey:"ProjectBudjetId"})
    };
    return PB;
  };