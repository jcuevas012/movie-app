import { Request, Response, Router } from 'express'

import db from '../models'

export const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const payload = req.body
    const movie = await db.movie.create(payload)

    res.send(movie).status(200)
})

router.get('/', async (req: Request, res: Response) => {
    const movies = await db.movie.findAll()

    res.send(movies).status(200)
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const movie = await db.movie.findOne({ where: { id } })

    res.send(movie).status(200)
})

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const actor = await db.actor.destroy({ where: { id } })

    res.send(actor).status(200)
})

export { router as movieRouter }
