import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import "./Search.css";


const HeaderButtonGroup = () =>
{
  const history = useHistory()
    return (
        <div className="home__header">
          <div className=" search__buttons" style={{marginTop:'0px'}}>
          <Button variant="outlined" onClick={()=> history.push('/browse')}>
            
            BROWSE THE CONSTITUTION
          </Button>
          
            </div>
            <div className="search__buttons" style={{marginTop:'0px'}}>
          <Button variant="outlined" onClick={()=> history.push('/contact-legal')}>
            
            GET A LAWYER
          </Button>
          
          </div>
          <div className="home__header">
          <div className="search__buttons" style={{marginTop:'0px'}}>
          <Button variant="outlined" onClick={()=> history.push('/help')}>
            
            HELP
          </Button>
          
            </div>
            
        </div>
        </div> 
    )
}

export default HeaderButtonGroup
