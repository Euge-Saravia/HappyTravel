import { API_GET_TRAVEL } from "../config/url";
import useApi from "../service/useApi";
import Pagination from "../components/pagination/Pagination";
import HomePage from "../components/views/HomePage";

const Home = () => {
  return (
    <>
      <HomePage />
      <Pagination />
    </>
  );
};

export default Home;
