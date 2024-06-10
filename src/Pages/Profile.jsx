import axios from "axios";
import React, { useState, useEffect } from "react";


const Profile = ({ token }) => {
  const [resdata, setResdata] = useState([]);
  const [msg, setMsg] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/user/getuser", {
        headers: {
          Authorization: token,
        },
      });
      
      setResdata(response.data.data);
      setMsg(response.data.Message);
      
    } catch (error) {
      console.log("Error occurred:", error);
      if (error.response && error.response.data && error.response.data.Message) {
        setMsg(error.response.data.Message);
      } else {
        setMsg("An error occurred"); // Default message if data or Message is missing
      }
    }
  };

  return (
    <div>
      {Array.isArray(resdata) && resdata.map((ele, index) => (
        <div key={index}>
          <h1>{ele.user_name}</h1>
          <h1>{ele.user_email}</h1>
        </div>
      ))}
    </div>
  );
};

export default Profile;
