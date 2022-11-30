import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link,useNavigate, useParams} from 'react-router-dom'

export default function EmployeeList() {
    let navigate = useNavigate();

    const [employees, setEmployees] = useState([])

    useEffect(()=>{

        loadEmployees()

    },[])

    const loadEmployees = async ()=>{

        const result = await axios.get("http://localhost:8580/emplist")
        console.log(result.data)
        setEmployees(result.data)

    }

    function deleteEmp(id){

        axios.get("http://localhost:8580/empdelete?id="+id)
  
        window.location.reload()
        
  
     }

  return (
    <div className='container'>

    <div className='py-4'>

    <table class="table border shadow">

<thead className='table-dark'>

<tr>

  <th scope="col">Sr. No.</th>

  <th scope="col">Employee Id</th>

  <th scope="col">Name</th>

  <th scope="col">Username</th>

  <th scope="col">Mobile No.</th>

  <th scope="col">Action</th>


</tr>

</thead>

<tbody>

{

    employees.map((employees, index)=>(

        <tr>

        <th scope="row" key={index}>{index+1}</th>

        <td>{employees.employeeId}</td>

        <td>{employees.name}</td>

        <td>{employees.username}</td>

        <td>{employees.mobile}</td>

        <td>
            {(()=>{



  return(<button className='btn btn-danger mx-2' onClick={() => deleteEmp(employees.employeeId)} >Delete</button>)
})()}
</td>

        </tr>

    ))

}

</tbody>

</table></div></div>
  )
}
