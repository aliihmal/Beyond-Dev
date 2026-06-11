import { User } from "../user.model";

export class userBuilder{
    private name!:string;
    private email!:string;
    private major!:string;
    private id!:string;
    private password!:string;

    public static newUserBuilder(){
        return new userBuilder();
    }
    setName(name:string):userBuilder{
        this.name = name;
        return this;
    }
    setEmail(email:string):userBuilder{
        this.email=email;
        return this;
    }
    setMajor(major:string):userBuilder{
        this.major=major;
        return this;
    }
    setPassword(password:string):userBuilder{
        this.password=password;
        return this;
    }
    setId(id:string):userBuilder{
        this.id=id;
        return this;
    }

    build():User{
        if(!this.name || !this.email || !this.id || !this.password || !this.major){
            throw new Error("Can't build the user object some properties are missing");
        }
        return new User(this.id,this.name,this.email,this.password,this.major);
    }
    

}