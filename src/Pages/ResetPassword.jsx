import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const {id,token} = useParams();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
        const response = await axios.post( `http://localhost:4000/api/user/reset-password/${id}/${token}`,{password});
            navigate('/login');
        
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
              <h2 className="fw-bold mb-2 text-uppercase">reset Passowrd</h2>
              <p className="text-white-50 mb-5">Please enter your new password</p>
              <form onSubmit={handleSubmit}>
              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input type="password" id="password" name="password" placeholder='Enter your password' className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)} />
                <label className="form-label"  htmlFor="typeEmailX">Email</label>
              </div>
              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-success btn-lg px-5" type="submit">Update</button>
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

export default ResetPassword;