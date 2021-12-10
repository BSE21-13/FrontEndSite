import React, { useState } from "react";
import "./SearchPage.css";
import Search from "../components/Search";

// import SearchIcon from "@material-ui/icons/Search";
import { Box, Button, Modal, Typography, TextField } from "@material-ui/core"
import HeaderButtonGroup from "../components/HeaderButtonGroup"

const ContactLegal = () => {
//   const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
    // const { data } = useGoogleSearch(term);
    

const term = true
  return (
    <div className="searchPage">
      <div className=" searchPage__headerTop">
      
        <h1>Query the Uganda Constitution</h1>
        <div className="home__headerMain">
        <HeaderButtonGroup />
      </div>
      </div>
      <div className="searchPage__headerTop">
       
        <div className="searchPage__headerSearch">
          <Search hideButtons />
        </div>
        <div className="home__headerMain">
        
      </div>
      </div>
     
      {term && (
        <div className="searchPage__results">
          <div className="">
            <h3>Our registered legal support partners.</h3>
                  </div>
                 
          
                  <ContactResult data={'item'} />
                  <ContactResult data={'item'}/>
                  <ContactResult data={'item'}/>
                  <ContactResult data={'item'}/>
         
        </div>
      )}
    </div>
  );
}


const ContactResult = () =>
{
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
    return (
      <>
    <div className="contact__result" >
          <div className='contact__bio'>
         
                <img
                      src={'https://ui-avatars.com/api/?background=random'}
                      className="contact__image"
                      alt="Lawyer Dp"
                    />
              <div className='contact__credentials'>
                  <h4 className="Snippet">Lawyer Name</h4>
                  <p className="Snippet">+256 56789987 | +256 56789987 | +256 56789987</p>
                  <p className="Snippet">Kamapla Advocates</p>
                  <p className="Snippet">kampalaadvocates@gmail.com</p>

              </div>

              
              </div>
              
         
              <div className="home__headerLeft">
          <Button variant="outlined" onClick={handleOpen}>
            
            send email
          </Button>
          
          </div>
          
            </div>
            <ContactModal open={open} handleClose={handleClose} />
            </>
  )
}

const ContactModal = ({open, handleClose}) => {
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
    
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <> 
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Contact Lawyer
    </Typography>
    <div>
    <TextField
          id="outlined-multiline-flexible"
          label="From"
          fullWidth
          
          value={value}
          onChange={handleChange}
        />
                        <TextField
          id="outlined-multiline-flexible"
          label="To"
          fullWidth
          
          value={value}
          onChange={handleChange}
        />
       
        
      </div>
     
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Message"
                            multiline
                            fullWidth
          rows={9}
          value={value}
          onChange={handleChange}
          variant="standard"
        />
        
       
                    </div>
                    <div>
                    <Button variant="outlined" >
            
            Cancel
          </Button>
                    <Button variant="outlined" >
            
            Send
          </Button>
                    </div>
  </Box>
</Modal>
      </>
    );
}
  



export default ContactLegal;
