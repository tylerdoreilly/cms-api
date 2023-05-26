module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  
    return Project;
  };