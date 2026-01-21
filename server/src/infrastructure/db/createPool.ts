import { Pool } from 'pg'

const connectionString = process.env.SUPABASE_DB_URL
// to je "Connection string" (without SSL?) iz Supabase settings -> Database

export const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})