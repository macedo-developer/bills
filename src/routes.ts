import { Router } from "express";
import CategoryController from "./controllers/CategoryController";
import ExpenseController from "./controllers/ExpenseController";
import OwnerController from "./controllers/OwnerController";
import SourceController from "./controllers/SourceController";
import UserController from "./controllers/UserController";

const routes = Router();

const userController = new UserController();
const categoryController = new CategoryController();
const sourceController = new SourceController();
const ownerController = new OwnerController();
const expenseController = new ExpenseController();

routes.get("/users", userController.show);
routes.post("/user", userController.create);
routes.put("/user-update", userController.update);
routes.post("/user-find-one", userController.findOne);
routes.get("/categorys", categoryController.show);
routes.post("/category", categoryController.create);
routes.get("/sources", sourceController.show);
routes.post("/source", sourceController.create);
routes.get("/owners", ownerController.show);
routes.post("/owner", ownerController.create);
routes.get("/expenses", expenseController.show);
routes.post("/expense", expenseController.create);

export default routes;
