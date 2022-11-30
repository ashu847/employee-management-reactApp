import React, {useState} from 'react'

import axios from 'axios';

import { useNavigate } from 'react-router-dom';



export default function Login() {

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



        const result= await axios.get("http://localhost:8580/emplogin?username="+username+"&password="+password)
        console.log(result.data)
        if(result.data==="Employee"){

       
        navigate('/employee/dashboard/'+username)
    }
    else if(result.data!=="Employee"){
        navigate('/')
    }

    }
    return (

        <div>
    
                           <div className='container'>
    
            <div className='row'>
    
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
    
                    <h2 className='text-center m-4'>Employee Login</h2>
    
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