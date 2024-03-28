import React from "react";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div className="m-[5px] h-full">
      <SearchBar />
      <Layout />
    </div>
  );
};

export default Home;
