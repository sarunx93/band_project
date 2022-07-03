import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusicians } from "../features/musician/musicianSlice";

const AllMusicians = () => {
  const { musicians } = useSelector((store) => store.musician);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMusicians());
  }, []);
  console.log(musicians);
  return <div>AllMusicians</div>;
};

export default AllMusicians;
