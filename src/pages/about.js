import { aboutText } from "../constants/data";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function about() {
  return (
    <Container>
      <Navbar />
      <div className="content">
        <img src="/images/about-us.jpg" alt="Group of 3` people" />
        <div className="text-content">
          <h1>
            About <span>eStore</span>
          </h1>
          {aboutText.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    img {
      max-width: 50%;
      object-fit: contain;
      @media (max-width: 768px) {
        padding: 0 2rem;
        width: 100%;
      }
      @media (max-width: 768px) {
        padding: 0 1rem;
        width: 100%;
      }
    }
    .text-content {
      margin: 0 5rem;
      width: 50%;
      @media (max-width: 1080px) {
        margin: 0 2rem;
      }
      @media (max-width: 768px) {
        padding: 0 5rem;
        width: 100%;
      }
      @media (max-width: 540px) {
        padding: 0 2rem;
        width: 100%;
      }
    }
    h1 {
      margin: 2rem 0;
      font-size: 2rem;
      span {
        color: rebeccapurple;
      }
    }
    p {
      font-size: 0.9rem;
      margin-top: 2rem;
      width: 100%;
    }
  }
`;
