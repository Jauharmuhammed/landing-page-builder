import { Config } from "drizzle-kit";

// .env connot be accessed at root folder thats why we use 'dotenv'
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
    driver: "pg",
    schema: "./src/lib/db/schema.ts",
    out: './drizzle',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    },
} satisfies Config;

// npx drizzle-kit push:pg
// npx drizzle-kit studio