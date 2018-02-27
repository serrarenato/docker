const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require ('cors')

//Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

//rest Api
Client.methos(['get', 'post' , 'put', 'delete'])

Client.updateOptions({new: true, runValidators: true})

// routes
Client.register(server, '/clients')

//Start Server
server.listen(3000)
