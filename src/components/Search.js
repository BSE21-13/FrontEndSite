import React, { useState } from 'react';
import './Search.css';

import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons = false }) => {
  const [, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push('/search');
  };

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input
          type='text'
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
          <Button
            style={{ borderColor: '#e0e0e0' }}
            variant='outlined'
            onClick={() => history.push('/contact-legal')}
          >
            Need a lawyer?
          </Button>
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
