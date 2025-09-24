import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import UseStateEx from "./components/UseStateEx";
import UseEffectEx from "./components/UseEffectEx";
import First from "./practice/First";
import ShowAssignments from "./components/ShowAssignments";

function App() {
  return (
    <BrowserRouter>
            <ShowAssignments />

      <Routes>
        <Route path="/" element={<ShowAssignments />} />
        <Route path="/first" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usestate" element={<UseStateEx />} />
        <Route path="/useeffect" element={<UseEffectEx />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
