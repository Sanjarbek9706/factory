import express, {Request,Response} from "express";
import { T } from "../libs/types/common";
import MemberService from  "../models/Member.service"
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";


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

factoryController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin")
        res.send("DONE");
    } catch (err) {
        console.log("Error, processLogin:", err);
    }
};

factoryController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup")
        console.log("body:", req.body);


        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.FACTORY;


        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);

        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};

export default factoryController;