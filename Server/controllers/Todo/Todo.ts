
import { Request, Response } from "express";

export const getTodo = async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            Data: {
                title: "Read",
                isCompleted: false,
                id: 1
            },
            Status: 200
        });
}
