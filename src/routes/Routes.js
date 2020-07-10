import { Router } from 'express'
import RegisterController from '../app/http/Controllers/RegisterController'

const router = Router()

router.post('/register', RegisterController.store)

export default router