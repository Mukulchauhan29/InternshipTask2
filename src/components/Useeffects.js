import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Preloader from "./Preloader";
import logo from "./logo.png";
import "./4.jpg";
export const Useeffects = () => {
  const [cardData, setData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const allData = async () => {
    if (visibility) {
      const res = await axios.get("https://reqres.in/api/users?page=1");
      const delay = 3000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      setData(res.data.data);
    }
    setLoading(false);
  };
  const display = () => {
    setVisibility(true);
    setLoading(true);
  };

  useEffect(() => {
    if (visibility) {


      allData();
    }
  }, [loading]);
  const renderCard = (user) => {
    if (loading) return Preloader;
    else {
      return (
        <div className="box">
          <img src={user.avatar} alt="" className="img" />
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <h3>{user.email}</h3>
        </div>
      );
    }
  };
  return (
      <div className="App">
          <div className="banner">    
              <nav class="navbar ">  
                  <a class="navbar-brand" href="#"/>
                  <img
                  src={logo}
                  alt=""
                  style={{ height: "150px", width: "300px", marginLeft: "10px"}}
                />


              <button type="button" class="btn btn-outline-dark" onClick={display}>
                GET USERS
              </button>
            </nav>

            {loading ? <Preloader /> : null}
            <div className="container" style={userStyle}>
              {loading ? null : cardData.map(renderCard)}
            </div>
          </div>
      </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
  marginBottom: "40px"
};
