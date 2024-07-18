import express from "express";

const app = express();

app.get('/api/hi', (req, res) => res.send("hello there"));

app.listen(3002, () => console.log("Express server has started and is listening on port 3002"));