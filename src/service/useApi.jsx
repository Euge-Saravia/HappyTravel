import { useState, useEffect } from "react";
import axios from "axios";
const useApi = (url) => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const jsonData = await response.data;
        setData(jsonData);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    getData();
  }, [url]);
  return data;
};
export default useApi;
