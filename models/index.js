const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});
  
const dbTest = {};

dbTest.Sequelize = Sequelize;
dbTest.sequelize = sequelize;

dbTest.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
dbTest.projects = require("./project.model.js")(sequelize, Sequelize);
dbTest.templateData = require("./templateData.model.js")(sequelize, Sequelize);
dbTest.templateType = require("./templateType.model.js")(sequelize, Sequelize);
dbTest.customControls = require("./customControl.model.js")(sequelize, Sequelize);
dbTest.customControlsLibrary = require("./customControlLibrary.model.js")(sequelize, Sequelize);

dbTest.projects.hasMany(dbTest.templateData, { as: "templates" });
dbTest.templateData.belongsTo(dbTest.projects, {
  foreignKey: "projectId",
  as: "project",
});

dbTest.templateData.hasOne(dbTest.templateType, { as: "type" })
dbTest.templateData.belongsTo(dbTest.templateType, {
  foreignKey: "templateTypeId",
  as: "templateType",
});


module.exports = dbTest;