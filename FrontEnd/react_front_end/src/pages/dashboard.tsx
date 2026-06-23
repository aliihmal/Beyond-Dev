import SideBar from "../components/SideBar";
import "./dashboard.css"
function DashBoard() {
    return (
        <div className="DBcontainer">
            <div>
                <SideBar />
            </div>
            <div id="divider"> </div>
            <div className="studentInfoContainer"> 
                <div className="SBwelcoming"><h1>Good Evening Ali!!</h1></div>
                
            </div>
        </div>
    )
}

export default DashBoard;