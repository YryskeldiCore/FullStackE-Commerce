const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const ratingRouter = require('./ratingRouter')
const basketDeviceRouter = require('./basketDeviceRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/rating', ratingRouter)
router.use('/basket_device', basketDeviceRouter)

module.exports = router