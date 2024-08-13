import { Request, Response } from "express";
import prisma from "../prisma/client";
import IUser from "../interface/IUser";

export default class CreateAccountController {
	private async createUser(email: string, password: string, res: Response) {
		const newUser = await prisma.user.create({
			data: {
				email,
				password,
			},
		});

		res.json({
			user: newUser,
		}).status(201);
	}

	async handle(req: Request, res: Response) {
		const { email, password }: IUser = req.body;
		console.log(email);
		const USER_EXISTS = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (USER_EXISTS) return res.json({ message: "User already exists" }).status(401);
		await this.createUser(email, password, res);
	}
}
