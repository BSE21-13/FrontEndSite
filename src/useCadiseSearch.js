import { useEffect, useState } from 'react';
import * as fetchFunctions from './api/index';
import endpoints from './api/endpoints';

const useCadiseSearch = (term) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await fetchFunctions.getData(
        `${endpoints.search}?q=${term}`,
      );
      setData(result.data);
    };
    fetchData();
  }, [term]);
  return { data, loading };
};

export default useCadiseSearch;
