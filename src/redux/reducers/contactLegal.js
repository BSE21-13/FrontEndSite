import * as contactLegalTypes from '../types/contactLegal';

const initialState = {
  data: null,
  loading: false,
  error: false,
  errorMessage: null,
  success: {
    status: false,
    message: 'All set!',
  },
};

const contactLegalReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactLegalTypes.CONTACT_LEGAL_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null,
      };
    case contactLegalTypes.CONTACT_LEGAL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    case contactLegalTypes.CONTACT_LEGAL_ERROR:
      return {
        ...state,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
        loading: false,
      };
    case contactLegalTypes.GET_LEGAL:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case contactLegalTypes.CONTACT_LEGAL_RESET:
      return {
        ...state,
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

export default contactLegalReducer;
