import React, { useState } from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useCadiseSearch from '../useCadiseSearch';
import { useHistory } from 'react-router-dom';
import { Chip, Paper } from '@mui/material';
import { Pagination } from '@mui/material';
import SearchInPage from '../components/SearchInPage';

const SearchPage = () => {
  const [{ term }] = useStateValue();
  const history = useHistory();
  const data = useCadiseSearch(term);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.data?.results?.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Generate pagination numbers
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(data?.data?.results?.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      {term && (
        <div className='searchPage__results'>
          <div className=''>
            {data.loading} About {data?.data?.results?.length} results{' '}
          </div>

          <div className='chip-stack'>
            {data?.data?.keywords?.map((item, index) => (
              <span key={index} className='chip-item'>
                {' '}
                <Chip
                  label={item}
                  // variant='outlined'
                  size='small'
                />
              </span>
            ))}
          </div>

          {currentPosts?.map((item, index) => (
            <SearchResult key={index} data={item} history={history} />
          ))}

          {data?.data?.results?.length > 5 && (
            <Pagination
              count={pageNumbers?.length}
              page={currentPage}
              onChange={handleChange}
            />
          )}
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
        <h4>{data.chapter}</h4>

        <p className='Snippet'>{data.text}</p>
      </div>
    </Paper>
  );
};

export default SearchPage;
