export class Assignment{
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    courseId: string;
    studentId: string;
    
    constructor(id:string,title:string,description:string,duedate:Date,courseId:string,studentId:string){
        this.id=id;
        this.title=title;
        this.description=description;
        this.dueDate=duedate,
        this.courseId=courseId,
        this.studentId=studentId;
    }
}