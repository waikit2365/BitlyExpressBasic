import {TestController} from "./controller/TestController";

export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},{
    method: "post",
    route: "/users",
    controller: TestController,
    action: "addUser"
},{
    method: "get",
    route: "/users/:userId",
    controller: TestController,
    action: "getUser"
},{
    method: "get",
    route: "/users",
    controller: TestController,
    action: "findUsers"
}];