import { useState, useEffect } from "react";
import data from "../assets/reviewData.json";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";

const Reviews = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  return (
    <Wrapper>
      <div className="title">
        <h1 className="title-text">Reviews</h1>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { name, img, reviews } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={personIndex} className={position}>
              <img src={img} className="person-img" />
              <h4 className="name">{name}</h4>
              <p className="text">{reviews}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <HiChevronDoubleLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <HiChevronDoubleRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title-text {
    font-weight: 700;
    text-align: center;
    margin-top: 1rem;
  }
  .text {
    margin: 0 auto;
    font-size: 1.2rem;
  }
  .name {
    font-size: 1.75rem;
  }
  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: black;

    display: grid;
    place-items: center;
    font-size: 3rem;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  .person-img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 175px;
    height: 175px;
    object-fit: cover;
    border: 5px solid var(--grey-100);
    box-shadow: var(--dark-shadow);
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.nextSlide {
    opacity: 1;
    transform: translateX(100%);
  }
  article.lastSlide {
    opacity: 1;
    transform: translateX(-100%);
  }
  @media (min-width: 992px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }
`;

export default Reviews;
