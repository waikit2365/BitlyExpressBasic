import {TestController} from "./controller/TestController";

export const Routes = [{
    method: "post",
    route: "/bit.ly/urls",
    controller: TestController,
    action: "addURL"
},{
    method: "get",
    route: "/bit.ly/urls",
    controller: TestController,
    action: "getURL"
},{
    method: "get",
    route: "bit.ly/urls/{id}",
    controller: TestController,
    action: "redirectURL"
}];