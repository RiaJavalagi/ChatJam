import express from "express";
import {signup,login,logout,updateProfile} from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js";
import { arcjetMiddleware } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetMiddleware);

router.post("/signup",signup);

router.post("/login", login);

router.post("/logout",logout);

router.put("/update-profile", protectRoute ,updateProfile);

router.get("/check", protectRoute, (req, res) => {
  res.status(200).json({
    message: "Protected route works!",
    user: {
      id: req.user._id,
      email: req.user.email,
      fullName: req.user.fullName,
      profilePic: req.user.profilePic
    }
  });
});
export default router;