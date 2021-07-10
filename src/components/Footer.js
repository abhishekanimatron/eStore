import styled from "styled-components/macro";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  return (
    <>
      <Social>
        <h4>@estore_online</h4>
        <h3>Find us here</h3>
        <div className="icons">
          <Link to={{ pathname: "https://facebook.com" }} target="_blank">
            <span id="facebook">
              <FacebookIcon style={{ fontSize: "3rem" }} />
            </span>
          </Link>
          <Link to={{ pathname: "https://instagram.com" }} target="_blank">
            <span id="instagram">
              <InstagramIcon style={{ fontSize: "3rem" }} />
            </span>
          </Link>
          <Link to={{ pathname: "https://twitter.com" }} target="_blank">
            <span id="twitter">
              <TwitterIcon style={{ fontSize: "3rem" }} />
            </span>
          </Link>
        </div>
      </Social>
      <Container>
        <p>© eStore 2021</p>
        <p>customer support</p>
        <p>about us</p>
        <p>contact us</p>
        <p>terms & conditions</p>
        <p>privacy policy</p>
      </Container>
    </>
  );
}

const Social = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  h4 {
    margin: 0.5rem 0;
  }
  h3 {
    font-size: 2.5rem;
    letter-spacing: -2px;
  }
  .icons {
    margin: 2rem 0;
    justify-content: space-evenly;
    display: flex;
    span {
      opacity: 0.5;
      transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &:hover {
        opacity: 1;
      }
    }
    #facebook {
      color: #4267b2;
    }
    #instagram {
      color: #cd486b;
    }
    #twitter {
      color: #1da1f2;
    }
  }
`;
const Container = styled.div`
  display: grid;
  padding: 2rem;
  background-color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
  p {
    cursor: pointer;
    letter-spacing: 1.5px;
    padding: 1rem 2rem;
    font-size: 0.7rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: light;
    transition: opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
      opacity: 0.7;
    }
  }
`;
