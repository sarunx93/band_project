import notFound from "../assets/image/not_found.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={notFound} />
        <h3>Page not found</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin-top: 3rem;
  }
  img {
    max-width: 600px;
    display: block;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
`;
export default Error;
