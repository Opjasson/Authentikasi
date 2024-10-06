import express from "express";
import { getUsers, Register, Login } from "../Controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// menggunakan verifyToken untuk mencegah user tidak bisa mengakses endpoint tertentu

router.get('/users',verifyToken ,getUsers)
router.post('/users', Register)
router.post('/login', Login)

export default router
