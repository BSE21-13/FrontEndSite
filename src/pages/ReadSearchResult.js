import React from "react";
import "./SearchPage.css";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link , useHistory} from "react-router-dom";
import * as dummy from "./DummyData";

import SearchIcon from "@material-ui/icons/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";
import { Button } from "@material-ui/core"
import HeaderButtonGroup from "../components/HeaderButtonGroup"

const ReadSearchResult = () => {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

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
            Article IV
          </div>
          
            <SearchResult data={'item'}/>
         
        </div>
      )}
    </div>
  );
}

const SearchResult = ({ data }) =>
{
  return (
    <div className="searchPage__result_1" >
              
              <a href='#' className="searchPage__resultTitle">
                <h2>{data.title}</h2>
              </a>
              <p className="Snippet">{dummy.data.text}</p>
          <p className="Snippet">{dummy.data.text}</p>
            </div>
  )
}


export default ReadSearchResult;
