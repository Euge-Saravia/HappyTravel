import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import HomePage from "../components/views/HomePage";
import { API_GET_TRAVELS } from "../config/url";

const token = localStorage.getItem("token");
const fetchTravels = async (page, size) => {
  console.log(localStorage.getItem("token"));
  const { data } = await axios.get(API_GET_TRAVELS, {
    params: { page, size },
    headers: { token },
  });
  return data;
};
const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(8);

  const { data, isLoading, isError } = useQuery(
    ["travels", currentPage],
    () => fetchTravels(currentPage, pageSize),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading travels</div>;

  const totalPages = data.totalPages;

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <HomePage travels={data.content} />
      <Pagination
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Home;
