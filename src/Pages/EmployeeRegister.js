import React, {useState} from 'react'

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function EmployeeRegister() {

  
    let navigate = useNavigate();

    const [employee, setemployee] = useState({

        username:"",

        password:"",

        name:"",
        mobile:""


    })



    const{username, password, name ,mobile } = employee



    const onInputChange=(e)=>{

setemployee({...employee,[e.target.name]: e.target.value})

    }



    const save=async(e)=>{

        e.preventDefault();



        const result= await axios.post("http://localhost:8580/empadd", employee)
        
        navigate('/employee/login')
    }

    
    return (

        <div>
    
                           <div className='container'>
    
            <div className='row'>
    
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
    
                    <h2 className='text-center m-4'>Employee Registration</h2>
    
                    <form onSubmit={(e)=>save(e)}>
    
                       
                        <div className='mb-3'>
    
                        <input type={"text"}
    
                        className="form-control"
    
                        placeholder='Enter your Email'
    
                        name="username"
    
                        value={username}
    
                        onChange={(e)=>onInputChange(e)} />
    
                        </div>

                       

                        <div className='mb-3'>
    
                        <input type={"text"}
    
                        className="form-control"
    
                        placeholder='Enter your Password'
    
                        name="password"
    
                        value={password}
    
                        onChange={(e)=>onInputChange(e)} />
    
                        </div>

                        <div className='mb-3'>
    
                        <input type={"text"}
    
                        className="form-control"
    
                        placeholder='Enter your Name'
    
                        name="name"
    
                        value={name}
    
                        onChange={(e)=>onInputChange(e)} />
    
                        </div>


                        <div className='mb-3'>
    
                        <input type={"text"}
    
                        className="form-control"
    
                        placeholder='Enter your Mobile'
    
                        name="mobile"
    
                        value={mobile}
    
                        onChange={(e)=>onInputChange(e)} />
    
                        </div>
    
    
    
    
                        <button type='submit' className='btn btn-outline-primary'>Register</button>
    
                        &nbsp;
    
                        <button type='submit' className='btn btn-outline-danger'>Cancel</button>
    
                    </form>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
  )
    
}
