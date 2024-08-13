import { Router } from "express";
import CreateAccountController from "../controllers/createAccountController";

const router = Router();

router.post("/api/v1/createAccount", (req, res) => {
	const controller = new CreateAccountController();
	controller.handle(req, res);
});

export default router;
