import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class ExpenseController {
  async show(request: Request, response: Response) {
    const expenses = await prisma.expense.findMany();

    return response.json(expenses);
  }
  async create(request: Request, response: Response) {
    const body: any = request.body;

    try {
      const expense = await prisma.expense.create({
        data: {
          description: body.description,
          value: body.value,
          installment_amount: body.installment_amount,
          current_installment: body.current_installment,
          date: body.date,
          category_id: body.category_id,
          owner_id: body.owner_id,
          source_id: body.source_id,
          user_id: body.user_id,
        },
      });

      return response.status(200).json(expense);
    } catch (e) {
      console.error(e);

      return response
        .status(500)
        .json({ error: "There was an error creating!" });
    }
  }
}
