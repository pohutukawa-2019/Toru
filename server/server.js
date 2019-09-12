const path = require('path')
const express = require('express')

const server = express()
const router = require('./routes')

server.use(express.json())
server.use('/', router)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
