import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import * as dummy from './DummyData';

import { useParams } from 'react-router-dom';
import SearchInPage from '../components/SearchInPage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Paper } from '@material-ui/core';

const ReadSearchResult = () => {
  const { id } = useParams();
  const history = useHistory();
  const [{ term }] = useStateValue();

  return (
    <div className='searchPage'>
      <SearchInPage history={history} />

      {term && (
        <div className='searchPage__results'>
          <h2 className=''>{id}</h2>

          <SearchResult data={'item'} />
        </div>
      )}
    </div>
  );
};

const SearchResult = ({ data }) => {
  return (
    <Paper elevation={3}>
      <div className='searchPage__result_1'>
        <a href='/' className='searchPage__resultTitle'>
          <h2>{data.title}</h2>
        </a>
        <p className='Snippet'>{dummy.data.text}</p>
        <p className='Snippet'>{dummy.data.text}</p>
      </div>
    </Paper>
  );
};

export default ReadSearchResult;
