import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class IncomeController {
  async show(request: Request, response: Response) {
    try {
      const incomes = await prisma.income.findMany();

      return response.json(incomes);
    } catch (e) {
      return response.status(500).json({ message: "There was an error!" });
    }
  }
  async create(request: Request, response: Response) {
    const body: any = request.body;

    try {
      const income = await prisma.income.create({
        data: {
          description: body.description,
          value: body.value,
          source_id: body.source_id,
          owner_id: body.owner_id,
          user_id: body.user_id,
        },
      });

      return response.status(200).json(income);
    } catch (e) {
      return response.status(500).json({ message: "There was an error!" });
    }
  }
  async findOne(request: Request, response: Response) {
    const id = request.params.id;

    try {
      const income = await prisma.income.findUnique({
        where: {
          id,
        },
      });

      if (income) {
        return response.json(income);
      } else {
        return response.status(404).json({ message: "Income not found" });
      }
    } catch (e) {
      console.log(e);

      return response.status(500).json({ message: "There was an error!" });
    }
  }
}
