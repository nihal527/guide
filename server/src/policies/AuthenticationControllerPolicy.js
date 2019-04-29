const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const { error, value } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'geçerli mail adresi olmalıdır'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Şifre kuralları : <br>
                        1. Büyük harf, küçük harf ve sayı içermelidir <br>
                        2. En az 8 en fazla 32 karakter içermelidir
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Geçersiz kayıt bilgisi'
                    })
            }

        } else {
            next()
        }
    }
}