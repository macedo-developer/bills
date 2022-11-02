import { Router } from "express";
import CategoryController from "./controllers/CategoryController";
import UserController from "./controllers/UserController";

const routes = Router();

const userController = new UserController();
const categoryController = new CategoryController();

routes.get("/users", userController.show);
routes.post("/user", userController.create);
routes.get("/categorys", categoryController.show);
routes.post("/category", categoryController.create);

export default routes;
