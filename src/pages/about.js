import styled from "styled-components";
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quisquam provident alias a quia quo quidem perferendis vitae
            officiis sapiente, architecto quas maiores magni dolorem saepe
            voluptates explicabo. Non corrupti ipsa natus quam. Veniam fugit
            velit optio illo nulla. Molestiae saepe, eveniet quos tempora eos
            maiores voluptatum velit magnam ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            repellat, dolorem atque excepturi voluptatum, modi quam voluptatibus
            earum sint dolorum rem illo ipsum perferendis laudantium accusantium
            dolores? Molestias reprehenderit dolorum harum consequuntur minima
            quibusdam temporibus in sunt necessitatibus exercitationem quas,
            tempore sequi repellat odit incidunt? Ipsam laboriosam, deserunt qui
            repellat eum assumenda. Explicabo impedit in excepturi id vel, sunt
            rerum ut ullam similique quasi, repudiandae alias corrupti ab nam
            voluptate? Cum, eligendi? Hic ab dignissimos atque. Quos ipsum fuga
            debitis autem itaque quod. Officia, qui deleniti? Est quam dolores
            optio officia, quia tempore iure, quis quos qui obcaecati aperiam
            reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim
            exercitationem quas modi, voluptas cupiditate quam iusto recusandae
            iste reiciendis!
          </p>
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
