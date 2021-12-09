import React from 'react';
import './SearchPage.css';
import Search from '../components/Search';
import { useStateValue } from '../StateProvider';
// import useGoogleSearch from "../useGoogleSearch";
import * as dummy from './DummyData';

import HeaderButtonGroup from '../components/HeaderButtonGroup';

const BrowseDocument = () => {
  const [{ term }] = useStateValue();

  // LIVE API CALL
  //   const { data } = useGoogleSearch(term);

  return (
    <div className='searchPage'>
      <div className=' searchPage__headerTop'>
        <h1>Query the Uganda Constitution</h1>
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

      {term && (
        <div className='browsePage__results'>
          <ContentPanel data={'item'} />
          <SearchResult data={'item'} />
        </div>
      )}
    </div>
  );
};

const SearchResult = () => {
  return (
    <div className='browse_contents_data'>
      <h2>Preamble</h2>

      <p className='Snippet'>{dummy.data.text}</p>
      <p className='Snippet'>{dummy.data.text}</p>
    </div>
  );
};

const ContentPanel = () => {
  return (
    <div className='browse_contents_list'>
      <a href='/' className='searchPage__resultTitle'>
        <h2>Sections</h2>
      </a>
      <a href='/' className='searchPage__resultTitle'>
        <p>Introduction</p>
      </a>
      <a href='/' className='searchPage__resultTitle'>
        <p>Preamble</p>
      </a>
      <a href='/' className='searchPage__resultTitle'>
        <p>Article 1</p>
      </a>
      <a href='/' className='searchPage__resultTitle'>
        <p>Article 2</p>
      </a>
      <a href='/' className='searchPage__resultTitle'>
        <p>Article 3</p>
      </a>
      <a href='/' className='searchPage__resultTitle'>
        <p>Article 4</p>
      </a>
    </div>
  );
};

export default BrowseDocument;
