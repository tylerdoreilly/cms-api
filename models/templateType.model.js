module.exports = (sequelize, Sequelize) => {
    const TemplateType = sequelize.define("template_types", {
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
  
    return TemplateType;
  };