import express, {Request,Response} from "express"
const routerAdmin = express.Router();
import factoryController from "./controllers/factory.controller";
import productController from "./controllers/product.controller";
import   makeUploader  from "./libs/utils/uploader";

routerAdmin.get("/", factoryController.goHome);

/*********** Factory ***********/
routerAdmin
 .get("/login", factoryController.getLogin)
 .post("/login", factoryController.processLogin);

routerAdmin
 .get("/signup", factoryController.getSignup)
 .post("/signup",
    makeUploader("members").single("memberImage"),
    factoryController.processSignup);

 routerAdmin.get("/logout", factoryController.logout);
 routerAdmin.get("/check-me", factoryController.checkAuthSession);

/*********** Product ***********/
routerAdmin.get("/product/all",
    factoryController.verifyFactory, 
    productController.getAllProducts);
routerAdmin.post("/product/create",
    factoryController.verifyFactory, 
    makeUploader("products").array("productImages", 5),
    productController.createNewProduct);
routerAdmin.post("/product/:id",
    factoryController.verifyFactory,  
    productController.updateChosenProduct);

/*********** User ***********/
routerAdmin.get("/user/all",
     factoryController.verifyFactory, 
     factoryController.getUsers);
routerAdmin.post("/user/edit", 
     factoryController.verifyFactory, 
     factoryController.updateChosenUser);

export default routerAdmin;