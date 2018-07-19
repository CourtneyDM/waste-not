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

router.delete("/:id", function (req, res) {
        db.item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbitem) {
            res.json(dbitem)
        });
    });
    
module.exports = router;
    