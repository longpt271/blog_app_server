import express from "express";
const router = express.Router();
import {
  createPostCategory,
  getAllPostCategories,
  updatePostCategory,
} from "../controllers/postCategoriesController";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategories);

router.route("/:postCategoryId").put(authGuard, adminGuard, updatePostCategory);

export default router;
