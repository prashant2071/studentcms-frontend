import Footer from "./components/footer/Footer";
import Headers from "./components/header/Headers";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Students from "./components/student/Student";
import Courses from "./components/course/Course";
import Login from './components/login/Login'
import StudentCourses from "./components/studentCourse/StudentCourse";


function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/students" element = {<Students/>}/>
        <Route path="/courses" element = {<Courses/>}/>
        <Route path="/studentcourse" element = {<StudentCourses/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
