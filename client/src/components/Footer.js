import React from "react";
import styled from "styled-components";
import { FaAlignLeft, FaLinkedin, FaGithub } from "react-icons/fa";
const thisYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Wrapper>
      <h4 className="footer-text">Follow me on</h4>

      <ul className="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/sarun-p/"
            className="socials"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sarun-p/"
            className="socials"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className="copyright-text">
        ©{thisYear} built and designed by Sarun Pornaruntham
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  background: var(--grey-700);
  display: grid;
  place-items: center;
  padding-top: 1rem;
  .links-container,
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .links-container h3 {
    margin: 1rem 6rem;
  }
  .link-text,
  .socials {
    color: white;
  }
  .socials {
    font-size: 2rem;
    margin: 1rem 2rem;
  }
  .footer-text {
    text-align: center;
    font-family: var(--headingFont);
    font-size: 2rem;
    color: white;
  }
  .copyright-text {
    color: white;
    text-align: center;
  }
`;

export default Footer;
