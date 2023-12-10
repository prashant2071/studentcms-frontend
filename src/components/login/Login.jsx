import { useState } from "react";
import "./login.css";
import { Button, Form } from "react-bootstrap";
// import { httpClient } from "../utility/http/httpClient";
import axios from "axios";

const Login = () => {
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")

  const handleSubmit = (e) =>{
    console.log("email is",email,"password is",password)
    e.preventDefault()
    axios.post("http://localhost:8000/api/token/",{email,password})
        .then((res)=>{
          console.log("the data is",res.data)
          const {token} = res.data.data
          localStorage.setItem("token",token)
        }).catch((err) =>{
          console.log("failed to get response")
        })
    // httpClient.POST("/token",{email,password}).then((res)=>{
    //   console.log("the response is",res)
    // }).catch((err) =>{
    //   console.log("the error is ",err)
    // })

  }

  return (
    <div className="h-50 mx-auto w-25 border p-4 mt-5 rounded-4 bg-light">
      <h3>Login Page</h3>
      <Form >
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter email"
            className="mb-2"
            onChange={(e)=>setEmail(e.target.value)}
            type="text"
          ></Form.Control>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            className="mb-2"
          ></Form.Control>
          <div className="d-flex justify-content-between mt-2">
            <Form.Check>Remember me</Form.Check>
            <a href="#" className="text-decoration-none"> Forget Password </a>
          </div>
          <Button type="submit" variant="success" onClick={handleSubmit} >Submit</Button>
          <div className="mt-3">
            <p>Dont have an account </p>
            <a href="">Sign up</a>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
