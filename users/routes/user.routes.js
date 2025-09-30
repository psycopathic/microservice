import express from 'express'
import userController from '../controllers/user.controller.js'
import { userAuth } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/profile', userAuth, userController.profile)
router.get('/accepted-ride', userAuth, userController.acceptedRide)

export default router
