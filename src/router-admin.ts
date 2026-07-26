import express, {Request,Response} from "express"
const routerAdmin = express.Router();
import factoryController from "./controllers/factory.controller";
import productController from "./controllers/product.controller";

routerAdmin.get("/", factoryController.goHome);

/*********** Factory ***********/
routerAdmin
 .get("/login", factoryController.getLogin)
 .post("/login", factoryController.processLogin);

routerAdmin
 .get("/signup", factoryController.getSignup)
 .post("/signup", factoryController.processSignup);

 routerAdmin.get("/logout", factoryController.logout);
 routerAdmin.get("/check-me", factoryController.checkAuthSession);

/*********** Product ***********/
routerAdmin.get("/product/all",
    factoryController.verifyFactory, 
    productController.getAllProducts);
routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChosenProduct);

/*********** User ***********/


export default routerAdmin;