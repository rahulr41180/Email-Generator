
import express from "express";
import { 
    getAllLeadsDataController,
    generateEmailController
} from "../controllers/leads.controller.js";

const router = express.Router();

router.get("/get-all-data", getAllLeadsDataController);
router.post("/generate-emails", generateEmailController);

export default router;