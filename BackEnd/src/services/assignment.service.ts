import { Assignment } from "../model/assignment.model";
import { AssignmentRepository, CreateAssignmentRepo } from "../Repository/Assignment.Repository";
import { id } from "../Repository/IRepository";

export class AssignmentManager {
  private assignRepo!:AssignmentRepository;
    async getRepo():Promise<AssignmentRepository>{
        if(!this.assignRepo){
            this.assignRepo = await CreateAssignmentRepo();
        }
        return this.assignRepo;
    }
    async createAssignment(item:Assignment):Promise<id>{
        const id = await (await this.getRepo()).create(item);
        return id;
    }
    async getAssiignment (id:string):Promise<Assignment>{
        const result = await (await this.getRepo()).get(id);
        return result;
    }
    async getAssignmentOfUser(userId:string):Promise<Assignment[]>{
        const result = await (await this.getRepo()).getUserAssignment(userId);
        return result
    }
    async getAssignmentOfCourse(courseId:string,userId:string):Promise<Assignment[]>{
        const result = await (await this.getRepo()).getCourseAssignment(courseId,userId);
        return result;
    }
    async getAssignmentNbForstudent(studentId:string):Promise<number>{
        const assignments  = await (await this.getRepo()).getUserAssignment(studentId);
        const nb = assignments.length;
        return nb;
    }
}