import { Router } from 'express'
import * as filmController from '../controllers/film.controllers.js'

const router = Router()

router.get('/', filmController.getAll)
router.get('/now', filmController.getAllNowFilms)
router.get('/soon', filmController.getAllSoonilms)

router.get('/favourites', filmController.getFavourites)
router.get('/sortpage', filmController.findByName)

router.get('/:id', filmController.getById)
router.patch('/:id/rate', filmController.rateFilm)
router.patch('/:id/favourite', filmController.toggleFavourite)
router.delete('/:id', filmController.deleteFilm)

export default router

