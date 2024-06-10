import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const payload = {
            user_email: email
        };
        try{
          const response = await axios.post("https://backend-authentication-jrpf.onrender.com/api/user/forgot-password",payload);
          if(response.data.status === 200) {
              toast.success(response.data.message)
              navigate('/login');
          }
        }
        catch(err){
            console.log(err);
        }
    }
    return (
       <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Forgot Passowrd ?</h2>
              <p className="text-white-50 mb-5">Please enter your Email to change password</p>
              <form onSubmit={handleSubmit}>
              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input type="email" id="email" name="email" placeholder='company@gmail.com' onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>
              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-success btn-lg px-5" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default ForgetPassword;