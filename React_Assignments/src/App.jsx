import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import UseStateEx from "./components/UseStateEx";
import UseEffectEx from "./components/UseEffectEx";
import First from "./practice/First";
import ShowAssignments from "./components/ShowAssignments";
import UseStatePractice from "./practice/UseStatePractice";
import Assignment05 from "./Assignments/Assignment05";
import Assignment06 from "./Assignments/Assignment06";
import Assignment07 from "./Assignments/Assignment07";

function App() {
  return (
    <>
      {/* <Assignment05 intialCount={0}/>
      <Assignment05 intialCount={10}/>
      <Assignment05 intialCount={100}/>
      
      <Assignment06/> */}

      <Assignment07/>
    </>
  );
}

export default App;
