import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import db from "./config/Database.js";
import router from "./Routes/index.js";
import cookieParser from "cookie-parser"

const app = express();
dotenv.config();

// import Users from "./models/Usermodels.js";

// config DB sequalize berfungsi dengan baik
try {
    await db.authenticate();
    console.log("Database connected");
    // Berfungsi untuk meng generate otomatis table database -> await Users.sync()
} catch (error) {
    console.log(error);
}

// Fungsi cors supaya api memberikan izin untuk diakases dari luar
app.use(cors( { credentials:true, origin:'http://localhost:3000' }))
app.use(express.json()); // Supaya bisa menerima data dalam bentuk json
app.use(cookieParser())
app.use(router);

app.listen(5001, () => console.log("Server running on port 5000"));
