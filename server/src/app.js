console.log('sds')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    console.log("req  : ", req);

    res.send({
        message: req.body.email + "Kullanıcı kaydedildi"
    })
})

app.listen(process.env.PORT || 8081)