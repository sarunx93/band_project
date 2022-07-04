import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusicians } from "../features/musician/musicianSlice";
import { addMembers } from "../features/band/bandSlice";
const AllMusicians = () => {
  const { musicians } = useSelector((store) => store.musician);
  const dispatch = useDispatch();

  const addToMembers = (mem) => {
    console.log(mem);
    dispatch(addMembers(mem));
  };
  useEffect(() => {
    dispatch(getAllMusicians());
  }, []);

  return (
    <div>
      <h1>See your bandmates here</h1>
      {musicians.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.name + " " + item.lastName}</h3>
            <button type="button" onClick={() => addToMembers(item)}>
              log details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllMusicians;
