
const { User } = require('../models')

module.exports = {

    async register(req, res) {
        try {
            console.log("burda");

            const user = await User.create(req.body)
            res.send(user.toJSON())

        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
}