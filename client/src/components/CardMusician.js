import React from "react";
import styled from "styled-components";
const CardMusician = ({ fullName, position, location }) => {
  const isDrumPercussion = position === "Drums/Percussion";
  if (isDrumPercussion) {
    position = "Drums";
  }
  return (
    <Wrapper>
      <div className={`colour-${position}`}></div>
      <div className="info">
        <h5>{fullName}</h5>
        <p>{isDrumPercussion ? "Drums/Percussions" : position}</p>
        <p>{location}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 50px auto;
  height: 150px;
  margin-bottom: 0.5rem;
  border: 2px solid black;
  position: relative;
  width: 17rem;
  box-shadow: var(--shadow-2);
  background: white;
  .icon {
    background: blue;
  }
  .info {
    /* display: grid; */
    padding: 10px 0;
    margin-left: 1.5rem;
    width: 15rem;
  }
  .colour-Vocals {
    position: absolute;
    width: 13px;
    height: 100%;
    background: yellow;
  }
  .colour-Guitar {
    position: absolute;
    width: 13px;
    height: 100%;
    background: blue;
  }
  .colour-Bass {
    position: absolute;
    width: 13px;
    height: 100%;
    background: red;
  }
  .colour-Drums {
    position: absolute;
    width: 13px;
    height: 100%;
    background: #11ad5f;
  }
  .colour-Keyboard {
    position: absolute;
    width: 13px;
    height: 100%;
    background: pink;
  }
  .colour-Brass {
    position: absolute;
    width: 13px;
    height: 100%;
    background: gold;
  }
  .colour-Others {
    position: absolute;
    width: 13px;
    height: 100%;
    background: green;
  }
`;
export default CardMusician;
