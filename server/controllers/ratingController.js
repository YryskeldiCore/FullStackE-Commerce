const {Rating} = require('../models/models')
const ApiError = require('../error/apiError')

class RatingController {
    async create (req, res){
        const {rate} = req.body
        const rating = await Rating.create({rate})
        return res.json(rating)
    }

    async getAll (req, res){
        const ratings = await Rating.findAll()
        return res.json(ratings)
    }
}

module.exports = new RatingController()