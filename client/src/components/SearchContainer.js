import styled from "styled-components";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/seeBands/seeBandsSlice";

const SearchContainer = () => {
  const { isLoading, search, genre, genreOptions, sort, sortOptions } =
    useSelector((store) => store.seeBands);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="genre"
            name="genre"
            value={genre}
            list={["all", ...genreOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="Sort by name"
            name="sort"
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />
          <button className="btn btn-block btn-danger" disabled={isLoading}>
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
`;

export default SearchContainer;
