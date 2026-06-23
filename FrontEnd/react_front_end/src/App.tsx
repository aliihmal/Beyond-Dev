import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/Signup";
import LoggedIn from "./pages/LoggedIn";
import ProtectedLogin from "./components/protectedlogin";
import DashBoard from "./pages/dashboard";

function App(){
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loggedIn" element={<ProtectedLogin>
          <LoggedIn/>
        </ProtectedLogin>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;