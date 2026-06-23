import "./marketing.css";
type Props ={
        title:string;
        descreption:string;
    }

function Marketing({title,descreption}:Props){
    
    return (
        <div>
            <div className="cont">
                <p id="tti"  ><b>{title}</b></p>
                <p>{descreption}</p>
            </div>
        </div>
    )
}
export default Marketing;