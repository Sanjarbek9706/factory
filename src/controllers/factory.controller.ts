import express, {Request,Response} from "express";
import { T } from "../libs/types/common";
import MemberService from  "../models/Member.service"


const factoryController: T = {};
factoryController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
      res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err);
    }
};

factoryController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
      res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin:", err);
    }
};

factoryController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup")
      res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
};

export default factoryController;