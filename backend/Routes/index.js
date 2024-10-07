import express from "express";
import { getUsers, Register, Login, Logout } from "../Controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../Controllers/RefreshToken.js";

const router = express.Router();

// menggunakan verifyToken untuk mencegah user tidak bisa mengakses endpoint tertentu

router.get('/users',verifyToken ,getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

export default router
