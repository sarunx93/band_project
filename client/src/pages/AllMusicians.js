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
      <div className="btn-container">
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
      </div>

      <div className="musician-container">
        {musicians.map((item, index) => {
          return (
            <CardMusician
              key={index}
              fullName={item.name + " " + item.lastName}
              position={item.position}
              location={item.location}
              addedFuntion={false}
            />
          );
        })}
      </div>

      {numOfPages > 1 && <PageBtnContainerMus />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://as2.ftcdn.net/v2/jpg/01/48/33/65/1000_F_148336519_QTPr8wfub4YNRZTAyAXsX9USGIjVxJWD.jpg")
      center/cover no-repeat;
  height: 100vh;
  padding: 2rem;

  .title-text {
    text-align: center;
    color: white;
  }
  .musician-container {
    margin: 3rem auto;
    display: grid;
    place-items: center;
    width: var(--max-width);
    grid-template-columns: repeat(3, 1fr);
  }

  .btn-container {
    display: flex;
    justify-content: center;
  }
  .filter-btn {
    margin-right: 0.5rem;
    background: white;
  }
  .filter-btn:hover {
    background: var(--grey-700);
    color: white;
  }

  @media (max-width: 992px) {
    height: 100%;
    .btn-container {
      flex-wrap: wrap;
    }
    .filter-btn {
      margin-bottom: 1rem;
    }
    .musician-container {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;

export default AllMusicians;
