import { useEffect, useState } from "react";
import "./exams.css";
function Exams() {
    const token = localStorage.getItem("token");
    const [count,setcount] = useState(5);
    

    return (
        <div>
            <div className="excontainer">
                <div id="exsubcontainer">
                    <img id="eximg" src="/examlogo.png"/>
                    <div>
                        <h3 id="ex">Exams</h3>
                        <p id="excount"><b> {count} </b></p>
                        <p id="aex">Active Exams</p>
                        <p id="exva">View All </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exams;