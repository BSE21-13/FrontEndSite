import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useCadiseSearch from '../useCadiseSearch';
import { Link, useHistory } from 'react-router-dom';
import { Chip, Paper } from '@material-ui/core';
import SearchInPage from '../components/SearchInPage';

const SearchPage = () => {
  const [{ term }] = useStateValue();
  const history = useHistory();
  const data = useCadiseSearch(term);
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      {term && (
        <div className='searchPage__results'>
          <div className=''>About {data?.data?.results?.length} results </div>

          <div className='chip-stack'>
            {data?.data?.keywords?.map((item, index) => (
              <span key={index} className='chip-item'>
                {' '}
                <Chip
                  size='primary'
                  label={item}
                  variant='outlined'
                  size='small'
                />
              </span>
            ))}
          </div>

          {data?.data?.results?.map((item, index) => (
            <SearchResult key={index} data={item} history={history} />
          ))}
        </div>
      )}
    </div>
  );
};

const SearchResult = ({ data, key, history }) => {
  return (
    <Paper elevation={3}>
      <div
        className='searchPage__result'
        onClick={() => history.push(`/result/${data?.chapter}`)}
      >
        <h2>{data.chapter}</h2>

        <p className='Snippet'>{data.text}</p>
      </div>
    </Paper>
  );
};

export default SearchPage;
