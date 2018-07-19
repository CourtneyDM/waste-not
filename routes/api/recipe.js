// Routes for handling API calls to the database
const router = require( 'express' ).Router();
const recipeController = require( '../../controllers/recipeController' );

// Routes to /api/recipe
router.route( '/' )
    .get( recipeController.findAll )
    .post( recipeController.create );

router.route( '/:item' )
    .get( recipeController.findAll )
    .post( recipeController.create );

    
module.exports = router;