import { Router } from "express";
import { getOrgs, createOrg } from "../controllers/org.controller.js";

const router = Router();

router.get("/", getOrgs);
router.post("/", createOrg);

export default router;