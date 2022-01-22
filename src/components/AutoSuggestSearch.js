import React from 'react';
import Autosuggest from 'react-autosuggest';
import * as fetchFunctions from '../api/index';
import { debounce } from 'throttle-debounce';

const ELASTIC_SEARCH = process.env.REACT_APP_ELASTIC_SEARCH_ENDPOINT;
const API_KEY = `${process.env.REACT_APP_ELASTIC_SEARCH_API_ENCODED}`;

class AutoComplete extends React.Component {
  state = {
    value: '',
    suggestions: [],
  };

  componentWillMount() {
    this.onSuggestionsFetchRequested = debounce(
      500,
      this.onSuggestionsFetchRequested,
    );
  }

  renderSuggestion = (suggestion) => {
    return (
      <div className='result'>
        <div>{suggestion.fullText}</div>
      </div>
    );
  };

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
    this.props.setInput(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    fetchFunctions
      .postData(
        `${ELASTIC_SEARCH}cadise_autosuggest_appp/queries/_search`,
        {
          query: {
            multi_match: {
              query: value,
              fields: ['fullText'],
            },
          },
          sort: ['_score'],
        },
        API_KEY,
      )
      .then((res) => {
        console.log('RESPONSE >>>', res);
        const results = res.response.hits.hits.map((h) => h._source);
        this.setState({ suggestions: results });
      });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Ask the constitution?',
      value,
      onChange: this.onChange,
    };

    return (
      <>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => suggestion.fullText}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </>
    );
  }
}

export default AutoComplete;
