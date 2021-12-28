import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import * as dummy from './DummyData';

import { useParams } from 'react-router-dom';
import SearchInPage from '../components/SearchInPage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Paper } from '@mui/material';
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

const ReadSearchResult = () => {
  const { id } = useParams();
  const history = useHistory();
  const [currentSection, setSection] = useState('');

  useEffect(() => {
    setSection(id);
  }, []);
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />

      <div className='searchPage__results'>
        <h2 className=''>{id}</h2>

        <SearchResult data={'item'} section={currentSection} />
      </div>
    </div>
  );
};

const SearchResult = ({ section }) => {
  return (
    <Paper elevation={3}>
      <div className='browse_contents_data'>
        {section?.includes(
          'National objectives and directive principles of state policy',
        ) && Preamble()}
        {section?.includes('Preliminaries') && Preliminaries()}
        {section?.includes('Preamble') && Preamble()}
        {section?.includes('Chapter one') && Chapter_1()}
        {section?.includes('Chapter two') && Chapter_2()}
        {section?.includes('Chapter three') && Chapter_3()}
        {section?.includes('Chapter four ') && Chapter_4()}
        {section?.includes('Chapter five ') && Chapter_5()}
        {section?.includes('Chapter six ') && Chapter_6()}
        {section?.includes('Chapter seven ') && Chapter_7()}
        {section?.includes('Chapter eight ') && Chapter_8()}
        {section?.includes('Chapter nine ') && Chapter_9()}
        {section?.includes('Chapter ten ') && Chapter_10()}
        {section?.includes('Chapter eleven ') && Chapter_11()}
        {section?.includes('Chapter twelve ') && Chapter_12()}
        {section?.includes('Chapter thirteen ') && Chapter_13()}
        {section?.includes('Chapter fourteen ') && Chapter_14()}
        {section?.includes('Chapter fifteen ') && Chapter_15()}
        {section?.includes('Chapter sixteen ') && Chapter_16()}
        {section?.includes('Chapter seventeen ') && Chapter_17()}
        {section?.includes('Chapter eighteen ') && Chapter_18()}
        {section?.includes('Chapter nineteen ') && Chapter_19()}
        {section?.includes('Schedules') && Schedules()}
      </div>
    </Paper>
  );
};

export default ReadSearchResult;
