import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusicians } from "../features/musician/musicianSlice";
import Musician from "./Musician";
import PageBtnContainerMus from "./PageBtnContainerMus";
import styled from "styled-components";
import { setFilterValue } from "../features/musician/musicianSlice";
const MusicianContainer = () => {
  const { musicians, page, positionOptions, position } = useSelector(
    (store) => store.musician
  );
  const finalPositionOptions = ["all", ...positionOptions];
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilterValue({ name: "position", value: e.target.textContent }));
  };
  useEffect(() => {
    dispatch(getAllMusicians());
  }, [page, position]);

  return (
    <>
      <div>
        <h1>See your bandmates here</h1>
        <BtnContainer>
          {finalPositionOptions.map((pos, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={handleChange}
                className="btn filter-btn"
              >
                {pos}
              </button>
            );
          })}
        </BtnContainer>
        <Container>
          {musicians.map((item, index) => {
            return (
              <Musician
                fullName={item.name + " " + item.lastName}
                item={item}
                key={index}
              />
            );
          })}
        </Container>
      </div>
      <PageBtnContainerMus />
    </>
  );
};

const Container = styled.section`
  margin: 3rem auto;
  display: grid;
  place-items: center;
  width: var(--max-width);
  grid-template-columns: repeat(3, 1fr);
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;

  .filter-btn {
    margin-right: 0.5rem;
    background: white;
  }
  .filter-btn:hover {
    background: var(--primary-500);
  }
`;
export default MusicianContainer;
