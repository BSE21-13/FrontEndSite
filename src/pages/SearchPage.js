import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import { useHistory } from 'react-router-dom';
import { Pagination, Chip, Paper, Box, Skeleton } from '@mui/material';
import SearchInPage from '../components/SearchInPage';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import * as fetchFunctions from '../api/index';
import * as searchActions from '../redux/actions/search';

const SearchPage = () => {
  const history = useHistory();
  const { loading, data } = useSelector((state) => state.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [suggestions, setSuggestions] = useState(null);

  const getSuggestions = () => {
    fetchFunctions
      .getData(
        `${ELASTIC_SEARCH}cadise_autosuggest_appp/queries/_search`,

        API_KEY,
      )
      .then((res) => {
        setSuggestions(res.data.hits.hits);
      });
  };

  const ELASTIC_SEARCH = process.env.REACT_APP_ELASTIC_SEARCH_ENDPOINT;
  const API_KEY = `${process.env.REACT_APP_ELASTIC_SEARCH_API_ENCODED}`;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.results?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  // Generate pagination numbers
  const pageNumbers = [];

  const dispatch = useDispatch();
  const search = (text) => {
    const trimmedInput = text.trim();
    if (trimmedInput.length > 2) {
      dispatch(searchActions.sendQuery(trimmedInput));
    }
  };

  for (let i = 1; i <= Math.ceil(data?.results?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      {!loading ? (
        <div className='searchPage__results'>
          <div className=''>
            {`About ${data?.results?.length} results in ${data?.time} seconds`}
          </div>

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
          {currentPosts?.length > 0 ? (
            currentPosts?.map((item, index) => (
              <SearchResult key={index} data={item} history={history} />
            ))
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Alert
                variant='filled'
                severity='warning'
                style={{ marginTop: 10 }}
              >
                <AlertTitle>Sorry! No results found.</AlertTitle>
                Please try another question
              </Alert>
              <div>
                <h6 style={{ marginBottom: 5 }}>People usually ask</h6>
                {suggestions?.map((item) => (
                  <span key={item._id} className='chip-item'>
                    <Chip
                      label={item._source.fullText}
                      // variant='outlined'
                      color='info'
                      onClick={() => search(`${item._source.fullText}`)}
                      style={{ marginBottom: 5, marginRight: 2 }}
                      size='medium'
                    />
                  </span>
                ))}
              </div>
            </div>
          )}

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

const SearchResult = ({ data }) => {
  const fragmentRef = data.text.split(' ');
  const fragmentLength = fragmentRef.length;

  return (
    <Paper elevation={3}>
      <div className='searchPage__result'>
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
