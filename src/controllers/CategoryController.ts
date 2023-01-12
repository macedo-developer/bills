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
  async update(request: Request, response: Response) {
    const body: any = request.body;

    try {
      const categoryUpdate = await prisma.category.update({
        where: {
          id: request.params.id,
        },
        data: {
          name: body.name,
          type: body.type,
          color: body.type,
          user_id: body.user_id,
        },
      });

      return response.status(201).json(categoryUpdate);
    } catch (e) {
      return response
        .status(500)
        .json({ error: "There was an error updating!" });
    }
  }
  async findOne(request: Request, response: Response) {
    const id = request.params.id;

    try {
      const categoryOne = await prisma.category.findUnique({
        where: {
          id: id,
        },
      });

      if (categoryOne) {
        return response.json(categoryOne);
      } else {
        return response.status(404).json({ message: "Category not found!" });
      }
    } catch (e) {
      return response.status(500).json({ message: "There was an error!" });
    }
  }
}
