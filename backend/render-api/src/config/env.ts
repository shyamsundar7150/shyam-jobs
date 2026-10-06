import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? '4000'),
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:8081',
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:8081,http://127.0.0.1:8081',
  supabaseUrl: process.env.SUPABASE_URL ?? '',
  supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY ?? '',
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
};

export function getAllowedOrigins(): string[] {
  return env.corsOrigin
    .split(',')
    .map((origin: string) => origin.trim())
    .filter(Boolean);
}
