import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { GrGroup } from "react-icons/gr";
import { FaGuitar, FaMoneyBillAlt } from "react-icons/fa";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="text-container">
          <h1 className="hero-text">Your</h1>
          <h1 className="hero-text music-journey">Music Journey</h1>
          <h1 className="hero-text">Starts</h1>
          <Link to="/dashboard/create-band" className="link">
            <h1 className="now-text">Now</h1>
          </Link>
        </div>
      </div>
      <h1 className="quality-text">What's good about us</h1>
      <section className="quality-container">
        <div className="quality">
          <GrGroup className="icon" />
          <h3>meet new friends</h3>
          <h3>from around the world</h3>
        </div>
        <div className="quality">
          <FaGuitar className="icon" />
          <h3>create your band</h3>
          <h3>in an instant</h3>
        </div>
        <div className="quality">
          <FaMoneyBillAlt className="icon" />
          <h3>$0</h3>
          <h3>completely free</h3>
        </div>
      </section>
      <Reviews />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://raw.githubusercontent.com/sarunx93/band_project/main/client/src/assets/image/hero_section.jpg")
        center/cover no-repeat;
  }

  .text-container {
    display: grid;
    place-items: center;
  }
  .hero-text {
    color: white;
    font-size: 5rem;
  }
  .now-text {
    color: yellow;
    font-size: 5.5rem;
    font-weight: 700;
  }
  .now-text:hover {
    color: #f12eab;
    transition: var(--transition);
  }
  .link {
    text-decoration: none;
    border: 2px solid yellow;
    padding: 1rem;
  }
  .link:hover {
    border: 2px solid #f12eab;
  }
  .icon {
    font-size: 5rem;
    margin-bottom: 1.25rem;
  }
  .quality-text {
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;
  }
  .quality-container {
    padding-top: 3rem;
    padding-bottom: 6rem;

    margin: 0 auto;
    width: 1200px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  .quality {
    text-align: center;
    height: 300px;
    width: 300px;
    background: var(--grey-50);
    padding: 2rem;
    transition: var(--transition);
    border-radius: 7.5%;
    @media (max-width: 992px) {
      margin-bottom: 1rem;
    }
  }
  .quality:hover {
    box-shadow: var(--shadow-4);
    transform: scale(1.05);
  }
  @media (max-width: 992px) {
    .music-journey {
      font-size: 4rem;
    }
  }
`;
export default Home;
