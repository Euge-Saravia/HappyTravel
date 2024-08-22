import { useState, useEffect } from "react";
import axios from "axios";
const useApi = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/travels");
        const jsonData = await response.data;
        setData(jsonData);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    getData();
  }, []);
  return data;
};
export default useApi;
