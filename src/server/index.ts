import express from "express";
import { pool } from "./db";
import convertToKana from "@/utils/convertToKana";

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
        const allkanji = await pool.query('SELECT * FROM kanjitest WHERE h_index <= 120;');
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
        const kanaSearchTerms = convertToKana(stringToSearch);

        const allkanji = await pool.query(
            `SELECT * FROM kanjitest WHERE ARRAY_TO_STRING(kunreadings, ',') LIKE '${kanaSearchTerms.hiragana}' 
            OR ARRAY_TO_STRING(kunreadings, ',') LIKE '${kanaSearchTerms.hiragana}.%' 
            OR ARRAY_TO_STRING(kunreadings, ',') LIKE '%${kanaSearchTerms.hiragana}-%' 
            OR ARRAY_TO_STRING(onreadings, ',') LIKE '${kanaSearchTerms.katakana}' 
            OR ARRAY_TO_STRING(onreadings, ',') LIKE '%${kanaSearchTerms.katakana}-%' 
            OR ARRAY_TO_STRING(onreadings, ',') LIKE '${kanaSearchTerms.katakana}.%';`
        );

        res.json(allkanji.rows);

    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => console.log(`Express server has started and is listening on port ${PORT}`));