import { useState } from "react";
import "./Signup.css"
function SignUp() {
  const [formData,setFormData]= useState({
    name:"",
    email:"",
    password:"",
    major:"",
  });
  const handelChange  = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  }
  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:3000/user/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log("User created:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="one">

          <div className="one-logo">
               <img id="lg" src="/BeyondDevLogo.png"/>
               <div id="title">
                <p id="f"><b>Study</b></p>
                <p id="s"><b>Hub</b></p>
               </div>
          </div>

          <div className="middle">
              <div >
                <h1 id="lt"><b>Learn Today ,</b></h1>
                <h1 id="lto"><b>Lead Tommorow </b></h1>
               </div>
               <div >
                  <img className="stgl" src="/studygirl.png"/>
               </div>
               
               
               <div className="last">
                   <div className="content">
                       
                       <div className="assurance">
                        <img src="/shield.png"/>
                       </div>

                       <div className="ssa">
                           <p><b>Safe, Secure, Alway</b></p>
                           <p>Your data is protected with top-nothc security</p>
                       </div>
                   </div>
              </div>
          </div>

        </div>



        <div className="two">

              <p id="asking">Already Have An Account ? sign in </p>
          <div className="signupsubconatainer">
          <div className="signupmiddle">
                <div className="dec">
                    <h1 id="Mh"><b>Create Your Account</b> </h1>
                    <p id="starting">start your learning journey with beyond dev</p>
                </div>
          </div>
          <div className="signupform">
       

        <form  onSubmit={handleSubmit}>
          <div className="forc">

          
           <div className="input-container">
              <img src="/name.png" alt="Name Icon" className="input-icon" />
                <input name="name" onChange={handelChange} type="text" placeholder="Enter your name" />
            </div>

           <div className="input-container">
              <img src="/email.png" alt="Email Icon" className="input-icon" />
              <input name="email" type="email" onChange={handelChange}  placeholder="Enter your email" />
            </div>

           <div className="input-container">
      <img src="/password.png" alt="password Icon" className="input-icon" />
      <input name="password" type="password" onChange={handelChange}  placeholder="Enter your password" />
    </div>

           <div className="input-container">
              <img src="/major.png" alt="major Icon" className="input-icon" />
             <input name="major" type="text" onChange={handelChange}  placeholder="Enter your major" />
            </div>

          <button id="btn" type="submit">Create Account</button></div>
            </form> 
            </div>
            </div>
           </div>
       

        



      </div>
    </div>
  );
}

export default SignUp;