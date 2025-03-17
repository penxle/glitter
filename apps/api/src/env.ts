import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string(),
  LISTEN_PORT: z.coerce.number().optional(),
  PORTONE_API_KEY: z.string(),
  PORTONE_API_SECRET: z.string(),
  PUBLIC_PULUMI_STACK: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
  WEBSITE_URL: z.string(),
});

export const env = schema.parse(process.env);
export const dev = process.env.NODE_ENV !== 'production';
export const production = process.env.PUBLIC_PULUMI_STACK
  ? process.env.PUBLIC_PULUMI_STACK === 'prod'
  : process.env.DOPPLER_ENVIRONMENT === 'prod';
