import { Request, Response, Router } from 'express'

import BadRequestError from '../errors/bad-request-error'
import requestValidator from '../middlewares/request-validator'
import utils from '../utils'
import validation from '../validators/signup-validator'

// @ts-ignore
import db from '../models'

const router = Router()

router.post('/signup', [...validation], requestValidator, async (req: Request, res: Response) => {
    const { email, password } = req.body

    const userFound = await db.user.findOne({ where: { email } })

    if (userFound) {
        throw new BadRequestError('Email already exist')
    }

    const createdUser = await db.user.create({ email, password })

    // generate jwt

    const jwt = utils.jwt.generateToken({
        id: createdUser.id,
        email: createdUser.email,
    })

    // set jwt to session

    req.session.jwt = jwt

    res.status(201).send({ email })
})

export { router as signUpRouter }
