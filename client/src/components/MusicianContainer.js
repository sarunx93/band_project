import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusicians } from "../features/musician/musicianSlice";
import Musician from "./Musician";
import PageBtnContainerMus from "./PageBtnContainerMus";
const MusicianContainer = () => {
  const { musicians, page } = useSelector((store) => store.musician);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMusicians());
  }, [page]);

  return (
    <>
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
      <PageBtnContainerMus />
    </>
  );
};

export default MusicianContainer;
