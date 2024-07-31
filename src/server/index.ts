import express from "express";
import { pool } from "./db";

const PORT = process.env.PORT ?? 3002;
const app = express();


app.get('/api/hi', (req, res) => res.send("hello there Jesse"));
app.get('/api/bye', (req, res) => res.send("Bye for now Jesse"));
app.get('/api/firstKanji', async (req, res) => {
    try {

        const allkanji = await pool.query('SELECT * FROM kanjitest WHERE hIndex = 2000;');
        res.json(allkanji.rows);

    } catch (error) {
        console.log(error)
    }
});

app.listen(PORT, () => console.log(`Express server has started and is listening on port ${PORT}`));