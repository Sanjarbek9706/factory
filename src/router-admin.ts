import express, {Request,Response} from "express"
const routerAdmin = express.Router();
import factoryController from "./controllers/factory.controller";

routerAdmin.get("/", factoryController.goHome);

/*********** Factory ***********/
routerAdmin
 .get("/login", factoryController.getLogin)
 .post("/login", factoryController.processLogin);

routerAdmin
 .get("/signup", factoryController.getSignup)
 .post("/signup", factoryController.processSignup);

 routerAdmin.get("/logout", factoryController.logout)
 routerAdmin.get("/check-me", factoryController.checkAuthSession)

/*********** Product ***********/

/*********** User ***********/


export default routerAdmin;