const {BasketDevice} = require('../models/models')

class BasketDeviceController {
    async create(req, res){
        const {id} = req.body
        const basketdevice = await BasketDevice.create({id})
        return res.json(basketdevice)
    }

    async getAll(req, res){
        const basketdevice = await BasketDevice.findAll()
        return res.json(basketdevice)
    }
}

module.exports = new BasketDeviceController()
