import { useState, useEffect } from 'react';

// Fetch data
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      console.log('Données récupérées :', json);
      if (response.ok) {
        setData(json);
        setLoading(false);
      } else {
        setError(true);
        console.log('pas de données récupérées');
      }
    };

    fetchData();
  }, [url]);
  return { isLoading, data, error };
}
