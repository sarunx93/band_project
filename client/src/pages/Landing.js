import React from "react";
import mainImg from "../assets/image/main.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h1>Band Picker</h1>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Pick your bandmate</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            mollitia officiis, esse magnam nostrum numquam, dolores aut porro
            modi aperiam sequi, autem ipsum consequuntur necessitatibus culpa.
            A, mollitia provident nisi iure sint, ea cumque qui pariatur
            necessitatibus omnis sequi suscipit assumenda quisquam natus saepe
            optio maxime dolore possimus debitis sit.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img src={mainImg} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fuild-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
