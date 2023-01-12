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
routes.put("/user/:id", userController.update);
routes.post("/user/login", userController.findOne); //pode seer melhorada essa rota
routes.get("/categorys", categoryController.show);
routes.post("/category", categoryController.create);
routes.put("/category/:id", categoryController.update);
routes.get("/category/:id", categoryController.findOne);
routes.get("/sources", sourceController.show);
routes.post("/source", sourceController.create);
routes.put("/source/:id", sourceController.update);
routes.get("/source/:id", sourceController.findOne);
routes.get("/owners", ownerController.show);
routes.post("/owner", ownerController.create);
routes.get("/expenses", expenseController.show);
routes.post("/expense", expenseController.create);

export default routes;
