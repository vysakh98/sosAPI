const Sequelize= require("sequelize")
const sequelize = new Sequelize('sosdb', 'root', '', {
  host: 'localhost',
  dialect:'mysql',
  define: {
    timestamps: false
  }
});

module.exports=sequelize
global.sequelize=sequelize