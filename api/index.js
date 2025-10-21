import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../main.html"));
});

app.get("/qr", (req, res) => {
  res.sendFile(path.join(__dirname, "../qr.html"));
});

app.get("/pair", (req, res) => {
  res.sendFile(path.join(__dirname, "../pair.html"));
});

export default app;
