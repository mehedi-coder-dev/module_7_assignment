const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const router = require('./src/Routes/api')
const app = new express();


app.use(bodyParser())
app.use(cookieParser())
app.use(multer().array())
app.use(cors())
app.use(expressMongoSanitize())
app.use(expressRateLimit())
app.use(helmet())
app.use(hpp())
app.use('/api/v1',router)

app.use('*',(req,res)=>{
    res.status(404).json({status:'error',data:'NOT FOUND'})
})
module.exports = app