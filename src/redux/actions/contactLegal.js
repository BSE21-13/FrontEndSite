import * as contactLegalTypes from '../types/contactLegal';
import * as fetchFunctions from '../../api/index';
import contactLegalEndpoints from '../endpoints/contactLegal';

export const getLegal = () => async (dispatch, getState) => {
  dispatch({
    type: contactLegalTypes.CONTACT_LEGAL_LOADING,
  });

  const result = await fetchFunctions.getData(
    contactLegalEndpoints.get_legal_list,
  );
  if (result.success) {
    dispatch({
      type: contactLegalTypes.GET_LEGAL,
      payload: result.data,
    });
  } else {
    dispatch({
      type: contactLegalTypes.CONTACT_LEGAL_ERROR,
      payload: {
        error: true,
        errorMessage: result?.error,
      },
    });
  }
};

export const sendEmail = (payload) => async (dispatch, getState) => {
  dispatch({
    type: contactLegalTypes.CONTACT_LEGAL_LOADING,
  });

  const result = await fetchFunctions.postData(
    contactLegalEndpoints.contact_legal,
    payload,
  );
  if (result.success) {
    dispatch({
      type: contactLegalTypes.CONTACT_LEGAL_SUCCESS,
      payload: {
        status: true,
        message: 'Email submitted successfully',
      },
    });
    dispatch({
      type: contactLegalTypes.CONTACT_LEGAL_RESET,
    });
  } else {
    dispatch({
      type: contactLegalTypes.CONTACT_LEGAL_ERROR,
      payload: {
        error: true,
        errorMessage: result?.error,
      },
    });
  }
};