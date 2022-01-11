import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchPage.css';
import Recaptcha from 'react-recaptcha';
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  Paper,
  Skeleton,
  Alert,
  CircularProgress,
  Pagination,
} from '@mui/material';
import SearchInPage from '../components/SearchInPage';
import { PopupButton } from 'react-calendly';
import { useHistory } from 'react-router-dom';
import { Send, CancelOutlined } from '@mui/icons-material';
import * as contactActions from '../redux/actions/contactLegal';

const ContactLegal = () => {
  const dispatch = useDispatch();
  const { data, loading, success } = useSelector((state) => state.contactLegal);

  const history = useHistory();
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  useEffect(() => {
    dispatch(contactActions.getLegal());
  }, []);

  // Pagination control
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 2;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Generate pagination numbers
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data?.length / ITEMS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='searchPage'>
      <SearchInPage history={history} />

      <div className='searchPage__results'>
        <div className=''>
          <h3>Our registered legal support partners.</h3>
        </div>

        {loading && currentItems?.length === 0 ? (
          <div>
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        ) : currentItems?.length > 0 ? (
          currentItems.map((item) => (
            <ContactResult
              key={item._id}
              data={item}
              setLawyer={setSelectedLawyer}
              lawyer={selectedLawyer}
              dispatch={dispatch}
              loading={loading}
              success={success}
            />
          ))
        ) : (
          'No lawyers list.'
        )}

        {loading
          ? null
          : data?.length > 2 && (
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

const LoadingSkeleton = () => {
  return (
    <Paper className='contact__result' variant='outlined'>
      <Skeleton
        variant='circular'
        width={150}
        height={150}
        style={{ marginRight: '20px' }}
      />

      <Box sx={{ width: '80%' }}>
        <Skeleton
          animation='wave'
          height={20}
          width='50%'
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation='wave'
          height={20}
          width='80%'
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation='wave'
          height={20}
          width='80%'
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation='wave'
          height={20}
          width='80%'
          style={{ marginBottom: 6 }}
        />
      </Box>
    </Paper>
  );
};

const ContactResult = ({
  data,
  setLawyer,
  lawyer,
  dispatch,
  loading,
  success,
}) => {
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
            loading='lazy'
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
      <ContactModal
        open={open}
        handleClose={handleClose}
        lawyer={lawyer}
        dispatch={dispatch}
        loading={loading}
        success={success}
      />
    </>
  );
};

const ContactModal = ({
  open,
  handleClose,
  lawyer,
  dispatch,
  loading,
  success,
}) => {
  const { errorMessage } = useSelector((state) => state.contactLegal);
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

  const [showAlert, setShowAlert] = useState(false);
  const [sendEmailError, setError] = useState(false);

  useEffect(() => {
    setShowAlert(false);
    setError(false);
  }, []);
  console.log(sendEmailError);

  useEffect(() => {
    if (success?.message === 'Email submitted successfully') {
      setShowAlert(true);
      setError(false);
    } else if (errorMessage === 'Failed to send Email') {
      setShowAlert(true);
      setError(true);
    }
  }, [success, errorMessage]);

  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const recaptchaApiKey = `${process.env.REACT_APP_RECAPTCHA_API_KEY}`;

  const sendData = (payload) => {
    if (isVerified) {
      dispatch(contactActions.sendEmail(payload));
      setIsVerified(false);
    } else {
      window.alert('Please verify that your are a human.');
    }
  };

  const clearForm = () => {
    setFromEmail('');
    setMessage('');
    setEmailError(false);
    setMessageError(false);
  };

  const sendEmail = () => {
    let trimMessage = message.trim();
    if (!emailError && trimMessage.length > 0) {
      const payload = {
        to_email: lawyer?.email,
        from_email: fromEmail,
        message,
      };

      sendData(payload);

      clearForm();
    }

    // handleClose();
  };

  const recaptchaLoaded = () => {
    console.log('RECAPTCHA loaded successfully');
  };

  const verifyCallback = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

  const cancelEmail = () => {
    handleClose();
    setShowAlert(false);
    setError(false);
    clearForm();
  };

  const validateEmail = (mail) => {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setShowAlert(false);
          setError(false);
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {showAlert && (
            <Alert severity={sendEmailError ? 'error' : 'success'}>
              {sendEmailError
                ? 'Failed to send email. Try again later.'
                : 'Email sent successfully.'}
            </Alert>
          )}
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            style={{ marginBottom: 20 }}
          >
            {`Contact ${lawyer?.name}`}
          </Typography>
          <div>
            <TextField
              id='outlined-error-helper-text'
              label='From'
              type='email'
              error={emailError}
              helperText={
                emailError ? 'Please enter a valid email address' : ''
              }
              required
              fullWidth
              value={fromEmail}
              onChange={(e) => {
                setFromEmail(e.target.value);
                if (!validateEmail(e.target.value)) {
                  setEmailError(true);
                } else {
                  setEmailError(false);
                }
              }}
              style={{ marginBottom: 20 }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <TextField
              id='standard-multiline-flexible'
              label='Message'
              multiline
              error={messageError}
              helperText={messageError ? 'Please enter a message' : ''}
              required
              fullWidth
              rows={9}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (message.length < 0) {
                  setMessageError(true);
                } else {
                  setMessageError(false);
                }
              }}
              variant='standard'
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <Recaptcha
              sitekey={`${recaptchaApiKey}`}
              render='explicit'
              verifyCallback={verifyCallback}
              onloadCallback={recaptchaLoaded}
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

            <Button
              variant='contained'
              endIcon={loading ? '' : <Send />}
              startIcon={
                loading && <CircularProgress color='inherit' size={20} />
              }
              onClick={sendEmail}
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ContactLegal;
