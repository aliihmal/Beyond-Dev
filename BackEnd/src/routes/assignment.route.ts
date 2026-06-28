import { Router } from "express";
import { userController } from "../controller/user.controller";
import { AssignmentController } from "../controller/assignment.controller";
import { AssignmentManager } from "../services/assignment.service";
import asyncHandler from "../middelware/asyncHandeler";


const assignmentcontrol = new AssignmentController(new AssignmentManager());
const route= Router();

route.route("/")
    .post(asyncHandler(assignmentcontrol.create.bind(assignmentcontrol)));

route.route("/:id")
    .get(asyncHandler(assignmentcontrol.getAssignment.bind(assignmentcontrol)));
route.route("/user/:userid")
            .get(asyncHandler(assignmentcontrol.getBStudentId.bind(assignmentcontrol)));
route.route("/course/:courseId/user/:userId")
        .get(asyncHandler(assignmentcontrol.getByCoureId.bind(assignmentcontrol)));
route.route("/nbOfAssignment/:studentId")
        .get(asyncHandler(assignmentcontrol.getAssignmentNb.bind(assignmentcontrol)));
export default route;