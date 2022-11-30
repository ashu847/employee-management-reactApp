
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
export default function EmployeeDashboard() {
  const {id}= useParams() 
    
    return(
    <div>

    <div className='row'>

          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

              <h2 className='text-center m-4'>Employee Management</h2>

              <div className='card'>

                  <div className='card-header'>

                      <ul className='list-group list-group-flush'>

                          <li className='list-group-item'>

                         

                          <Link className='btn btn-outline-dark' to={`/employee/find/${id}`} >Your Profile</Link> &nbsp;
                          <Link className='btn btn-outline-dark' to={`/employee/update/${id}`} >Update Info</Link> &nbsp;
                        

                         

                          </li>

                        </ul>

                      </div>

                    </div>

                  </div>

  </div>

  </div>

 

  
  )
}
