import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db.js";
import urlRoutes from "./routes/urlroutes.js";
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
dotenv.config();
const swaggerdocument =JSON.parse(fs.readFileSync('./uploads/openapi.json','utf-8'));
const app = express();

app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerdocument))
app.use(cors({
  origin: "http://localhost:3000", // your frontend
  credentials: true
}));
app.use(express.json());
connectDb();
app.use("/api", urlRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
