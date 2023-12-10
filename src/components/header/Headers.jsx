import "./headers.css";
import { Link } from "react-router-dom";

const Headers = () => {

const linkStyle = {
    textDecoration: "none",
    color:"white"

}

  return (
    <div className="header">
      <ul>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/students" style={linkStyle}>Students</Link></li>
        <li><Link to="/courses" style={linkStyle}>Courses</Link></li>
        <li><Link to="/studentcourse" style={linkStyle}>Student Courses</Link></li>
      </ul>
    </div>
  );
};

export default Headers;
