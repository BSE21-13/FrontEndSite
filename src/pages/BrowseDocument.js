import React, { useState } from 'react';
import './SearchPage.css';
import './BrowseDoc.css';

import { useHistory } from 'react-router-dom';
import SearchInPage from '../components/SearchInPage';
import { Paper } from '@material-ui/core';
import {
  Introduction,
  Preliminaries,
  Preamble,
  Chapter_1,
  Chapter_2,
  Chapter_3,
  Chapter_4,
  Chapter_5,
  Chapter_6,
  Chapter_7,
  Chapter_8,
  Chapter_9,
  Chapter_10,
  Chapter_11,
  Chapter_12,
  Chapter_13,
  Chapter_14,
  Chapter_15,
  Chapter_16,
  Chapter_17,
  Chapter_18,
  Chapter_19,
  Schedules,
} from './Sections';

const BrowseDocument = () => {
  const history = useHistory();

  const [currentSection, setSection] = useState(1);
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      <div className='browsePage__results'>
        <ContentPanel data={'item'} setSection={setSection} />
        <SearchResult data={'item'} section={currentSection} />
      </div>
    </div>
  );
};

const SearchResult = ({ section }) => {
  return (
    <Paper elevation={3}>
      <div className='browse_contents_data'>
        {section === 1 && Introduction()}
        {section === 2 && Preliminaries()}
        {section === 3 && Preamble()}
        {section === 4 && Chapter_1()}
        {section === 5 && Chapter_2()}
        {section === 6 && Chapter_3()}
        {section === 7 && Chapter_4()}
        {section === 8 && Chapter_5()}
        {section === 9 && Chapter_6()}
        {section === 10 && Chapter_7()}
        {section === 11 && Chapter_8()}
        {section === 12 && Chapter_9()}
        {section === 13 && Chapter_10()}
        {section === 14 && Chapter_11()}
        {section === 15 && Chapter_12()}
        {section === 16 && Chapter_13()}
        {section === 17 && Chapter_14()}
        {section === 18 && Chapter_15()}
        {section === 19 && Chapter_16()}
        {section === 20 && Chapter_17()}
        {section === 21 && Chapter_18()}
        {section === 22 && Chapter_19()}
        {section === 23 && Schedules()}
      </div>
    </Paper>
  );
};

const ContentPanel = ({ setSection }) => {
  return (
    <Paper variant='outlined' style={{ marginRight: '20px' }}>
      <div className='browse_contents_list'>
        <h2>Contents</h2>

        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(1)}
        >
          <p>Introduction</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(2)}
        >
          <p>Preliminaries</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(3)}
        >
          <p>The Preamble</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(4)}
        >
          <p>Chapter One</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(5)}
        >
          <p>Chapter Two</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(6)}
        >
          <p>Chapter Three</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(7)}
        >
          <p>Chapter Four</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(8)}
        >
          <p>Chapter Five</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(9)}
        >
          <p>Chapter Six</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(10)}
        >
          <p>Chapter Seven</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(11)}
        >
          <p>Chapter Eight</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(12)}
        >
          <p>Chapter Nine</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(13)}
        >
          <p>Chapter Ten</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(14)}
        >
          <p>Chapter Eleven</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(15)}
        >
          <p>Chapter Twelve</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(16)}
        >
          <p>Chapter Thirteen</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(17)}
        >
          <p>Chapter Fourteen</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(18)}
        >
          <p>Chapter Fifteen</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(19)}
        >
          <p>Chapter Sixteen</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(20)}
        >
          <p>Chapter Seventeen</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(21)}
        >
          <p>Chapter Eighteen</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(22)}
        >
          <p>Chapter Nineteen</p>
        </a>
        <a
          href='/'
          className='searchPage__resultTitle'
          onClick={() => setSection(23)}
        >
          <p>Schedules</p>
        </a>
      </div>
    </Paper>
  );
};

export default BrowseDocument;
