import React, { useState, useEffect } from "react";
import { getAllMusicians } from "../features/musician/musicianSlice";
import { useSelector, useDispatch } from "react-redux";
const MemberSelect = () => {
  const { musicians } = useSelector((store) => store.musician);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMusicians());
  }, []);
  return (
    <div className="form-row">
      <label htmlFor="members" className="form-label">
        band members
      </label>
      <select name="members" id="members">
        {musicians.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item.name + " " + item.lastName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
// { value, handleChange }
export default MemberSelect;
