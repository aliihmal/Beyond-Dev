import { httpExecption } from "./httpsException"

export class notFoundExceptiong extends httpExecption{
    constructor(message:string="Resource Not Found",detaills?:Record<string,any>){
        super(404,message,detaills);
        this.name="NotFoundExceptiong";
    }
}