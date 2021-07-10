import styled from "styled-components";
import Navbar from "./../../components/Navbar";
import CarouselView from "./CarouselView";
import Hot from "./Hot";
import News from "./News";
import Footer from "../../components/Footer";

export default function home() {
  return (
    <>
      <Container>
        <Navbar />
        <Banner>
          <img
            src="/images/banner.jpg"
            alt="banner"
            className="banner-mobile"
          />
          <div>
            <p>Presenting </p>
            <h1>World's first cognitive intelligence TV</h1>
            <p className="description">
              Complete immersion in an experience that thrills and moves you,
              and feels just like the world around us.
            </p>
            <button>Discover Product</button>
          </div>
          <img
            src="/images/banner.jpg"
            alt="banner"
            className="banner-desktop"
          />
        </Banner>
        <CarouselView />
        <Hot />
        <News />
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  cursor: default;
  flex-direction: column;
`;
const Banner = styled.div`
  margin-bottom: 1rem;
  .banner-desktop {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    height: 100%;
    min-height: 80vh;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .banner-mobile {
    width: 100%;
    min-height: 60vh;
    object-fit: cover;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  div {
    display: flex;
    margin-top: 10%;
    margin-left: 15%;
    position: absolute;
    flex-direction: column;
    color: #eeeeee;
    @media (max-width: 768px) {
      color: #111111;
      position: relative;
      margin-top: 1rem;
      margin-left: 5%;
    }
    p {
      margin-bottom: 0.6rem;
      font-size: 0.8rem;
      font-weight: bold;
    }
    h1 {
      width: 70%;
      font-size: 2rem;
      line-height: 1.2;
      font-weight: bold;
      @media (max-width: 768px) {
        width: 100%;
        font-size: 1.5rem;
        font-weight: normal;
      }
    }
    .description {
      width: 60%;
      font-weight: normal;
      line-height: 1.5;
      margin: 1.5rem 0;
      @media (max-width: 768px) {
        width: 90%;
      }
    }
    button {
      cursor: pointer;
      background-color: #5865f5;
      border: none;
      margin: 1rem 0;
      border-radius: 2px;
      padding: 0.7rem 0.8rem;
      width: 10rem;
      font-weight: light;
      transition: cubic-bezier(0.165, 0.84, 0.44, 1) background-color 0.3s;
      color: #eeeeee;
      @media (max-width: 768px) {
        margin: 0;
      }
      &:hover {
        background-color: #0090de;
      }
      &:focus {
        background-color: #0090de;
        outline: 3px solid #0090de;
        outline-offset: 2px;
      }
    }
  }
`;
