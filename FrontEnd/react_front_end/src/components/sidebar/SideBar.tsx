
import { useState, type SetStateAction } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
function Button(){
   const [selected,setSelected] = useState("home");
     const buttons = [
    { name: "home", path: "/SignUp" },
    { name: "class", path: "/classes" },
    { name: "exams", path: "/tasks" },
    { name: "task", path: "/tasks" },
    { name: "Course", path: "/tasks" },
    { name: "studyPlanner", path: "/tasks" },
    { name: "AI Assistant", path: "/tasks" },
  ];
    return (
        <div className="SBBcontainer">
    {buttons.map((button)=>(
      
        <button id="SBb" onClick={()=>setSelected(button.name)}
                style={{
                    backgroundColor:selected ==button.name ? "#eef4fe":"white",
                    borderTop:"none",
                    borderLeft:"none",
                    borderBottom:"none",
                    borderRightStyle:selected ==button.name ?"solid":"none",
                    borderRightWidth:selected ==button.name ?"3px":"0px",
                    borderRightColor:selected ==button.name ?"blue":"white",
                    
                }}>
                  <p id="SBT" style={{
                    color:selected ==button.name ? "#0099ff":"black"
                }}>  {button.name}</p>
        </button>
    ))
    }</div>);
    
    
}
function SideBar(){
    
    return (
       <div className="SBcontainer">
        <ul id="thelist">
            <li>
                <div id="ih">
                    <img id="sh" src="./studyhat.png"/>
                    <h2>CampusFlow</h2>
                </div>
                <div>
                    <Button/>
                </div>
            </li>
        </ul>
       </div>
    );

}

export default SideBar;