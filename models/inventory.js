// Import Dependencies
const mongoose = require( 'mongoose' );

// Setup Schema
const Schema = mongoose.Schema;

// Define Inventory Schema
const inventorySchema = new Schema( {
    itemName: {
        type: String,
        required: true
    },
    itemBrandName: {
        type: String,
    },
    bestByDate: {
        type: String,
        required: true
    }
} );

const Inventory = mongoose.model( 'Inventory', inventorySchema );
module.exports = Inventory;





//////

module.exports = (sequelize, DataTypes) => {
    const schema = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      make: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notified: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    };
  
    const SavedSearch = sequelize.define('savedSearch', schema);
  
    SavedSearch.associate = (models) => {
      SavedSearch.belongsTo(models.user, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return SavedSearch;
  };