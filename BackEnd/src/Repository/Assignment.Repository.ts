import { Assignment } from "../model/assignment.model";
import { DBexception, InitializabelException } from "../util/Exception/RepoException";
import logger from "../util/logger";
import { ConnectionManager } from "./ConnectionManager";
import { id, Initializabel, IRpository } from "./IRepository";
const CREATE_TABLE =`CREATE TABLE IF NOT EXISTS "assignment"(
                                    id TEXT PRIMARY KEY,
                                    studentId TEXT NOT NULL,
                                    courseId TEXT NOT NULL,
                                    title TEXT NOT NULL,
                                    description TEXT NOT NULL,
                                    duedate DATE NOT NULL
                    )`;
const INSERT_DATA = `INSERT INTO "assignment" (id,studentId,courseId,title,description,duedate) VALUES (?,?,?,?,?,?)`;
const GET_ID = `SELECT * FROM "assignment" WHERE id =?`;
const GET_ALL =`SELECT * FROM "assignment"`;
const GET_USER_ID=`SELECT * FROM "assignment" WHERE studentId=?`;
const GET_COURSE_ID=`SELECT * FROM "assignment" WHERE courseId=? AND studentId=?`;
export class AssignmentRepository implements IRpository<Assignment>,Initializabel{
    async init(): Promise<void> {
        try{
            const conn = await ConnectionManager.getConnection();
            await conn.exec(CREATE_TABLE);
            logger.info("Table assignment was created succesfuly");
        }catch(error){
            logger.error("Error While creating the assignment table" + (error as Error).message);
          throw new InitializabelException("Error while Creating the assingment table",error as Error);  
        }
    }
    async create(item: Assignment): Promise<id> {
        try{
            const conn = await ConnectionManager.getConnection();
            await conn.run(INSERT_DATA,item.id,item.studentId,item.courseId,item.title,item.description,item.dueDate);
            logger.info("The assignment was inserted successfully");
            return item.id;
        }catch(error){
            logger.error("Error while adding the assignment ",(error as Error).message);
            throw new DBexception("Error while adding the assignment",error as Error);

        }
    }
    async get(id: id): Promise<Assignment> {
        try{
            const conn = await ConnectionManager.getConnection();
            const result = await conn.get<Assignment>(GET_ID,id);
            if(!result){
                throw new Error("Assignment of id " + id + " was not Found");
            }
            logger.info("Assingment retrieved successfully");
            return result;
        }catch(error){
            logger.error("Error while retriving the asignment");
            throw new DBexception("Error while retriving the assignment",error as Error);

        }
    }
    async getAll(): Promise<Assignment[]> {
       try{
            const conn = await ConnectionManager.getConnection();
            const result = await conn.all<Assignment[]>(GET_ID);
            if(!result){
                throw new Error("Error while retriving Assignments ");
            }
            logger.info("Assingments retrieved successfully");
            return result;
        }catch(error){
            logger.error("Error while retriving the asignments");
            throw new DBexception("Error while retriving the assignments",error as Error);

        }
    }

    async getUserAssignment(userId:string):Promise<Assignment[]>{
        try{
            const conn = await ConnectionManager.getConnection();
            const result = await conn.all<Assignment[]>(GET_USER_ID,[userId]);
            
            logger.info("retrived the assignment of the student");
            return result;
        }catch(error){
            logger.error("Error while retriving");
            throw new DBexception("Error while retriving the assignment fo the student",error as Error);
        }
    }
    
    async getCourseAssignment(courseId:string,userId:string):Promise<Assignment[]>{
        try{
            const conn = await ConnectionManager.getConnection();

            const result = await conn.all<Assignment[]>(GET_COURSE_ID,[courseId,userId]);
            if(result.length === 0){
                throw new Error("Assignment of the course was not found lenght zerooooooo");
            }
            logger.info("retrived the assignment of the course");
            return result;
        }catch(error){
            logger.error("Error while retriving assignment of the course");
            throw new DBexception("Error while retriving the assignment fo the course",error as Error);
        }
    }

    update(item: Assignment): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: id): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

export async function CreateAssignmentRepo():Promise<AssignmentRepository>{
    const repo = new AssignmentRepository();
    await repo.init();
    return repo;
}