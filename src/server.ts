import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";

import routes from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

const port = 3000;

app
  .listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
  })
  .on("error", (error) => {
    console.log(`Server not running on port ${port} ❌`, error);
  });
