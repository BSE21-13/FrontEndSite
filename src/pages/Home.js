import React from "react";
import "./Home.css";
import Search from "../components/Search";

import HeaderButtonGroup from "../components/HeaderButtonGroup"

const Home = () =>
{
  
//   const getHelp = () =>
//   {
//     window.alert('Need help?')
//   }
  return (
    <div className="home">
      <div className="home__headerMain">
        <HeaderButtonGroup />
      </div>
      <div className="home__body">
        <div className="home__bodyImage">
          <h1>Query the Uganda Constitution</h1>
          {/* <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
          /> */}
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
