import React, { useState } from 'react';
import './SearchPage.css';
import { useHistory } from 'react-router-dom';
import { Pagination, Chip, Paper, Box, Skeleton } from '@mui/material';
import SearchInPage from '../components/SearchInPage';
import { useSelector } from 'react-redux';

const SearchPage = () => {
  const history = useHistory();
  const { loading, data } = useSelector((state) => state.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.results?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Generate pagination numbers
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data?.results?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      {!loading ? (
        <div className='searchPage__results'>
          <div className=''>About {data?.results?.length} results </div>

          <div className='chip-stack'>
            {data?.keywords?.map((item, index) => (
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

          {data?.results?.length > 5 && (
            <Pagination
              count={pageNumbers?.length}
              page={currentPage}
              onChange={handleChange}
            />
          )}
        </div>
      ) : (
        <div className='searchPage__results'>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      )}
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <Paper elevation={3}>
      <div className='searchPage__result'>
        <Box sx={{ width: '100%' }}>
          <Skeleton
            animation='wave'
            height={20}
            width='50%'
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            animation='wave'
            height={15}
            width='100%'
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation='wave'
            height={15}
            width='100%'
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation='wave'
            height={15}
            width='70%'
            style={{ marginBottom: 6 }}
          />
        </Box>
      </div>
    </Paper>
  );
};

const SearchResult = ({ data, key, history }) => {
  const fragmentRef = data.text.split(' ');
  const fragmentLength = fragmentRef.length;

  return (
    <Paper elevation={3}>
      <div
        className='searchPage__result'
        // onClick={() => history.push(`/result/${data?.chapter}`)}
      >
        {/*  */}
        <a
          href={`/result/${data?.chapter}#:~:text=${
            fragmentLength < 6
              ? data.text
              : `${fragmentRef?.[0]}%20${fragmentRef?.[1]}%20${
                  fragmentRef?.[2]
                },${fragmentRef?.[fragmentLength - 2]}%20${
                  fragmentRef?.[fragmentLength - 1]
                }`
          }`}
        >
          <h4>{data.chapter}</h4>
        </a>

        <p className='Snippet'>{data.text}</p>
      </div>
    </Paper>
  );
};

export default SearchPage;
