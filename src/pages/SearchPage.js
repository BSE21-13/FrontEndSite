import React from 'react';
import './SearchPage.css';
import Search from '../components/Search';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { useHistory } from 'react-router-dom';

import HeaderButtonGroup from '../components/HeaderButtonGroup';

const SearchPage = () => {
  const [{ term }] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

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
        <div className='searchPage__results'>
          <div className=''>
            About {data?.searchInformation?.totalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds)
          </div>
          {data?.items.map((item, index) => (
            <SearchResult key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const SearchResult = ({ data, key }) => {
  const history = useHistory();
  return (
    <div
      className='searchPage__result'
      onClick={() => history.push(`/result/${key}`)}
    >
      <a href='/'>
        {data.pagemap?.cse_image?.length > 0 &&
          data.pagemap?.cse_image[0]?.src && (
            <img
              src={data.pagemap?.cse_image[0]?.src}
              className='searchPage__resultimage'
              alt=''
            />
          )}
        {data.displayLink}
      </a>
      <a href='/' className='searchPage__resultTitle'>
        <h2>{data.title}</h2>
      </a>
      <p className='Snippet'>{data.snippet}</p>
    </div>
  );
};

export default SearchPage;
