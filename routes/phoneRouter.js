const express = require('express');
const bodyParser = require('body-parser');
const Phone = require('../model/phone');

const phoneRouter = express.Router();

phoneRouter.use(bodyParser.json());

phoneRouter.route('/')
.get((req,res,next) => {
    Phone.find()
    .then(phones => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(phones);
    })
    .catch(err => {
        console.log('Get error', req.body);
        next(err)});
})

.post((req,res, next) => {
    Phone.create(req.body)
    .then(phone => {
        console.log('Phone Created ', phone);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(phone);
    })
    .catch(err => {
        console.log('Phone not Created ',req.body);
        next(err)});
});



module.exports = phoneRouter;