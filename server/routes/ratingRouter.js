const Router = require('express')
const router = new Router()
const ratingController = require('../controllers/ratingController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), ratingController.create)
router.get('/', ratingController.getAll)

module.exports = router