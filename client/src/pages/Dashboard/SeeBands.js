import React from "react";
import { getAllBands } from "../../features/band/bandSlice";
import SearchContainer from "../../components/SearchContainer";
import BandsContainer from "../../components/BandsContainer";

const SeeBands = () => {
  return (
    <>
      <SearchContainer />
      <BandsContainer />
    </>
  );
};

export default SeeBands;
