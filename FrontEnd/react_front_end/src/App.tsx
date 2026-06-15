import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/Signup";
import LoggedIn from "./pages/LoggedIn";
import ProtectedLogin from "./components/protectedlogin";

function App(){
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loggedIn" element={<ProtectedLogin>
          <LoggedIn/>
        </ProtectedLogin>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;