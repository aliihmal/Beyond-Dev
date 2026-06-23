import { httpExecption } from "./httpsException";

export class AuthenticationException extends httpExecption{
    constructor(message:string){
        super(401,message);
        this.name="Authentication Error"
    }
}
export class  TokenExepiredException  extends AuthenticationException{
    constructor(){
        super("token Expired");
        this.name="TokenExepiredException";
    }
}

export class InvalidTokenException extends AuthenticationException{
    constructor(){
        super("Invalid Token");
        this.name="InvalidTokenException";
    }
}
export class ServiceException extends Error{
    constructor(message:string){
        super(message);
        this.name= "ServiceException";
    }
}
export class AuthenticationFailed extends AuthenticationException{
    constructor(){
        super("Authentication failed");
        this.name="AuthenticationFailedException";
    }
}