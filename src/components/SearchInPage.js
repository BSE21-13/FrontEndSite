import React from 'react';
import Search from '../components/Search';
import '../pages/SearchPage.css';
import HeaderButtonGroup from './HeaderButtonGroup';
const SearchInPage = ({ history }) => {
  return (
    <>
      <div className=' searchPage__headerTop'>
        <h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
          Query the Uganda Constitution
        </h1>

        <div className='home__headerMain'>
          <HeaderButtonGroup />
        </div>
      </div>
      <div className='searchPage__headerTop'>
        <div className='searchPage__headerSearch'>
          <Search hideButtons />
        </div>
        <div className='home__headerMain'></div>
      </div>
    </>
  );
};

export default SearchInPage;
