import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
const CreateBand = () => {
  const {
    isLoading,
    isEditing,
    name,
    members,
    genreDefault,
    genre,
    subGenre,
    editBandId,
  } = useSelector((store) => store.band);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !genre) {
      toast.error("Please provide name and genre");
      return;
    }
  };
  const handleBandInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit band" : "create band"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleBandInput}
          />

          <FormRow
            type="text"
            name="subGenre"
            value={subGenre}
            handleChange={handleBandInput}
          />
          <FormRowSelect
            name="genre"
            value={genreDefault}
            handleChange={handleBandInput}
            list={genre}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log("clear value")}
            >
              clear
            </button>
            <button
              type="button"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0rem;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;
export default CreateBand;
