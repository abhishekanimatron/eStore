import styled from "styled-components/macro";
import Carousel from "nuka-carousel";

export default function Hot() {
  return (
    <div>
      <Container>
        <h1>What's hot</h1>
        <div className="grid">
          <div className="simple-box">
            <p> Best of Store</p>
          </div>
          <div className="product-card">
            <div className="image-holder">
              <img src="/images/hot/hot-box.webp" alt="hot-box" />
            </div>
            <p className="product-name">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
            <p className="product-model">Lo 117892</p>
            <p className="product-price">
              MRP <span className="price-value">Rs. 67,990</span>
            </p>
            <p className="taxes">(incl. of all taxes)</p>
          </div>
          <div className="product-card">
            <div className="image-holder">
              <img src="/images/hot/hot-speaker.webp" alt="hot-speaker" />
            </div>
            <p className="product-name">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
            <p className="product-model">Lo 117892</p>
            <p className="product-price">
              MRP <span className="price-value">Rs. 86,990</span>
            </p>
            <p className="taxes">(incl. of all taxes)</p>
          </div>
          <div className="product-card">
            <div className="image-holder">
              <img src="/images/hot/hot-cam.webp" alt="hot-camera" />
            </div>
            <p className="product-name">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
            <p className="product-model">Lo 117892</p>
            <p className="product-price">
              MRP <span className="price-value">Rs. 86,990</span>
            </p>
            <p className="taxes">(incl. of all taxes)</p>
          </div>
          <div className="product-card">
            <div className="image-holder">
              <img src="/images/hot/hot-ear.webp" alt="hot-earbud" />
            </div>
            <p className="product-name">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
            <p className="product-model">Lo 117892</p>
            <p className="product-price">
              MRP <span className="price-value">Rs. 86,990</span>
            </p>
            <p className="taxes">(incl. of all taxes)</p>
          </div>
          <div className="product-card ">
            <div className="image-holder">
              <img src="/images/hot/hot-blue.webp" alt="hot-tv" />
            </div>
            <p className="product-name">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
            <p className="product-model">Lo 117892</p>
            <p className="product-price">
              MRP <span className="price-value">Rs. 86,990</span>
            </p>
            <p className="taxes">(incl. of all taxes)</p>
          </div>
        </div>
        <div className="carousel">
          <Carousel>
            <img src="/images/hot/hot-box.webp" alt="hot-carousel" />
            <img src="/images/hot/hot-cam.webp" alt="hot-carousel" />
            <img src="/images/hot/hot-ear.webp" alt="hot-carousel" />
            <img src="/images/hot/hot-speaker.webp" alt="hot-carousel" />
            <img src="/images/hot/hot-blue.webp" alt="hot-carousel" />
          </Carousel>
        </div>
      </Container>
    </div>
  );
}
const Container = styled.div`
  margin: 5rem 3rem;
  @media (max-width: 768px) {
    margin: 5rem 1rem;
  }
  h1 {
    font-size: 1.2rem;
    margin: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid gray;
    @media (max-width: 768px) {
      margin: 1rem 0;
    }
  }
  .carousel {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    img {
      width: 100%;
      height: 30vh;
      object-fit: contain;
    }
  }
  .grid {
    @media (max-width: 768px) {
      display: none;
    }
    margin: 1rem 3rem;
    display: grid;
    grid-template-columns: auto auto auto;
    @media (max-width: 992px) {
      grid-template-columns: auto auto;
    }
    @media (max-width: 768px) {
      grid-template-columns: auto;
    }
    .product-card {
      width: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 0 1rem 1rem 1rem;
      .image-holder {
        cursor: pointer;
        background-color: #d9f5ff;
      }
      .product-name {
        cursor: pointer;
        padding-top: 1rem;
        font-size: 0.9rem;
      }
      .product-model {
        align-self: left;
        font-size: 0.7rem;
        color: #666666;
      }
      .product-price {
        padding-top: 1rem;
        font-size: 0.8rem;
        .price-value {
          font-size: 0.8rem;
          font-weight: 700;
        }
      }
      .taxes {
        padding-top: 0.5rem;
        font-size: 0.8rem;
        color: #666666;
      }
    }
    .simple-box {
      margin: 0 1rem 1rem 1rem;
      background-color: #007099;
      p {
        color: #eeeeee;
        font-size: 1.3rem;
        padding: 2rem;
        font-weight: 500;
      }
    }
  }
`;
