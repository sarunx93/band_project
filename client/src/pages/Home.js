import styled from "styled-components";

import React from "react";

const Home = () => {
  return (
    <Wrapper>
      <div className="hero-section">Home</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .hero-section {
    background: url("hero-section.jpg");
  }
`;
export default Home;
