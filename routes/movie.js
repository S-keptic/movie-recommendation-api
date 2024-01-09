import express from 'express'
import movieR from '../controllers/movieController.js'
const router = express.Router()

router.get('/random/movie',movieR)

export default router