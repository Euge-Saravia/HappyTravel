import { API_GET_TRAVEL } from "../config/url";
import useApi from "../service/useApi";
import CardTravel from "../components/cards/CardTravel";
import Pagination from "../components/pagination/Pagination";

const Home = () => {
  return (
    <>
      <CardTravel />
      <Pagination />
    </>
    );
};

export default Home;
