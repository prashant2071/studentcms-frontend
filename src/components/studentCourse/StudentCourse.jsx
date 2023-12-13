import Table from "react-bootstrap/Table";
import { httpClient } from "../utility/http/httpClient";
import Loader from "../loader/Loader";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { toast } from "react-toastify";
import StudenCourseModal from "./Modal/StudentCourseModal";

const StudentCourses = () => {
  const [studentcourses, setStudentCourses] = useState([]);
  const [studentcourse, setStudentCourse] = useState({
    id:"",
    course_name: "",
    first_name: "",
    student_id:"",
    course_id:""
  });
  const [students,setStudents] =useState([]);
  const [courses,setCourses] =useState([]);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    httpClient
      .GET("/courses/studentcourses/", true, null)
      .then((res) => {
        console.log("the data is ", res.data);
        const { student_courses,courses,students } = res.data;
        setCourses(courses);
        setStudents(students);
        setStudentCourses(student_courses);
      })
      .catch((err) => {
        console.log("the error is ", err);
      });
  }, [count]);

  const AddStudentCourse = () => {
    setStudentCourse({});
    setShowModal(true);
    setTitle("Add Student Course");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentCourse((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const cancelHandler = () => {
    setShowModal(false);
    setStudentCourse({});
  };

  const addCourseHandler = () => {
    console.log("the course is", studentcourse);
    httpClient
      .POST("/courses/studentcourses/", studentcourse, true, null)
      .then((res) => {
        debugger;
        const { data } = res.data;
        setStudentCourse(data);
      })
      .catch((err) => {
        toast.error("error occour failed to addd course");
      });
    setShowModal(false);
  };
  const handleEdit = (item) => {
    setEdit(true);
    setStudentCourse(item);
    setTitle("Edit Student Course");
    setShowModal(true);
  };
  const handleEditPost = () => {
    httpClient
      .UPDATE(`/courses/studentcourses/${studentcourse.id}`, studentcourse, true, null)
      .then((res) => {
        const { data } = res.data;
        setStudentCourse(data);
      })
      .catch((err) => {
        toast.error("error occour failed to addd course");
      });
    setShowModal(false);
  };
  const handleDelete = (id) =>{

  }

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 m-1">
            <Button variant="primary float-end" onClick={AddStudentCourse} >
              Add Student Course
            </Button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Student Id</th>
              <th>Course Name</th>
              <th>Course Id</th>


            </tr>
          </thead>
          <tbody>
            {studentcourses[0] ? (
              studentcourses.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.student_id}</td>
                    <td>{item.course_name}</td>
                    <td>{item.course_id}</td>

                    <td>
                      <FaEdit
                        size={25}
                        color="0d6efd"
                        onClick={() => handleEdit(item)}
                      />{" "}
                      <RiDeleteBinFill size={25} color="#c40b0a" onClick={() => handleDelete(item.id)}/>
                    </td>
                  </tr>
                );
              })
            ) : (
              <Loader />
            )}
          </tbody>
        </Table>
      </div>
      <StudenCourseModal
        students = {students}
        courses = {courses}
        studentcourse={studentcourse}
        edit={edit}
        show={showModal}
        title={title}
        handleEdit={handleEditPost}
        onChangeHandler={handleChange}
        addCourse={addCourseHandler}
        cancelHandler={cancelHandler}
      />
    </>
  );
};

export default StudentCourses;
