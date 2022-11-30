import React, {useState} from 'react'

import axios from 'axios';

import { useNavigate } from 'react-router-dom';



export default function AdminLogin() {

    let navigate = useNavigate();

    const [admin, setadmin] = useState({

        username:"",

        password:"",


    })



    const{username, password} = admin



    const onInputChange=(e)=>{

setadmin({...admin,[e.target.name]: e.target.value})

    }



    const save=async(e)=>{

        e.preventDefault();



        const result= await axios.post("http://localhost:8580/adminlogin", admin)
        console.log(result.data)
        if(result.data==="admin"){

       
        navigate('/admin/dashboard')
    }
    else if(result.data!=="admin"){
        navigate('/')
    }

    }
    return (

        <div>
    
                           <div className='container'>
    
            <div className='row'>
    
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
    
                    <h2 className='text-center m-4'>Admin Login</h2>
    
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
    
    
    
    
                        <button type='submit' className='btn btn-outline-primary'>Login</button>
    
                        &nbsp;
    
                        <button type='submit' className='btn btn-outline-danger'>Cancel</button>
    
                    </form>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
    
      )
    
    }