import Courses from "../components/courses/courses";
import Exams from "../components/exams/Exams";
import SideBar from "../components/sidebar/SideBar";
import Task from "../components/Task/tasks";
import "./dashboard.css"
function DashBoard() {
   const user = JSON.parse(localStorage.getItem("user") || "{}")
    return (
        <div className="DBcontainer">
            <div>
                <SideBar />
            </div>
            <div id="divider"> </div>
            <div className="studentInfoContainer"> 
                <div className="SBwelcoming"><h1>Good Evening {user.name}!!</h1></div>
                <Courses />

                <div>
                    <Task/>
                </div>

                <div>
                    <Exams/>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;