import { neon } from "@neondatabase/serverless";
import dotenv from 'dotenv';

dotenv.config();

const {PGUSER, PGPASSWORD, PGHOST, PGDATABASE} = process.env;



// creates a SQL connection using our env variables

// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely

export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
)
'postgresql://neondb_owner:npg_hZ8yp6Bcqena@ep-long-morning-a8cm3m14-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
