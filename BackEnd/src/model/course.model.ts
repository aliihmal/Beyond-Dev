export class Course{
    id: string;
    code: string;           // CSC301
    name: string;      
    studentId:string;     // Database Systems
    description: string;
    semester: string;       // Fall 2026
    credits: number;
    constructor(id:string,code:string,name:string,description:string,semester:string,credits:number,studentId:string){
        this.id=id;
        this.studentId=studentId;
        this.name=name;
        this.credits=credits;
        this.description=description;
        this.semester=semester;
        this.code=code
    }
}