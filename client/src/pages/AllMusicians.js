import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusicians } from "../features/musician/musicianSlice";
import styled from "styled-components";
import PageBtnContainerMus from "../components/PageBtnContainerMus";
import { setFilterValue } from "../features/musician/musicianSlice";
import CardMusician from "../components/CardMusician";
const AllMusicians = () => {
  const { musicians, positionOptions, page, position, location, numOfPages } =
    useSelector((store) => store.musician);

  const dispatch = useDispatch();
  const finalPositionOptions = ["all", ...positionOptions];
  const handleChange = (e) => {
    dispatch(setFilterValue({ name: "position", value: e.target.textContent }));
  };
  useEffect(() => {
    dispatch(getAllMusicians());
  }, [page, position, location]);

  return (
    <Wrapper>
      <h1 className="title-text">See your bandmates here</h1>
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

      <MusicianContainer>
        {musicians.map((item, index) => {
          return (
            <CardMusician
              key={index}
              fullName={item.name + " " + item.lastName}
              position={item.position}
              location={item.location}
            />
          );
        })}
      </MusicianContainer>

      {numOfPages > 1 && <PageBtnContainerMus />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: url("https://as2.ftcdn.net/v2/jpg/01/48/33/65/1000_F_148336519_QTPr8wfub4YNRZTAyAXsX9USGIjVxJWD.jpg");
  .title-text {
    text-align: center;

    margin-bottom: 2rem;
  }
`;

const MusicianContainer = styled.div`
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
  }
  .filter-btn:hover {
    color: white;
  }
`;
export default AllMusicians;
