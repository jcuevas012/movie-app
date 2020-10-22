import { Request, Response, Router } from 'express'

import db from '../models'

export const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const payload = req.body
    const actor = await db.actor.create(payload)

    res.send(actor).status(200)
})

router.get('/', async (req: Request, res: Response) => {
    const actors = await db.actor.findAll()

    res.send(actors).status(200)
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const actor = await db.actor.findOne({ where: { id } })

    res.send(actor).status(200)
})

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const actor = await db.actor.destroy({ where: { id } })

    res.send(actor).status(200)
})

export { router as actorRouter }
