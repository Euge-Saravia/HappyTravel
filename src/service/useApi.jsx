import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, method = "GET", body = null) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (method === "GET") {
          response = await axios.get(url);
        } else if (method === "POST") {
          response = await axios.post(url, body);
        } else {
          throw new Error(`Unsupported method: ${method}`);
        }
        const jsonData = await response.data;
        setData(jsonData);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, loading, error };
};
export default useApi;
