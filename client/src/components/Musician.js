import React, { useState } from "react";
import { addMembers } from "../features/band/bandSlice";
import { useDispatch } from "react-redux";
const Musician = ({ fullName, item }) => {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const addToMembers = (mem) => {
    setAdded(true);
    dispatch(addMembers(mem));
  };
  return (
    <div>
      <h3>{fullName}</h3>
      <button type="button" onClick={() => addToMembers(item)} disabled={added}>
        {added ? "Added" : "Add"}
      </button>
    </div>
  );
};

export default Musician;
