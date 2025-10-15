import express from "express";
import memberController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();

/** Restaurant **/
routerAdmin.get("/", memberController.goHome);
routerAdmin
    .get("/login", memberController.getLogin)
    .post("/login", memberController.processLogin);
routerAdmin
    .get("/signup", memberController.getSignup)
    .post("/signup", memberController.processSignup);

/** Product **/
/** User **/

export default routerAdmin;
