module.exports = (sequelize, Sequelize) => {
    const CustomControl = sequelize.define("custom_controls", {
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
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
  
    return CustomControl;
  };
