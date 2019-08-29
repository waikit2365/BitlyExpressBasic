import {NextFunction, Request, Response} from "express";
import { storage, srcPath } from "..";

export class TestController {
    async hello(request: Request, response: Response, next: NextFunction) {
        response.sendFile(srcPath + "/public/views/home/index.html")
    }

    async addUser(request: Request, response: Response, next: NextFunction) {
        storage.users.push("Hello")
        console.log(request.body)
        response.json({
            message: "Hello"
        })
    }

    async getUser(request: Request, response: Response, next: NextFunction) {
        console.log(request.params)
        console.log(request.query)
        response.send("hello world")
    }

    async findUsers(request: Request, response: Response, next: NextFunction) {
        console.log(request.params)
        console.log(request.query)
        response.sendStatus(200)
    }
}