import config from "../config";
import jwt from 'jsonwebtoken'
import { TokenPayload } from "../config/type";
import logger from "../util/logger";
import { InvalidTokenException, ServiceException, TokenExepiredException } from "../util/Exception/authenticationException";
export class AuthenticationManager{
    constructor(private secretKey =config.auth.secretKey,private expiration= config.auth.expiration){}

    generateToken(userId:string):string{
        return jwt.sign(
            {userId},
            this.secretKey,
            {expiresIn:this.expiration},
        )
    }
    verifyToken(Token:string): TokenPayload{
            try{
                return (jwt.verify(Token,this.secretKey) )as TokenPayload;
            }catch(error){
                logger.error("Token verification failed",error);
                if(error instanceof(jwt.TokenExpiredError)){
                    throw new TokenExepiredException();
                }
                if(error instanceof(jwt.JsonWebTokenError)){
                    throw new InvalidTokenException();
                }
                throw new ServiceException("toke verification failed ");
            }
        }
}