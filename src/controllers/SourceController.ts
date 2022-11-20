import { Request, Response } from "express";

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class SourceController {
  async show(request: Request, response: Response) {
    const sources = await prisma.source.findMany();

    return response.json(sources);
  }

  async create(request: Request, response: Response) {
    const body: any = request.body;
    try {
      const source = await prisma.source.create({
        data: {
          name: body.name,
          user_id: body.user_id,
        },
      });

      return response.status(200).json(source);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return response
          .status(500)
          .json({ error: "There was an error creating!" });
      }
    }
  }
}
