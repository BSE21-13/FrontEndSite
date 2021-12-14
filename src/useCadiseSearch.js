import { useEffect, useState } from 'react';
// import API_KEY from './keys';

const useCadiseSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // fetch(`https://www.googleapis.com/customsearch/v1?q=${term}`)
      fetch(`http://localhost:5000/search?q=${term}`)
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useCadiseSearch;
