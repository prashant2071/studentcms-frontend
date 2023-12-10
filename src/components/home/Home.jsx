import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
    const [data,setData] = useState({})
    const [count,setCount] = useState(0)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/")
        .then((res)=>{
          console.log("the data is",res.data)
          setData(res.data)
        }).catch((err) =>{
          console.log("failed to get response")
        })

    },[count])

  return (
    <Table striped bordered hover >
      <thead>
        <tr className='bg-primary'>
          {Object.keys(data).map((item)=>{
           return <th>{item}</th>
          })}
          
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(data).map((item)=>(
          <td>{item}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default Home;