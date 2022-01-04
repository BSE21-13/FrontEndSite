import * as searchTypes from '../types/search';

const initialState = {
  data: null,
  searchTerm: '',
  loading: false,
  error: false,
  errorMessage: null,
  success: {
    status: false,
    message: 'All set!',
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.SEARCH_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null,
      };
    case searchTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.term,
      };
    case searchTypes.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
    case searchTypes.SEARCH_ERROR:
      return {
        ...state,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
        loading: false,
      };

    case searchTypes.SEARCH_RESET:
      return {
        ...state,
        searchTerm: '',
        loading: false,
        error: false,
        errorMessage: null,
        success: {
          status: false,
          message: 'All set!',
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
