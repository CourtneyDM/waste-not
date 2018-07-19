const router = require( 'express' ).Router();
const inventoryRoutes = require( './inventory' );
const foodRoutes = require( './food' );
const chatRoutes = require('./chat');
const recipeRoutes = require('.recipe')

// Routes to Inventory
router.use( '/inventory', inventoryRoutes );

//Routes to Food
router.use( '/food', foodRoutes );

//Routes to Chat
router.use('/chat', chatRoutes);

//Routes to Recipes
router.use('/recipe', recipeRoutes)

module.exports = router;