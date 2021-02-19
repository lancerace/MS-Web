module.exports = {
   type: "mysql",
   port: process.env.DATABASE_PORT,
   host: 'localhost',
   username: process.env.DATABASE_USERNAME,
   password: process.env.DATABASE_PASSWORD,
   DATABASE: process.env.DATABASE_NAME,
   synchronize: true,
   logging: false,
   ssl: { rejectUnauthorized: false },
   entities: ["src/entity/**/*.ts"],
   migrations: ["src/migration/**/*.ts"],
   subscribers: ["src/subscriber/**/*.ts"],
   cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
   }
   // etc
}

