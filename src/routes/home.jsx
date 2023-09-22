import { styled } from "styled-components";
import UPGRForm from "../components/upgr-form";

const Wrapper = styled.div`
  margin-top: 10vh;
  width: 80%;
  max-width: 480px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2vh;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>UPGR Form</Title>
      <UPGRForm />
    </Wrapper>
  );
}
