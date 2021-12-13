import React from 'react';
import Search from '../components/Search';
import '../pages/SearchPage.css';
import HeaderButtonGroup from './HeaderButtonGroup';
import { ReactComponent as Logo } from '../images/cadiseLogo_md.svg';
const SearchInPage = ({ history }) => {
  return (
    <>
      <div className=' searchPage__headerTop' style={{ marginBottom: '0px' }}>
        {/* <h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
          Query the Uganda Constitution
        </h1> */}
        <span style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
          <Logo />
        </span>

        <div className='home__headerMain'>
          <HeaderButtonGroup />
        </div>
      </div>
      <div className='searchPage__headerTop'>
        <div className='searchPage__headerSearch'>
          <Search hideButtons />
        </div>
      </div>
    </>
  );
};

export default SearchInPage;
