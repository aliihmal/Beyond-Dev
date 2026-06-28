import { Request, Response } from "express";
import { AssignmentManager } from "../services/assignment.service";
import { BadRequestException } from "../util/Exception/httpsException";
import { AssignmentBuilder } from "../model/builder/assignment.builder";
import { generateUUID } from "../util";

export class AssignmentController{
    constructor(private assignmentService:AssignmentManager){}

    async create(req:Request,res:Response):Promise<void>{
        const {title,description,dueDate,courseId,userId}  =req.body;
        if(!title || !description || !dueDate || !courseId || !userId){
            throw new BadRequestException("title ,description, due Date ,courseid , userId  are required ",{
                title:!title,
                description:!description,
                dueDate:!dueDate,
                courseId:!courseId,
                userId:!userId,
            })
        }
        const assignment = AssignmentBuilder.newAssingBuilder().setCourseId(courseId).setStudentId(userId).setDescription(description).setTitle(title).setdueDate(dueDate).setId(generateUUID("assign")).build();
        await this.assignmentService.createAssignment(assignment);
        res.status(200).json({message:"Assignment was created successfully"});
    }
    async getAssignment(req:Request,res:Response):Promise<void>{
        const id= req.params.id as string;
        if(!id){
            throw new BadRequestException("The id should be procided ",{
                id:!id,
            });
        }
        const Assignment = await this.assignmentService.getAssiignment(id);
        res.status(200).json({message:"User was found","Assingment":Assignment});
    }
    async getBStudentId(req:Request,res:Response):Promise<void>{
        const id = req.params.userid as string;
        if(!id){
            throw new BadRequestException("the id of the student must be provided",{
                id:!id,
            });
        }
        const Assignments = await this.assignmentService.getAssignmentOfUser(id);
        res.status(200).json({"message":"Assignments of user were retried successfully","Assignment":Assignments});
    }
    async getByCoureId(req:Request,res:Response):Promise<void>{
        const courseId = req.params.courseId as string;
        const studentId=req.params.userId as string;
        
        if(!courseId || !studentId){
            throw new BadRequestException("The course id must be provided " , {
                courseId:!courseId,
                studentId:!studentId
            });
        };
        const Assingments = await this.assignmentService.getAssignmentOfCourse(courseId,studentId);
        res.status(200).json({"message":"Assignment of specific course were retrived","assignment":Assingments});
    }
    async getAssignmentNb(req:Request,res:Response):Promise<void>{
        const studentid = req.params.studentId as string;
        const nb =await this.assignmentService.getAssignmentNbForstudent(studentid);
        res.status(200).json({"message":"number of assignment where retrived ",
                               "nb":nb,
        });
    }
}