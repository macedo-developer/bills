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

    const existsUser = await prisma.user.findMany({
      where: {
        name: body.name,
      },
    });

    if (existsUser.length > 0) {
      return response.status(400).json({ message: "User exists!" });
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        password: md5(body.password),
      },
    });

    return response.status(200).json(user);
  }
  async findOne(request: Request, response: Response) {
    const body: any = request.body;

    try {
      const findOneUser = await prisma.user.findMany({
        where: {
          name: body.name,
          password: md5(body.password),
        },
      });

      if (findOneUser.length > 0) {
        return response
          .status(200)
          .json({ message: "User found!", data: findOneUser });
      } else {
        return response.status(404).json({
          message: "User not found!",
        });
      }
    } catch (e) {
      return response.status(500).json({ message: "There was an error!" });
    }
  }
  async update(request: Request, response: Response) {
    const body: any = request.body;

    try {
      const userUpdate = await prisma.user.update({
        where: {
          id: body.id,
        },
        data: {
          password: md5(body.password),
        },
      });

      return response
        .status(200)
        .json({ message: "Updating!", data: userUpdate });
    } catch (e) {
      return response
        .status(500)
        .json({ error: "There was an error updating!" });
    }
  }
}
