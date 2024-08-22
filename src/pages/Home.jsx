import { API_GET_TRAVEL } from "../config/url";
import useApi from "../service/useApi";

const Home = () => {
  const Data = useApi();
  if (Data) {
    console.log(Data);
  }
  return <p>Home</p>;
};

export default Home;
