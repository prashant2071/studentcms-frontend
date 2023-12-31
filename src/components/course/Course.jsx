import Table from "react-bootstrap/Table";
import { httpClient } from "../utility/http/httpClient";
import Loader from "../loader/Loader";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import CourseModal from "./Modal/CourseModal";
import { toast } from "react-toastify";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    course_name: "",
    duration: "",
    description: "",
    instructor_name: "",
    course_fee: "",
    start_date: "",
  });
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    httpClient
      .GET("/courses/", true, null)
      .then((res) => {
        console.log("the data is ", res.data);
        // const { data } = res.data;
        setCourses(res.data.data);
      })
      .catch((err) => {
        console.log("the error is ", err);
      });
  }, [count]);

  const AddCourse = () => {
    setCourse({});
    setShowModal(true);
    setTitle("Add Course");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const cancelHandler = () => {
    setShowModal(false);
    setCourse({});
  };

  const addCourseHandler = () => {
    console.log("the course is", course);
    httpClient
      .POST("/courses/", course, true, null)
      .then((res) => {
        debugger;
        const { data } = res.data;
        setCourses(data);
      })
      .catch((err) => {
        toast.error("error occour failed to addd course");
      });
    setShowModal(false);
  };
  const handleEdit = (item) => {
    setEdit(true);
    setCourse(item);
    setTitle("Edit Course");
    setShowModal(true);
  };
  const handleEditPost = () => {
    httpClient
      .UPDATE(`/courses/${course.id}`, course, true, null)
      .then((res) => {
        debugger;
        const { data } = res.data;
        debugger;
        setCourses(data);
      })
      .catch((err) => {
        toast.error("error occour failed to addd course");
      });
    setShowModal(false);
  };
  const handleDelete = () =>{

  }

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 m-1">
            <Button variant="primary float-end" onClick={AddCourse}>
              Add Courses
            </Button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Instructor Name</th>
              <th>Course Fee</th>
              <th>Start Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses[0] ? (
              courses.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.course_name}</td>
                    <td>{item.duration}</td>
                    <td>{item.description}</td>
                    <td>{item.instructor_name}</td>
                    <td>{item.course_fee}</td>
                    <td>{item.start_date}</td>
                    <td>
                      <FaEdit
                        size={25}
                        color="0d6efd"
                        onClick={() => handleEdit(item)}
                      />{" "}
                      <RiDeleteBinFill size={25} color="#c40b0a" />
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
      <CourseModal
        course={course}
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

export default Courses;
