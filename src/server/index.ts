import express from "express";

const PORT = process.env.PORT ?? 3002;

const app = express();

app.get('/api/hi', (req, res) => res.send("hello there Jesse"));
app.get('/api/bye', (req, res) => res.send("Bye for now Jesse"));

app.listen(PORT, () => console.log("Express server has started and is listening on port 3002"));