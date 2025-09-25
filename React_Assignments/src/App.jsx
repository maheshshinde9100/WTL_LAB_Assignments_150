import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import UseStateEx from "./components/UseStateEx";
import UseEffectEx from "./components/UseEffectEx";
import First from "./practice/First";
import ShowAssignments from "./components/ShowAssignments";
import UseStatePractice from "./practice/UseStatePractice";
import Assignment05 from "./Assignments/Assignment05";
import Assignment06 from "./Assignments/Assignment06";
function App() {
  return (
    // <BrowserRouter>
    //   <ShowAssignments />
    //   <Routes>
    //     <Route path="/" element={<ShowAssignments />} />
    //     <Route path="/first" element={<First />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/usestate" element={<UseStateEx />} />
    //     <Route path="/useeffect" element={<UseEffectEx />} />
    //   </Routes>
    // </BrowserRouter>
    <>
    
      <Assignment05 intialCount={0}/>
      <Assignment05 intialCount={10}/>
      <Assignment05 intialCount={100}/>

      <Assignment06/>

    </>
  );
}

export default App;
