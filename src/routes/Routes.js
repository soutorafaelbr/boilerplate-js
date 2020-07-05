import { Router } from 'express'
import RegisterController from '../app/http/Controllers/RegisterController'

const router = Router()

router.get('/register', RegisterController.store)

export default router