import React from 'react';
import './Home.css';
import Search from '../components/Search';
import { ReactComponent as Logo } from '../images/cadiseLogo.svg';
import HeaderButtonGroup from '../components/HeaderButtonGroup';

const Home = () => {
  //   const getHelp = () =>
  //   {
  //     window.alert('Need help?')
  //   }
  return (
    <div className='home'>
      <div className='home__headerMain'>
        <HeaderButtonGroup />
      </div>
      <div className='home__body'>
        <div className='home__bodyImage'>
          {/* <h1>Query the Uganda Constitution</h1> */}
          <Logo />
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Home;
