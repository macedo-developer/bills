import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

const port = 3000;

app
  .listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
  })
  .on("error", (error) => {
    console.log(`Server not running on port ${port} ❌`, error);
  });
