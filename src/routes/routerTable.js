import express from "express";
import { createTable, deleteTable, getPaginatedTable, getTable, getTableByCafe, getTableById, updateTable } from "../controller/tableController.js";
import { verifikasi } from "../middleware/verifikasi.js";

const router = express.Router();

router.get("/showpaginated", getPaginatedTable);
router.get("/show", getTable);
router.get("/showcafename/:outlet_name", getTableByCafe);
router.get("/show/:id", getTableById);
router.post("/create", verifikasi, createTable);
router.put("/update/:id", verifikasi, updateTable);
router.delete("/delete/:id", verifikasi, deleteTable);

export default router;
