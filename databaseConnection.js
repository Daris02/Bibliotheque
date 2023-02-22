import pg from "pg";

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "bibliotheque",
    password: "postgres", // <======= A modifier
    port: 5432
});