import "./App.css";
import Calender from "./Calender";
import Dashboard from "./Dashboard";
import Leavehistory from "./Leavehistory";
import Login from "./Login";
import Mainpage from "./Mainpage";
import Notifications from "./Notifications";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeRecords from "./EmployeeRecords";
// import { Route } from 'react-router-dom';

// import Create from "./Create";


function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Leavehistory" element={<Leavehistory/>} />
          <Route path="/Calender" element={<Calender/>} />
          <Route path="/Notifications" element={<Notifications/>} />
          <Route path="/EmployeeRecords" element={<EmployeeRecords/>} />
          
          {/* <Route path="/Create" element={<Create/>} /> */}
          
          

          <Route path="*" element={<> not found</>} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
