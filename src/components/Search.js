import React, { useState } from 'react';
import './Search.css';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

import * as searchActions from '../redux/actions/search';

const Search = ({ hideButtons = false }) => {
  // const { searchTerm} = useSelector(state => state.search)
  // searchTerm !== null ? searchTerm :''
  const [input, setInput] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (trimmedInput.length > 2) {
      dispatch(searchActions.sendQuery(trimmedInput));

      history.push('/search');
    }
  };

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input
          type='text'
          placeholder='Ask the constitution?'
          value={input}
          style={{ marginRight: '5px' }}
          spellCheck='true'
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <MicIcon /> */}
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
          <Button
            variant='outlined'
            onClick={search}
            type='submit'
            className='search__buttonsHidden'
          ></Button>
          {/* <Button
            style={{ borderColor: '#e0e0e0' }}
            variant='outlined'
            onClick={() => history.push('/contact-legal')}
          >
            Need a lawyer?
          </Button> */}
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            variant='outlined'
            onClick={search}
            type='submit'
            className='search__buttonsHidden'
          ></Button>
          <Button variant='outlined' className='search__buttonsHidden'></Button>
        </div>
      )}
    </form>
  );
};

export default Search;
