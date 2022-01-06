import * as searchTypes from '../types/search';
import * as fetchFunctions from '../../api/index';
import searchEndpoints from '../endpoints/search';

export const sendQuery = (term) => async (dispatch, getState) => {
  dispatch({
    type: searchTypes.SEARCH_LOADING,
  });

  const result = await fetchFunctions.getData(
    `${searchEndpoints.search}?q=${term}`,
  );

  dispatch({
    type: searchTypes.SET_SEARCH_TERM,
    term: term,
  });

  if (result.success) {
    dispatch({
      type: searchTypes.SEARCH_SUCCESS,
      payload: result.data,
    });
  } else {
    dispatch({
      type: searchTypes.SEARCH_ERROR,
      payload: {
        error: true,
        errorMessage: result?.error,
      },
    });
  }
};
