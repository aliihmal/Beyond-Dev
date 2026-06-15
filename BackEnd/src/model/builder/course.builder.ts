import { Course } from "../course.model";

export class courseBuilder{
    id!:string;
    name!:string;
    code!:string;
    studentId!:string;
    description!:string;
    semester!:string;
    credits!:number;
    
    public static newCourseBuilder():courseBuilder{
        return new courseBuilder();
    }

    setId(id:string):courseBuilder{
        this.id=id;
        return this;
    }
    setName(name:string):courseBuilder{
        this.name=name;
        return this;
    }
    setCode(code:string):courseBuilder{
        this.code=code;
        return this;
    }
    setStudentId(studentId:string):courseBuilder{
        this.studentId=studentId;
        return this;
    }
    setDescription(description:string):courseBuilder{
        this.description=description;
        return this;
    }
    setSemester(semester:string):courseBuilder{
        this.semester=semester;
        return this;
    }
    setCredits(credits:number):courseBuilder{
        this.credits=credits;
        return this;
    }
    

    build():Course{
        if(!this.name || !this.code || !this.studentId || !this.description || !this.semester || !this.credits){
            throw new Error("all attribute must be provided before building the course");

        }
        return new Course(this.id,this.code,this.name,this.description,this.semester,this.credits,this.studentId);
    }
}