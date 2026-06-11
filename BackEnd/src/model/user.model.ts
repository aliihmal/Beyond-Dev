export class User{
    id:string;
    name:string;
    email:string;
    password:string;
    major:string;

    constructor(id:string,name:string,email:string,password:string,major:string){
        this.id = id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.major=major;
    }
}

export class SQLITEUser{
    
}