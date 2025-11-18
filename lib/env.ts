/**
 * Environment Variables Validation
 * Ensures all required environment variables are present and valid
 */

import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().min(1),
});

const processEnv = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

let env: z.infer<typeof envSchema>;

try {
  env = envSchema.parse(processEnv);
} catch (error) {
  console.error('❌ Invalid environment variables:', error);
  throw new Error('Invalid environment variables');
}

export { env };
