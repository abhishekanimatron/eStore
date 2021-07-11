import styled from "styled-components/macro";
import Carousel from "nuka-carousel";
import { carousel } from "../../constants/data";

export default function CarouselView() {
  return (
    <Container>
      <h2>The latest</h2>
      <Carousel>
        {carousel.map((item) => (
          <div className="carousel-item" key={item.id}>
            <img src={item.image} alt={item.title} key={item.id} />
            <div>
              <h3>{item.desc}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 4rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
  .carousel-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    div {
      margin: 1rem 1rem 2rem 1rem;
      h3 {
        text-transform: capitalize;
        font-size: 1.3rem;
        @media (max-width: 992px) {
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
      }
    }
  }
  h2 {
    font-size: 1.2rem;
    margin: 1rem 0;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid gray;
  }
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 50vh;
    }
  }
`;
