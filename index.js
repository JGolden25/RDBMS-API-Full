const express = require('express')
const helmet = require('helmet')

const server = express()
const server = express()

server.use(helmet())
server.use(express.json())

server.listen(9000, () => console.log('\nAPI running on 9k\n'))