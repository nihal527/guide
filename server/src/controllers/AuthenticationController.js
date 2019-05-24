
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecter, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {

    async register(req, res) {
        try {
            console.log("register");

            const user = await User.create(req.body)
            res.send(user.toJSON())

        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },

    async login(req, res) {
        try {


            const { email, password } = req.body
            const user = await User.findOne({ where: { email: email } })

            if (!user) {
                return res.status(403).send({
                    error: 'Login bilgileri yanlış'
                })
            }
            //TODO burdda hata var bakılacak 3. ders 43:35

            const isPasswordValid = await user.comparePassword(password)
            console.log("login", isPasswordValid);
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Login bilgileri yanlış'
                })
            }
            const userJson = user.toJSON()

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })

        } catch (error) {
            res.status(500).send({
                error: 'login sırasunda hata meydana geldi'
            })

        }
    }
}