const base = `${process.env.REACT_APP_BACKEND_URL}`;
const endpoints = {
  contact_legal: `${base}/contact-legal`,
  get_legal_list: `${base}/get-legal`,
};

export default endpoints;
