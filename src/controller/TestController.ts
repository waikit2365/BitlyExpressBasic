import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class TestController {
    async getURL(request: Request, response: Response, next: NextFunction){
        response.json(storage.urls)
    }
}