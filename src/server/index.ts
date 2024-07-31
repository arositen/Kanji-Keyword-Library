import express from "express";
import { pool } from "./db";

const PORT = process.env.PORT ?? 3002;
const app = express();


app.get('/api/hi', (req, res) => {
    console.log(req)
    res.send("hello there Jesse")
});

app.get('/api/bye', (req, res) => {
    console.log(req)
    res.send("Bye for now Jesse")
});

app.get('/api/firstKanji', async (req, res) => {
    console.log(req)
    try {
        const allkanji = await pool.query('SELECT * FROM kanjitest WHERE h_index = 1;');
        res.json(allkanji.rows)

    } catch (error) {
        console.log(error)
    }
});

app.get('/api/firstTenKanji', async (req, res) => {
    console.log(req)
    try {
        const allkanji = await pool.query('SELECT * FROM kanjitest WHERE h_index <= 10;');
        res.json(allkanji.rows)

    } catch (error) {
        console.log(error)
    }
});

app.listen(PORT, () => console.log(`Express server has started and is listening on port ${PORT}`));