import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { httpClient } from "../utility/http/httpClient";
import Loader from "../loader/Loader";
import { Button } from "react-bootstrap";

const Students = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    httpClient
      .GET("/students/", null, true, null)
      .then((res) => {
        console.log("the data is ", res.data.data);
        setData(res.data.data);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  return (
    <>
      <div className="container-fluid ">
      <div className="row">
        <div className="col-12 m-1">
          <Button variant="primary float-end">Add Student</Button>
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
          </tr>
        </thead>
        <tbody>
          {loading ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.password}</td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default Students;
