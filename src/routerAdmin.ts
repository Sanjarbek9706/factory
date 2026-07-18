import express, {Request,Response} from "express"
const routerAdmin = express.Router();
import factoryController from "./controllers/factory.controller";

routerAdmin.get("/", factoryController.goHome);


routerAdmin.get("/login", factoryController.getLogin);


routerAdmin.get("/signup", factoryController.getSignup);

export default routerAdmin;