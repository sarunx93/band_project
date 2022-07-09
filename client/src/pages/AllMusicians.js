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
    <div>
      <h1>See your bandmates here</h1>
      {finalPositionOptions.map((pos, index) => {
        return (
          <button type="button" key={index} onClick={handleChange}>
            {pos}
          </button>
        );
      })}
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
    </div>
  );
};

const MusicianContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;
export default AllMusicians;
