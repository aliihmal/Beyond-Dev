import { Course } from "../model/course.model";
import { notFoundExceptiong } from "../util/Exception/NoteFoundException";
import { DBexception, InitializabelException } from "../util/Exception/RepoException";
import logger from "../util/logger";
import { ConnectionManager } from "./ConnectionManager";
import { id, Initializabel, IRpository } from "./IRepository";
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "course"(
                                id TEXT PRIMARY KEY,
                                code TEXT NOT NULL,
                                name TEXT NOT NULL,
                                studentId TEXT NOT NULL,
                                description TEXT NOT NULL,
                                semester TEXT NOT NULL,
                                credits INTEGER  NOT NULL)`;
const CREATE_COURSE = `INSERT INTO "course" (id,code,name,studentId,description,semester,credits) VALUES (?,?,?,?,?,?,?)`;
const GET_ID=`SELECT * FROM "course" WHERE id =?`;
const GET_ALL =`SELECT * FROM "course"`;
const GET_BY_STUDENT_ID= `SELECT * FROM "course" WHERE studentId = ?`;



export class courseRepository implements IRpository<Course>,Initializabel{
    async init(): Promise<void> {
        try{
            const conn  = await ConnectionManager.getConnection();
            await conn.exec(CREATE_TABLE);
            logger.info("table course was create successfully ");
        }catch(error){
            logger.error("error while creating the course table");
            throw new InitializabelException("error while creating the course table",error as Error);
        }
    }
    async create(item: Course): Promise<id> {
        try{
            const conn = await ConnectionManager.getConnection();
            await conn.run(CREATE_COURSE,[item.id,item.code,item.name,item.studentId,item.description,item.semester,item.credits]);
            logger.info("course was inserted successfully");
            return item.id;
        }catch(error){
           logger.error("Error while creating the course: %s", (error as Error).message);
            throw new DBexception("Error while creating the course",error as Error);
        }
    }
    async get(id: id): Promise<Course> {
       try{
        const conn = await ConnectionManager.getConnection();
        const course = await conn.get<Course>(GET_ID,[id]);
        if(!course){
            throw new Error("the course was not found " );
        }
        return course;
       }catch(error){
        logger.error("course  was not found");
        throw new DBexception("course was not found ",error as Error);
       }
    }
    async getAll(): Promise<Course[]> {
        try{
        const conn = await ConnectionManager.getConnection();
        const courses = await conn.all<Course[]>(GET_ALL);
        if(courses.length==0){
            throw new Error("no Courses where retrived" );
        }
        return courses;
       }catch(error){
        logger.error("no Courses where retrived ");
        throw new DBexception("no Courses where retrived ",error as Error);
       }
    }
    async getByStudentId(studentId:string):Promise<Course[]>{
        try{
        const conn = await ConnectionManager.getConnection();
        const courses = await conn.all<Course[]>(GET_BY_STUDENT_ID,[studentId]);
        if(courses.length==0){
            throw new Error("no Courses where retrived for the user" );
        }
        return courses;
       }catch(error){
        logger.error("no Courses where retrived for the user dd");
        throw new DBexception("no Courses where retrived for the userdd",error as Error);
       }
    }
    update(item: Course): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: id): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

export async function createCourseRepo():Promise<courseRepository>{
    const repo = new courseRepository();
    await repo.init();
    return repo;
}