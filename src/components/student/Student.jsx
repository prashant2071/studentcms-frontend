import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { httpClient } from "../utility/http/httpClient";
import Loader from "../loader/Loader";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import StudentModal from "./Modal/StudentModal";
import { toast } from "react-toastify";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [title,setTitle] = useState("")
  const [student,setStudent] = useState({});
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    httpClient
      .GET("/students/", true, null)
      .then((res) => {
        console.log("the data is ", res.data.data);
        setStudents(res.data.data);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  const cancelHandler = () =>{
      setShowModal(false)
      setStudent({})
  }
    const addStudent = () =>{
      setStudent({})
      setShowModal(true)
      setTitle("Add Student")
      
    
  }

  
  const AddStudentHandler = () =>{
    // setStudents((prev)=>{
    //   return [student,...prev]
    // })
    httpClient.POST("/students/",student,true,null)
    .then((res) => {
      console.log("the res.dat is",res.data)
      setStudents(res.data.data)
      toast.success("Student added successfully")
      // setCount(prev => prev + 1)
    }).catch(err=>{
      console.log("err is ",err)
    })
    setShowModal(false)

  }

  const handleEdit = (prod) =>{
    setEdit(true);
    setStudent(prod);
    setShowModal(true);
    setTitle("Edit student");

  }
  const handleEditPost = () =>{
    console.log("the student data is",students)
    httpClient.UPDATE(`/students/${student.id}`,student,true,null)
    .then((res) => {
      console.log("the res.dat is",res.data.data)
      setStudents(res.data.data)
      toast.success("Student Edited successfully")
    }).catch(err=>{
      console.log("err is ",err)
      toast.error("an error occoured")
    })
    setShowModal(false);
    setEdit(false);    

  }

  const handleDelete = (id) =>{
    console.log("the data is",id)
    httpClient.DELETE(`/students/${id}`,true)
    .then(res=>{
      toast.success("Student delete successfully")
      setCount(prev => prev + 1)
    }).catch(err=>{
      console.log("the error is ",err)
    })
  }
  const handleChange = (e) =>{
    const {name,value} = e.target
    setStudent((prev)=>{
      return {...prev,[name]:value}
    })
  }

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 m-1">
            <Button variant="primary float-end" onClick={addStudent}>Add Student</Button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              students.map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td>
                    <FaEdit size={25} color="0d6efd" onClick={()=>handleEdit(item)} /> <RiDeleteBinFill size={25} color="#c40b0a" onClick={()=>handleDelete(item.id)}/>
                  </td>
                </tr>
              ))
            ) : (
              <Loader />
            )}
          </tbody>
        </Table>
      </div>
      <StudentModal
      student={student}
      show = {showModal}
      title = {title}
      edit={edit}
      handleEdit = {handleEditPost}
      onChangeHandler = {handleChange}
      addStudent={AddStudentHandler}
      cancelHandler = {cancelHandler}
      />
    </>
  );
};

export default Students;
