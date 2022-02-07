export let controller;
let signal;

export const getData = async (url = '', authToken) => {
  controller = new AbortController();
  signal = controller.signal;
  try {
    let response;
    let fetchHeaders = {};
    if (!authToken) {
      response = await fetch(url);
    } else {
      fetchHeaders.Authorization = `ApiKey ${authToken}`;
      response = await fetch(url, {
        headers: { ...fetchHeaders },
        signal,
      });
    }

    if (response.ok) {
      response = await response.json();
      return {
        data: response,
        success: true,
      };
    }
    response = await response.json();
    return { error: response.err, success: false };
  } catch (err) {
    return {
      error: err,
      success: false,
    };
  }
};

export const postData = async (url = '', data, authToken) => {
  controller = new AbortController();
  signal = controller.signal;
  try {
    let dataIsFormData = data instanceof FormData;
    let postObject;
    let fetchHeaders = {};

    if (!dataIsFormData) {
      postObject = JSON.stringify(data);
      fetchHeaders = {
        'Content-Type': 'application/json',
      };
    } else {
      postObject = data;
    }

    if (authToken) {
      fetchHeaders.Authorization = `ApiKey ${authToken}`;
    }

    let response = await fetch(url, {
      method: 'POST',
      headers: { ...fetchHeaders },
      body: postObject,
      signal,
    });

    if (response.ok) {
      if (!dataIsFormData) response = await response.json();
      return {
        response,
        success: true,
      };
    }
    response = await response?.json();
    return { error: response.err, success: false };
  } catch (err) {
    return {
      error: err,
      success: false,
    };
  }
};
