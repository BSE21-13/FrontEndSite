import React, { useState } from 'react';
import './SearchPage.css';
import './BrowseDoc.css';
import * as dummy from './DummyData';

import { useHistory } from 'react-router-dom';
import SearchInPage from '../components/SearchInPage';
import {
  Paper,
  MenuList,
  Divider,
  ListItemIcon,
  MenuItem,
  ListItemText,
} from '@mui/material';
import Check from '@mui/icons-material/Check';
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

const BrowseDocument = () => {
  const history = useHistory();

  const [currentSection, setSection] = useState(1);
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      <div className='browsePage__results'>
        <ContentMenu
          data={'item'}
          setSection={setSection}
          section={currentSection}
        />
        <SearchResult data={'item'} section={currentSection} />
      </div>
    </div>
  );
};

const SearchResult = ({ section }) => {
  return (
    <Paper elevation={3}>
      <div className='browse_contents_data'>
        {section === 1 && Introduction()}
        {section === 2 && Preliminaries()}
        {section === 3 && Preamble()}
        {section === 4 && Chapter_1()}
        {section == 5 && Chapter_2()}
        {section === 6 && Chapter_3()}
        {section === 7 && Chapter_4()}
        {section === 8 && Chapter_5()}
        {section === 9 && Chapter_6()}
        {section === 10 && Chapter_7()}
        {section === 11 && Chapter_8()}
        {section === 12 && Chapter_9()}
        {section === 13 && Chapter_10()}
        {section === 14 && Chapter_11()}
        {section === 15 && Chapter_12()}
        {section === 16 && Chapter_13()}
        {section === 17 && Chapter_14()}
        {section === 18 && Chapter_15()}
        {section === 19 && Chapter_16()}
        {section === 20 && Chapter_17()}
        {section === 21 && Chapter_18()}
        {section === 22 && Chapter_19()}
        {section === 23 && Schedules()}
      </div>
    </Paper>
  );
};

const ContentMenu = ({ setSection, section }) => {
  return (
    <Paper style={{ marginRight: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h5>CONTENTS</h5>
      </div>
      <MenuList dense sx={{ width: 170 }}>
        <MenuItem onClick={() => setSection(1)}>
          {section === 1 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Introduction
        </MenuItem>
        <MenuItem onClick={() => setSection(2)}>
          {section === 2 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Preliminaries
        </MenuItem>
        <MenuItem onClick={() => setSection(3)}>
          {section === 3 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          The Preamble
        </MenuItem>
        <MenuItem onClick={() => setSection(4)}>
          {section === 4 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter One
        </MenuItem>
        <MenuItem onClick={() => setSection(5)}>
          {section === 5 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Two
        </MenuItem>
        <MenuItem onClick={() => setSection(6)}>
          {section === 6 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Three
        </MenuItem>
        <MenuItem onClick={() => setSection(7)}>
          {section === 7 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Four
        </MenuItem>
        <MenuItem onClick={() => setSection(8)}>
          {section === 8 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Five
        </MenuItem>
        <MenuItem onClick={() => setSection(9)}>
          {section === 9 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Six
        </MenuItem>
        <MenuItem onClick={() => setSection(10)}>
          {section === 10 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Seven
        </MenuItem>
        <MenuItem onClick={() => setSection(11)}>
          {section === 11 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Eight
        </MenuItem>
        <MenuItem onClick={() => setSection(12)}>
          {section === 12 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Nine
        </MenuItem>
        <MenuItem onClick={() => setSection(13)}>
          {section === 13 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Ten
        </MenuItem>
        <MenuItem onClick={() => setSection(14)}>
          {section === 14 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Eleven
        </MenuItem>
        <MenuItem onClick={() => setSection(15)}>
          {section === 15 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Twelve
        </MenuItem>
        <MenuItem onClick={() => setSection(16)}>
          {section === 16 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Thirteen
        </MenuItem>
        <MenuItem onClick={() => setSection(17)}>
          {section === 17 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Fourteen
        </MenuItem>
        <MenuItem onClick={() => setSection(18)}>
          {section === 18 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Fifteen
        </MenuItem>
        <MenuItem onClick={() => setSection(19)}>
          {section === 19 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Sixteen
        </MenuItem>
        <MenuItem onClick={() => setSection(20)}>
          {section === 20 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Seventeen
        </MenuItem>
        <MenuItem onClick={() => setSection(21)}>
          {section === 21 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Eighteen
        </MenuItem>
        <MenuItem onClick={() => setSection(22)}>
          {section === 22 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Chapter Nineteen
        </MenuItem>
        <MenuItem onClick={() => setSection(23)}>
          {section === 23 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Schedules
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default BrowseDocument;
