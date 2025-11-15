import express from "express";
import 'dotenv/config'


const app = express();

const PORT: number = Number(process.env.PORT) || 3000;


app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});