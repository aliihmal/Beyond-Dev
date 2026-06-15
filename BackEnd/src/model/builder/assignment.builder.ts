import { Assignment } from "../assignment.model";

export class AssignmentBuilder{
    id!: string;
    title!: string;
    description!: string;
    dueDate!: Date;
    courseId!: string;
    studentId!: string;

    public static newAssingBuilder():AssignmentBuilder{
        return new AssignmentBuilder();
    }

    setId(id:string):AssignmentBuilder{
        this.id=id;
        return this;
    }
    setTitle(title:string):AssignmentBuilder{
        this.title=title;
        return this;
    }
    setDescription(description:string):AssignmentBuilder{
        this.description=description;
        return this;
    }
    setdueDate(dueDate:Date):AssignmentBuilder{
        this.dueDate=dueDate;
        return this;
    }
    setCourseId(courseid:string):AssignmentBuilder{
        this.courseId=courseid;
        return this;
    }
    setStudentId(studentId:string):AssignmentBuilder{
        this.studentId=studentId;
        return this;
    }
    build():Assignment{
        if(!this.id ||!this.description||!this.courseId || !this.dueDate || !this.title || !this.studentId){
            throw new Error("While building assignment all the attribute must exist ");
        }
        return new Assignment(this.id,this.title,this.description,this.dueDate,this.courseId,this.studentId);
    }

}