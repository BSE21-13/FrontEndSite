import React from 'react';
import './SearchPage.css';
import * as dummy from './DummyData';

import { useHistory } from 'react-router-dom';
import SearchInPage from '../components/SearchInPage';
import { Paper } from '@material-ui/core';

const HelpPage = () => {
  const history = useHistory();
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      <div className='browsePage__results'>
        <ContentPanel data={'item'} />
        <SearchResult data={'item'} />
      </div>
    </div>
  );
};

const SearchResult = () => {
  return (
    <Paper elevation={3}>
      <div className='browse_contents_data'>
        <h2>How to use CADISE?</h2>

        <p className='Snippet'>{dummy.data.text}</p>
        <p className='Snippet'>{dummy.data.text}</p>
      </div>
    </Paper>
  );
};

const ContentPanel = () => {
  return (
    <Paper variant='outlined' style={{ marginRight: '20px' }}>
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
    </Paper>
  );
};

export default HelpPage;
