import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { useEffect, useState } from "react";

const Courses = () => {
//   const [data, setData] = useState({});
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/courses")
//       .then((res) => {
//         console.log("the data is", res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log("failed to get response");
//       });
//   }, [count]);

  const students = [
    {
      id: 1,
      course_name: "SIbendra",
      description: "sdfsadgsag sdgsaga s",
      duration: "2month",
      instructor_name: "fsdfasd",
      course_fee: 2000,
      start_date: "2012-12-30",
    },
    {
      id: 2,
      course_name: "XYZ",
      description: "sdfsadgsag sdgsaga s",
      duration: "2month",
      instructor_name: "fsdfasd",
      course_fee: 2000,
      start_date: "2012-12-30",
    },
    {
      id: 3,
      course_name: "ABC",
      description: "sdfsadgsag sdgsaga s",
      duration: "2month",
      instructor_name: "fsdfasd",
      course_fee: 2000,
      start_date: "2012-12-30",
    },
    {
      id: 4,
      course_name: "MNO",
      description: "sdfsadgsag sdgsaga s",
      duration: "2month",
      instructor_name: "fsdfasd",
      course_fee: 2000,
      start_date: "2012-12-30",
    },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Description</th>
          <th>Instructor Name</th>
          <th>Course Fee</th>
          <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item) => {
         return <tr key={item.id}>
            <td>{item.course_name}</td>
            <td>{item.duration}</td>
            <td>{item.description}</td>
            <td>{item.instructor_name}</td>
            <td>{item.course_fee}</td>
            <td>{item.start_date}</td>
          </tr>;
        })}
      </tbody>
    </Table>
  );
};

export default Courses;
