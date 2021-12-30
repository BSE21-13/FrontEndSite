import React, { useState, useEffect } from 'react';
import './SearchPage.css';

// import SearchIcon from "'@mui/icons-material/Search";
import { Box, Button, Modal, Typography, TextField } from '@mui/material';
import SearchInPage from '../components/SearchInPage';
import { PopupButton } from 'react-calendly';
import { useHistory } from 'react-router-dom';
import { Paper, Pagination } from '@mui/material';
import { Send, CancelOutlined } from '@mui/icons-material';
import * as fetchFunctions from '../api/index';
import endpoints from '../api/endpoints';

const ContactLegal = () => {
  const history = useHistory();
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true);
    const fetchData = async () => {
      const result = await fetchFunctions.getData(endpoints.get_legal_list);
      setData(result.data);
    };
    fetchData();
  }, []);

  // Pagination control
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Generate pagination numbers
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='searchPage'>
      <SearchInPage history={history} />

      <div className='searchPage__results'>
        <div className=''>
          <h3>Our registered legal support partners.</h3>
        </div>

        {data?.length > 0
          ? currentItems.map((item) => (
              <ContactResult
                key={item._id}
                data={item}
                setLawyer={setSelectedLawyer}
                lawyer={selectedLawyer}
              />
            ))
          : 'No lawyers list.'}

        {data?.length > 2 && (
          <Pagination
            count={pageNumbers?.length}
            page={currentPage}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

const ContactResult = ({ data, setLawyer, lawyer }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const overlalySettings = {
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideGdprBanner: true,
    hideLandingPageDetails: true,
    primaryColor: '0057FF',
    textColor: '4d5055',
  };

  const prefillData = {
    date: new Date(),
    email: ' ',
    firstName: '',
    lastName: '',
    name: '',
  };
  return (
    <>
      <Paper className='contact__result' variant='outlined'>
        <div className='contact__bio'>
          <img
            src={`https://ui-avatars.com/api/?name=${data?.name}&bold=true`}
            className='contact__image'
            alt='Lawyer Dp'
          />
          <div className='contact__credentials'>
            <h4 className='Snippet'>{data.name}</h4>
            <p className='Snippet'>
              {data?.phone?.map((item) => `${item} | `)}
            </p>
            <p className='Snippet'>{data.firm_name}</p>
            <p className='Snippet'>{data.email}</p>
          </div>
        </div>

        <div
          className='home__headerLeft'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <PopupButton
            className='calendlyButton'
            style={{ margin: 10, width: '100%' }}
            pageSettings={overlalySettings}
            prefill={prefillData}
            text='Make Appointment'
            url={data.calendly_link}
          />
          <Button
            style={{ margin: 10, width: '100%' }}
            variant='contained'
            disableElevation
            color='info'
            onClick={() => {
              setLawyer(data);
              handleOpen();
            }}
          >
            send email
          </Button>
        </div>
      </Paper>
      <ContactModal open={open} handleClose={handleClose} lawyer={lawyer} />
    </>
  );
};

const ContactModal = ({ open, handleClose, lawyer }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [toEmail, setToEmail] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendData = async (payload) => {
    const result = await fetchFunctions.postData(
      endpoints.contact_legal,
      payload,
    );
    return result;
  };

  const clearForm = () => {
    setToEmail('');
    setFromEmail('');
    setMessage('');
  };

  const sendEmail = () => {
    setLoading(true);
    const payload = {
      to_email: toEmail,
      from_email: fromEmail,
      message,
    };

    sendData(payload);
    setLoading(false);
    clearForm();
    handleClose();
  };

  const cancelEmail = () => {
    handleClose();
    clearForm();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            style={{ marginBottom: 20 }}
          >
            Contact Lawyer
          </Typography>
          <div>
            <TextField
              id='outlined-multiline-flexible'
              label='From'
              fullWidth
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              style={{ marginBottom: 20 }}
            />
            <TextField
              id='outlined-multiline-flexible'
              label='To'
              fullWidth
              disabled
              value={lawyer?.email}
              onChange={(e) => setToEmail(e.target.value)}
              style={{ marginBottom: 20 }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <TextField
              id='standard-multiline-flexible'
              label='Message'
              multiline
              fullWidth
              rows={9}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant='standard'
            />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              color='error'
              variant='outlined'
              endIcon={<CancelOutlined />}
              onClick={cancelEmail}
            >
              Close
            </Button>
            {loading ? (
              <Button
                variant='contained'
                disabled
                endIcon={<Send />}
                onClick={sendEmail}
              >
                Sending
              </Button>
            ) : (
              <Button
                variant='contained'
                endIcon={<Send />}
                onClick={sendEmail}
              >
                Send
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ContactLegal;
