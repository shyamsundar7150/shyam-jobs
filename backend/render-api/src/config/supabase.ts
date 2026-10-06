import { env } from './env';

export const supabaseConfig = {
  url: env.supabaseUrl,
  publishableKey: env.supabasePublishableKey,
  serviceRoleKey: env.supabaseServiceRoleKey,
};

export const isSupabaseConfigured = Boolean(
  supabaseConfig.url && (supabaseConfig.publishableKey || supabaseConfig.serviceRoleKey),
);
