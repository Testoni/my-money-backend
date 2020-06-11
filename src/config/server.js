const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// all requests use bodyparser in url encoded format
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`Running on port ${port}`)
})