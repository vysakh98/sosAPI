
 'use strict';
  module.exports = (sequelize, DataTypes) => {
    var Others = sequelize.define("Othercontribution", {
        Othresid:{
     type:DataTypes.INTEGER,
     primaryKey:true,
  },
  Organization:{
    type:DataTypes.STRING,
    allowNull:true
  },
  Description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  Amount:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  sosId:{
    type:DataTypes.INTEGER,
    allowNull:true
  }
    });


    Others.associate = (models) => {
       models.Othercontribution.belongsTo(models.Soscontribution, { foreignKey:"sosId"});
    };
    return Others ;
  };