
'use strict';
  module.exports = (sequelize, DataTypes) => {
    var Sos = sequelize.define("Soscontribution", {
    	sosid:{
    type:DataTypes.INTEGER,
    primaryKey:true,
	},
	Amount:{
		type:DataTypes.INTEGER
	},

    });


    Sos.associate = (models) => {
       models.Soscontribution.hasMany(models.Othercontribution,{foreignKey: "sosId"})
    };
    return Sos;
  };