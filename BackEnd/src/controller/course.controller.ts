import { Request, Response } from "express";
import { courseManager } from "../services/course.service";
import { BadRequestException } from "../util/Exception/httpsException";
import { courseBuilder } from "../model/builder/course.builder";
import { generateUUID } from "../util";

export class CourseController{
    constructor(private courseservice:courseManager){}
    async createCourse(req:Request,res:Response):Promise<void>{
        const {name,code,studentId,description,semester,credits} = req.body;
        if(!name || !code || !studentId || !description || !semester || !credits){
            throw new BadRequestException("name ,code ,studentId ,desctiption ,semester and credits are all required",{
                name:!name,
                code:!code,
                studentId:!studentId,
                description:!description,
                semester:!semester,
                credits:!credits
            })
        }
        const course = courseBuilder.newCourseBuilder().setId(generateUUID("course")).setCode(code).setSemester(semester).setCredits(credits).setDescription(description).setName(name).setStudentId(studentId).build();
        const id=await this.courseservice.createCourse(course);
        res.status(200).json({"message":"course created successfully",
                              "id":id,
        })
    }
    async getCourse(req:Request,res:Response):Promise<void>{
        const id = req.params.id as string;
        const course = await this.courseservice.getCourse(id);
        res.status(200).json({"message":"course retrived successfully",
                              "course":course,
        })
    }
    async getByStudentId(req:Request,res:Response):Promise<void>{
        const studentId = req.params.studentId as string;
        const courses = await this.courseservice.getByStudentId(studentId);
        res.status(200).json({"message":"courses retrived successfully",
                            "courses":courses,
        });
    }
}