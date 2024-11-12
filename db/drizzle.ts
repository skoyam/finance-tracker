// Make sure to install the 'pg' package
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

 
