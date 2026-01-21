import 'dotenv/config'

export const config = {
  port: Number(process.env.PORT || 4000),
  supabaseDbUrl: process.env.SUPABASE_DB_URL ?? '',
}