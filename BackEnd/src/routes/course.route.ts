import { Router } from "express";
import { CourseController } from "../controller/course.controller";
import { courseManager } from "../services/course.service";
import asyncHandler from "../middelware/asyncHandeler";

const coursecontrol = new CourseController(new courseManager());
const route = Router();


route.route("/")
                .post(asyncHandler(coursecontrol.createCourse.bind(coursecontrol)));
route.route("/student/:studentId")
            .get(asyncHandler(coursecontrol.getByStudentId.bind(coursecontrol)));
route.route("/:id")
            .get(asyncHandler(coursecontrol.getCourse.bind(coursecontrol)));
export default route;