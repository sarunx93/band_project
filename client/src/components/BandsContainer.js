import { useEffect } from "react";
import Band from "./Band";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getAllBands } from "../features/seeBands/seeBandsSlice";
import PageBtnContainer from "./PageBtnContainer";
const BandsContainer = () => {
  const {
    bands,
    isLoading,
    page,
    totalBands,
    numOfPages,
    search,
    genre,
    sort,
  } = useSelector((store) => store.seeBands);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBands());
  }, [page, search, genre, sort]);

  if (isLoading) {
    return (
      <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
    );
  }
  if (bands.length === 0) {
    return (
      <Wrapper>
        <h2>No bands to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalBands} band{totalBands > 1 && "s"} found
      </h5>
      <div className="bands">
        {bands.bands.map((band) => {
          return <Band key={band._id} {...band} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .bands {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .bands {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
export default BandsContainer;
