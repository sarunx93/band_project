import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusicians } from "../features/musician/musicianSlice";
import Musician from "./Musician";
const MusicianContainer = () => {
  const { musicians } = useSelector((store) => store.musician);

  const dispatch = useDispatch();
  const idArray = musicians.map((item) => item._id);

  useEffect(() => {
    dispatch(getAllMusicians());
  }, []);

  return (
    <div>
      <h1>See your bandmates here</h1>
      {musicians.map((item, index) => {
        return (
          <Musician
            fullName={item.name + " " + item.lastName}
            item={item}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MusicianContainer;
