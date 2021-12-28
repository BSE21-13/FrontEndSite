// const base = `${process.env.REACT_APP_BACKEND_URL}`;
const base = `http://localhost:8500/`;
const endpoints = {
  search: `${base}/search`,
  contact_legal: `${base}/contact-legal`,
  get_legal_list: `${base}/get_legal_list`,
};

export default endpoints;
