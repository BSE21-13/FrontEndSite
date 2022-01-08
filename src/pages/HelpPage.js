import React, { useState } from 'react';
import './SearchPage.css';
import { useHistory } from 'react-router-dom';
import SearchInPage from '../components/SearchInPage';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
  Paper,
  Grid,
  MenuList,
  ListItemIcon,
  MenuItem,
  Avatar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import { Check } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { DevTeam } from './Sections';
import search1 from '../images/cadise1.PNG';
import search2 from '../images/cadise2.PNG';
import legal1 from '../images/legalSupport.PNG';
import legal2 from '../images/sendEmail.PNG';
import legal3 from '../images/useCalendly.PNG';

const HelpPage = () => {
  const history = useHistory();
  const [currentSection, setSection] = useState(2);
  return (
    <div className='searchPage'>
      <SearchInPage history={history} />
      <div className='browsePage__results'>
        <SectionPanel setSection={setSection} section={currentSection} />
        <HelpSection section={currentSection} />
      </div>
    </div>
  );
};

const HelpSection = ({ section }) => {
  return (
    <Paper elevation={3} style={{ width: '100%' }}>
      <div className='browse_contents_data' style={{ padding: '  80px' }}>
        {section === 1 && <UseSearch />}
        {section === 2 && <UseLegalSupport />}
        {section === 3 && <DevelopmentTeam team={DevTeam} />}
      </div>
    </Paper>
  );
};

const SectionPanel = ({ setSection, section }) => {
  return (
    <Paper style={{ marginRight: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h5>HELP</h5>
      </div>
      <MenuList dense sx={{ width: 170 }}>
        <MenuItem onClick={() => setSection(1)}>
          {section === 1 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Use Search
        </MenuItem>
        <MenuItem onClick={() => setSection(2)}>
          {section === 2 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Use Legal Support
        </MenuItem>
        <MenuItem onClick={() => setSection(3)}>
          {section === 3 && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          Development Team
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

const DevelopmentTeam = ({ team }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h4 style={{ textAlign: 'center' }}>MEET THE DEVELOPMENT TEAM</h4>
      </Grid>
      {team.map((person) => (
        <Grid item xs={6}>
          <div>
            <Stack direction='row' spacing={4}>
              <Card sx={{ width: 300 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='220'
                  image={person.image}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {person.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
         {person.description}
        </Typography> */}
                </CardContent>
                <CardActions>
                  <a
                    style={{ textDecoration: 'none' }}
                    href={person.github}
                    target='_blank'
                  >
                    {' '}
                    <Button size='small'>GitHub</Button>
                  </a>
                  <a
                    style={{ textDecoration: 'none' }}
                    href={person.linkedIn}
                    target='_blank'
                  >
                    <Button size='small'>LinkedIn</Button>{' '}
                  </a>
                </CardActions>
              </Card>
            </Stack>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

const UseSearch = () => {
  const history = useHistory();
  const itemData = [
    {
      img: search1,
      title: 'Home Page Search',
      route_path: '/',
    },
    {
      img: search2,
      title: 'Search in Page',
      route_path: '/search',
    },
  ];

  return (
    <>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={2}>
          <img src={item.img} alt={item.title} loading='lazy' />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={() => history.push(`${item.route_path}`)}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
      <ImageListItem key='Subheader' cols={2}>
        <ListSubheader component='div'>
          <h5>Steps of How to Search the Uganda constitution?</h5>
          <ol>
            <li>
              In the text input area- Type query term in correct English
              spelling you wish to find information on ( For example “
              Qualifications of members of parliament”)
            </li>
            <li>
              Press Enter key on your keyboard to initiate the search to
              initialize the search.
            </li>
            <li>You will be redirected to the search results page</li>
            <li>
              Select a result you are interested in by clicking any result card
              after which you will be redirected to the Read results page
            </li>
          </ol>
        </ListSubheader>
      </ImageListItem>
    </>
  );
};

const UseLegalSupport = () => {
  const history = useHistory();
  const itemData = [
    {
      img: legal1,
      title: 'Legal Support List',
      route_path: '/contact-legal',
    },
    {
      img: legal2,
      title: 'Send Email',
      route_path: '/contact-legal',
    },
    {
      img: legal3,
      title: 'Book Appointment',
      route_path: '/contact-legal',
    },
  ];

  return (
    <>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={2}>
          <img src={item.img} alt={item.title} loading='lazy' />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={() => history.push(`${item.route_path}`)}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
      <ImageListItem key='Subheader' cols={2}>
        <ListSubheader component='div'>
          <h5>Steps of How to use CADISE Legal Support.</h5>
          <h6>How to message via Email CADISE Legal Support Agent.</h6>
          <ol>
            <li>
              On the legal support page, click send Email button on any Legal
              supporter’s profile. A modal will pop up with a form.
            </li>

            <li>
              Fill in the form with appropriate information i.e. valid sender’s
              email (F2) and message text.
            </li>
            <li>Click the reCAPTCHA security checkbox</li>
            <li>Click Send button to send the Email</li>
            <li>
              Click cancel button to cancel the operation and close the popup
              modal,
            </li>
          </ol>
          <h6>How to book an appointment with CADISE Legal Support Agent.</h6>
          <ol>
            <li>
              On the legal support page, click Make Appointment button on any
              Legal supporter’s profile. A modal will pop up with a form.
            </li>
            <li>Click a date you wish to schedule an apointment</li>
            <li>
              Click a time you wish to schedule an apointment, and then confirm
            </li>
            <li>
              Fill in the form with appropriate information i.e. your valid name
              and email address and an optional message text.
            </li>
            <li>Click Schedule Event button to send the appointment request</li>
            <li>
              Click cancel button to cancel in the top right corner of the web
              window to close the popup modal,
            </li>
          </ol>
        </ListSubheader>
      </ImageListItem>
    </>
  );
};

export default HelpPage;
