import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/Signup";

function App(){
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;