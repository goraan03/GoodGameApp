import { Pool } from 'pg'
import { config } from '../../config'

if (!config.supabaseDbUrl) {
  throw new Error('SUPABASE_DB_URL is not set')
}

// ZA LOKALNI POSTGRES – BEZ SSL:
export const pool = new Pool({
  connectionString: config.supabaseDbUrl,
  ssl: false,
})