import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
import catchAsync from "../utils/catchAsync";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, catchAsync(MyUserController.getCurrentUser));
router.post("/", jwtCheck, catchAsync(MyUserController.createCurrentUser));
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  catchAsync(MyUserController.updateCurrentUser)
);

export default router;
