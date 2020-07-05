import express from 'express'
import router from '../../Routes/Routes'

const kernel = express()

kernel.use(router)

kernel.use(express.json())

export default kernel;