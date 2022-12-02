import React from "react";

import screenshot from "../../assets/images/EA.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <img className="screenshot" src={screenshot} alt="" />
    </div>
  );
};

export default Home;
