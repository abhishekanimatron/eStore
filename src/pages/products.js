import { tvHome, audio, cam, videocam, incar, pro } from "../constants/data";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function products() {
  return (
    <Container>
      <Navbar />
      <Banner>
        <div className="text-content">
          <h1>All electronics</h1>
          <p>
            Whether you’re working, playing, creating or relaxing, Sony’s wide
            range of electronics combines innovative technology with sleek
            design.
          </p>
        </div>
        <img src="/images/electronics/elec.webp" alt="all-electronics" />
      </Banner>
      <Products>
        <CategoryContainer>
          <h2 className="category-title">Television & Home Cinema</h2>
          <div className="category-items">
            {tvHome.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} className="item-image" />
                <p className="item-title">{item.title}</p>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
            ))}
          </div>
        </CategoryContainer>
        <CategoryContainer>
          <h2 className="category-title">Audio</h2>
          <div className="category-items">
            {audio.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} className="item-image" />
                <p className="item-title">{item.title}</p>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
            ))}
          </div>
        </CategoryContainer>
        <CategoryContainer>
          <h2 className="category-title">Cameras</h2>
          <div className="category-items">
            {cam.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} className="item-image" />
                <p className="item-title">{item.title}</p>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
            ))}
          </div>
        </CategoryContainer>
        <CategoryContainer>
          <h2 className="category-title">Video Cameras</h2>
          <div className="category-items">
            {videocam.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} className="item-image" />
                <p className="item-title">{item.title}</p>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
            ))}
          </div>
        </CategoryContainer>
        <CategoryContainer>
          <h2 className="category-title">In Car</h2>
          <div className="category-items">
            {incar.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} className="item-image" />
                <p className="item-title">{item.title}</p>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
            ))}
          </div>
        </CategoryContainer>
        <CategoryContainer>
          <h2 className="category-title">
            Professional Products and Solutions
          </h2>
          <p className="category-subtitle">
            Tap into the power of 10+ years of engineering with our
            industry-leading professional products and solutions
          </p>
          <div className="category-items">
            {pro.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} className="item-image" />
                <p className="item-title">{item.title}</p>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
            ))}
          </div>
        </CategoryContainer>
      </Products>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  margin-top: 3rem;
`;

const Products = styled.div`
  margin: 0 5rem;
  @media (max-width: 992px) {
    margin: 0 3rem;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
  @media (max-width: 540px) {
    margin: 0 1rem;
  }
`;
const CategoryContainer = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    border: 0;
  }
  span {
    display: none;
    color: #0a9dff;
    position: absolute;
    right: 2rem;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .category-title {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    font-size: 1.7rem;
    margin: 3rem 0;
    font-weight: normal;
  }
  .category-subtitle {
    font-size: 0.8rem;
    font-weight: normal;
    width: 50%;
    line-height: 1.5;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }
  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: row;
      padding: 0;
      border-radius: 0;
      border-bottom: 1px solid gray;
    }
    align-items: center;
    padding: 1rem 0;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
    .item-image {
      width: 200px;
      @media (max-width: 768px) {
        width: 100px;
      }
    }
    &:hover {
      background-color: #d6ffe9;
    }
  }
  .category-items {
    display: grid;
    text-align: center;
    grid-template-columns: auto auto auto auto;
    @media (max-width: 992px) {
      grid-template-columns: auto auto auto;
    }
    @media (max-width: 768px) {
      grid-template-columns: auto;
    }
    .item-image {
      padding: 1rem;
    }
    .item-title {
      padding: 1rem;
      font-size: 0.8rem;
    }
  }
`;
const Banner = styled.div`
  position: relative;
  .text-content {
    position: absolute;
    color: #ffffff;
    margin-top: 5rem;
    margin-left: 5rem;
    @media (max-width: 992px) {
      margin-top: 1rem;
      margin-left: 3rem;
    }
    h1 {
      font-size: 2.2rem;
      font-weight: normal;
      margin: 1rem 0;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 0.8rem;
      width: 60%;
      line-height: 1.4;
      @media (max-width: 992px) {
        width: 100%;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  img {
    object-fit: cover;
    width: 100%;
    min-height: 45vh;
    @media (max-width: 992px) {
      min-height: 35vh;
    }
    @media (max-width: 768px) {
      min-height: 25vh;
    }
  }
`;
