import { createApp } from './infrastructure/http/server'
import { config } from './config'
import { pool } from './infrastructure/db/pool'

async function start() {
  // opciona provera da li baza radi
  try {
    await pool.query('select 1 as ok')
    console.log('DB connection OK')
  } catch (err) {
    console.error('DB connection error', err)
    process.exit(1)
  }

  const app = createApp()
  app.listen(config.port, () => {
    console.log(`Server listening on http://localhost:${config.port}`)
  })
}

start()