import React from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div className="border border-black m-[20px]">
      <SearchBar />
      <Layout />
    </div>
  );
};

export default Home;
