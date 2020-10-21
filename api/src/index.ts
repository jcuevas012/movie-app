import 'express-async-errors'

import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import express, { Application } from 'express'

// @ts-ignore
import db from './models'

import NotFound from './errors/not-found-error'
import { errorHandler } from './middlewares/error-handler'
import { currentUserRouter, signInRouter, signOutRouter, signUpRouter } from './routes'

const app: Application = express()

const PORT = 3000

app.set('trust proxy', 1) // trust first proxy

app.use(json())
app.use(
    cookieSession({
        signed: false,
        secure: true,
    }),
)

app.use('/api/users', currentUserRouter)
app.use('/api/users', signInRouter)
app.use('/api/users', signUpRouter)
app.use('/api/users', signOutRouter)

app.all('*', () => {
    throw new NotFound()
})

app.use(errorHandler)

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined.')
    }

    await db.sequelize.sync()

    app.listen(PORT, () => {
        console.log(`Auth service listening in port ${PORT}`)
    })
}

start()
