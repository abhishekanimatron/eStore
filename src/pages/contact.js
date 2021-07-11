import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function contact() {
  return (
    <Container>
      <Navbar />
      <h1>
        Contact <span>Us</span>
      </h1>
      <div className="contact-options">
        <div className="contact-card">
          <h2>Repair & Warranty</h2>
          <p>Book, track or maybe even avoid a repair</p>
          <button>Repair & Warranty</button>
        </div>
        <div className="contact-card">
          <h2>Support Community</h2>
          <p>A place where you can find solutions and ask questions</p>
          <button>Support Community</button>
        </div>
      </div>
      <h1>Contact Form</h1>
      <div className="form-container">
        <p>
          If you haven't found the information you're looking for, please
          complete the form below. One of our customer consultants will get back
          to you as soon as possible.
        </p>
        <form>
          <input type="text" id="name" placeholder="Name" required />
          <input type="email" id="email" placeholder="Email Address" required />
          <textarea
            id="message"
            cols="50"
            rows="3"
            placeholder="Message"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  h1 {
    margin: 2rem 0;
    font-size: 2rem;
    span {
      color: rebeccapurple;
    }
  }
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;

  cursor: default;
  flex-direction: column;
  .contact-options {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .contact-card {
      background-color: #e8f3ff;
      padding: 3rem 4rem;
      @media (max-width: 768px) {
        padding: 3rem 1rem;
        margin: 1rem 0;
      }
      width: 100%;
      margin: 2rem 1rem;
      p {
        margin-bottom: 0.6rem;
        font-size: 0.8rem;
        font-weight: normal;
      }
      h2 {
        font-size: 1.3rem;
        line-height: 1.2;
        margin: 1rem 0;
        font-weight: 300;
        @media (max-width: 768px) {
          width: 100%;
          font-size: 1.5rem;
          font-weight: normal;
        }
      }
      button {
        cursor: pointer;
        background-color: #5865f5;
        border: none;
        margin: 1rem 0;
        border-radius: 2px;
        padding: 0.7rem 0.2rem;
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
  }
  .form-container {
    p {
      font-size: 0.9rem;
      line-height: 1.2;
    }
    background-color: #e8f3ff;
    margin: 2rem 27rem;
    @media (max-width: 768px) {
      margin: 2rem 1rem;
    }
    padding: 2rem;
    form {
      display: flex;
      flex-direction: column;
      input {
        border: 1px solid gray;
        border-radius: 4px;
        margin-top: 2rem;
        width: 50%;
        padding: 0.5rem 0.3rem;
      }
      textarea {
        border: 1px solid gray;
        border-radius: 2px;
        margin: 2rem 0;
        resize: none;
        padding: 0.5rem 0.3rem;
      }
      button {
        border: none;
        cursor: pointer;
        border-radius: 4px;
        padding: 1rem 0.5rem;
        background-color: #4a68ff;
        color: #ffffff;
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
  }
`;
