import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/pagination/Pagination";
import HomePage from "../components/views/HomePage";
import { API_GET_TRAVELS } from "../config/url";

import { useAuth } from "../context/auth/authContext";

const fetchTravels = async (token, page, size) => {
  let headers = undefined;

  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }

  const { data } = await axios.get(API_GET_TRAVELS, {
    params: { page, size },
    headers,
  });
  return data;
};

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(8);
  const { token } = useAuth();

  const { data, isLoading, isError } = useQuery(
    ["travels", currentPage],
    () => fetchTravels(token, currentPage, pageSize),
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
