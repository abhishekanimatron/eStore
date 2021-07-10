import styled from "styled-components/macro";
import Carousel from "nuka-carousel";

export default function CarouselView() {
  return (
    <Container>
      <h2>The latest</h2>
      <Carousel>
        <img src="/images/carousel/carousel-1.webp" alt="carousel" />
        <img src="/images/carousel/carousel-2.webp" alt="carousel" />
        <img src="/images/carousel/carousel-3.webp" alt="carousel" />
        <img src="/images/carousel/carousel-4.jfif" alt="carousel" />
        <img src="/images/carousel/carousel-5.webp" alt="carousel" />
        <img src="/images/carousel/carousel-6.webp" alt="carousel" />
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 5rem 4rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
  flex-direction: column;
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
