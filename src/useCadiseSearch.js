import { useEffect, useState } from 'react';

const useCadiseSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/search?q=${term}`)
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useCadiseSearch;
