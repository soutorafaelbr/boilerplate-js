require('dotenv').config({
    path: process.env.NODE_ENV === 'test'
    ? '.env.test'
    : '.env'
})
import express from 'express'
import router from '../../routes/Routes'

const kernel = express()

kernel.use(router)

kernel.use(express.json())

export default kernel;