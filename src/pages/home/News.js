import styled from "styled-components/macro";
import { storeNews } from "../../constants/data";

export default function News() {
  return (
    <Container>
      <h1>eStore News</h1>
      <div className="cards-container">
        {storeNews.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <Button size="small" color="primary">
                Know More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin: 0 3rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
  .cards-container {
    display: grid;
    align-items: center;
    height: 100%;
    justify-content: center;
    grid-template-columns: auto auto auto;
    @media (max-width: 768px) {
      grid-template-columns: auto auto;
    }
  }
  h1 {
    font-size: 1.3rem;
    margin: 2rem 0;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid gray;
  }
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #ffffff;
  padding: 0;
  background-color: transparent;
  transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    font-weight: 200;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0;

  @media (max-width: 768px) {
    padding: 0 0.5rem 0;
    font-weight: 200;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  div {
    padding: 2rem;
    background-color: #001f40;
    h2 {
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 100;
      padding: 1rem 0;
      line-height: 1.2;
      text-transform: capitalize;
      @media (max-width: 992px) {
        font-size: 0.8rem;
      }
      @media (max-width: 768px) {
        font-size: 0.7rem;
        font-weight: 200;
      }
    }
  }
`;
