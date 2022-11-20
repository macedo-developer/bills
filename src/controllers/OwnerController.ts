import { Request, Response } from "express";

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class OwnerController {
  async show(request: Request, response: Response) {
    const owners = await prisma.owner.findMany();

    return response.json(owners);
  }

  async create(request: Request, response: Response) {
    const body: any = request.body;

    try {
      const owner = await prisma.owner.create({
        data: {
          name: body.name,
          user_id: body.user_id,
        },
      });

      return response.status(200).json(owner);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return response
          .status(500)
          .json({ error: "There was an error creating!" });
      }
    }
  }
}
