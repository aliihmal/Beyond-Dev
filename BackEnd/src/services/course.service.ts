import { Course } from "../model/course.model";
import { courseRepository, createCourseRepo } from "../Repository/Course.Repository";
import { id } from "../Repository/IRepository";

export class courseManager{
    private courserepo !:courseRepository;
    async getRepo():Promise<courseRepository>{
        if(!this.courserepo){
            this.courserepo = await createCourseRepo();
        }
        return this.courserepo;
    }

    async createCourse(course:Course):Promise<id>{
        const id = await(await this.getRepo()).create(course);
        return id;
    }
    async getCourse(id:string):Promise<Course>{
        const course = await (await this.getRepo()).get(id);
        return course;
    }
    async getByStudentId(studentId:string):Promise<Course[]>{
        const courses = await (await this.getRepo()).getByStudentId(studentId);
        return courses;
    }
}
