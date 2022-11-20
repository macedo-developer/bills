import { Router } from "express";
import CategoryController from "./controllers/CategoryController";
import OwnerController from "./controllers/OwnerController";
import SourceController from "./controllers/SourceController";
import UserController from "./controllers/UserController";

const routes = Router();

const userController = new UserController();
const categoryController = new CategoryController();
const sourceController = new SourceController();
const ownerController = new OwnerController();

routes.get("/users", userController.show);
routes.post("/user", userController.create);
routes.get("/categorys", categoryController.show);
routes.post("/category", categoryController.create);
routes.get("/sources", sourceController.show);
routes.post("/source", sourceController.create);
routes.get("/owners", ownerController.show);
routes.post("/owner", ownerController.create);

export default routes;
