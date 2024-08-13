import { Router } from "express";
import createAccount from "./createAccountRoute";

const router = Router();

router.use(createAccount);

export default router;
