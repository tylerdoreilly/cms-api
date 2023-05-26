module.exports = (sequelize, Sequelize) => {
    const CustomControlsLibrary = sequelize.define("custom_controls_library", {      
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      field: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      control: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(50048),
        allowNull: true,
      },
      published: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      date_asof: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  
    return CustomControlsLibrary;
  };
