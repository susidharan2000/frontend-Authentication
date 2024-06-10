import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setToken}) => {
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const [msg,setMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const payload = {
            user_email: email,
            password: password
        };
        await axios.post("https://backend-authentication-jrpf.onrender.com/api/user/login",payload)
        .then(res=>{
          setMsg(res.data.msg);
          setToken(res.data.token);
          toast.success("Successfully logged in")
          navigate('/profile');
        })
        .catch((error)=>{
        console.log(error);
        setMsg(error.data.Message);
        toast.error(error.data.Message);
        navigate("/register");
    })
    }

    return (
        <div>
  <section className="vh-100" style={{backgroundColor: '#eee'}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius: 25}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">LogIn</p>
                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label className="form-label" htmlFor="form3Example3c">Email</label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" name='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-5">
                     <Link to="/forgot-password"> Forget Password ?</Link>
                  </div>
                    <div className="d-flex justify-content-center gap-5 mx-4 mb-3 mb-lg-4">
                      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Login</button>
                      <Link to="/" className="btn btn-warning btn-lg" >Back</Link>
                    </div>
                  </form>
                  <h1>{msg}</h1>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    );
};

export default Login;