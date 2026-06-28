import { useEffect, useState } from "react";
import "./tasks.css"
function Task() {
    const token = localStorage.getItem("token");
    const [counts,setcounts] = useState(0);
    useEffect(() => {
        const fetchCourses = async () => {
            const user = JSON.parse(
                localStorage.getItem("user") || "{}"
            );
            const userid =user.id;

            const response2 = await fetch(
                `http://localhost:3000/assignment/nbOfAssignment/${userid}`,
                  {
                headers: {
                 Authorization: `Bearer ${token}`,
                },
  }
            );
            const nb = await response2.json();
            setcounts(nb.nb);
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <div className="taskcontainer">
                <div id="tasksubcontainer">
                    <img id="taskcimg" src="/tasklogo.png"/>
                    <div>
                        <h3 id="t">Tasks</h3>
                        <p id="taskcount"><b> {counts} </b></p>
                        <p id="atask">Active Tasks</p>
                        <p id="vatask">View All </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;