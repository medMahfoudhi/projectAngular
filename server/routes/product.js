import express from "express";
import {
  getAllProduct,
  addProduct,
  deletProduct,
  updateProduct,
  findProduct,
<<<<<<< HEAD
  getOneProdById,
=======
  getOneProdById
>>>>>>> 0583909ce76ea79e3940218c05e3db04cea54090
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", addProduct);
router.delete("/:_id", deletProduct);
router.put("/:_id", updateProduct);
router.get("/findProduct", findProduct);
router.get("/:_id", getOneProdById);

export default router;
