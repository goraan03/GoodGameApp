import express from 'express'
import cors from 'cors'

export function createApp() {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.get('/health', (_req, res) => {
    res.json({ ok: true })
  })

  // ovde ćemo kasnije dodavati rute, npr:
  // app.post('/api/reservations', createReservationHandler)

  return app
}