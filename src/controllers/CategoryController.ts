import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class CaregoryController {
  async show(request: Request, response: Response) {
    const categorys = await prisma.category.findMany();

    return response.json(categorys);
  }
  async create(request: Request, response: Response) {
    const body: any = request.body;

    const category = await prisma.category.create({
      data: {
        name: body.name,
        type: body.type,
        color: body.color,
        user_id: body.user_id,
      },
    });

    return response.status(200).json(category);
  }
}
