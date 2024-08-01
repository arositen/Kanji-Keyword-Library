import express from "express";
import { pool } from "./db";

const PORT = process.env.PORT ?? 3002;
const app = express();

app.get('/api/firstKanji', async (req, res) => {
    try {
        const allkanji = await pool.query('SELECT * FROM kanjitest WHERE h_index = 1;');
        res.json(allkanji.rows)

    } catch (error) {
        console.log(error)
    }
});

app.get('/api/firstTenKanji', async (req, res) => {

    try {
        const allkanji = await pool.query('SELECT * FROM kanjitest WHERE h_index <= 10;');
        res.json(allkanji.rows)

    } catch (error) {
        console.log(error)
    }
});

app.get('/api/randomKanji', async (req, res) => {

    try {
        const randomNum = Math.floor((Math.random() * 2200) + 1);
        const allkanji = await pool.query(`SELECT * FROM kanjitest WHERE h_index = ${randomNum};`);
        res.send(allkanji.rows[0]);

    } catch (error) {
        console.log(error)
    }
});

app.get('/api/search/:searchString', async (req, res) => {
    try {

        const stringToSearch = req.params.searchString;
        const allkanji = await pool.query(`SELECT * FROM kanjitest WHERE '${stringToSearch}'= ANY(kunreadings) OR '${stringToSearch}' = ANY(onreadings);`);
        res.json(allkanji.rows);

    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => console.log(`Express server has started and is listening on port ${PORT}`));