import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./config/db.js";
import router from "./routes/userRoute.js";

dotenv.config();

const app = express();


app.use(express.json()); 
app.use(cors({
  origin: 'https://learn-sphere-frontend-two.vercel.app', 
  credentials: true,
}));


connectdb();


app.get("/", (req, res) => {
  res.send("Backend is Running");
});


app.use("/api", router);


app.listen(process.env.PORT, () => {
  console.log(`Backend is running on port ${process.env.PORT}`);
});
