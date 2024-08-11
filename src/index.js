import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import db from './db/db.js'

db()
configDotenv();
const app = express();
const port = process.env.PORT || 4500;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is runing on ${port}`);
});
