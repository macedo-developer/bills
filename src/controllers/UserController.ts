import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import md5 from "md5";

const prisma = new PrismaClient();

export default class UserController {
  async show(request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.json(users);
  }
  async create(request: Request, response: Response) {
    const body: any = request.body;

    const user = await prisma.user.create({
      data: {
        name: body.name,
        password: md5(body.password),
      },
    });

    return response.status(200).json(user);
  }
}
