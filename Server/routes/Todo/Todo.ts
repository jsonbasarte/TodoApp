import { Router, Request, Response } from "express";
import { getTodo } from "../../controllers/Todo/Todo";

const router = Router();


router.route("/")
       .get(getTodo);

export default router; 