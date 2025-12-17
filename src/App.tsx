import { CardsContainer } from "./components/CardsContainer";
import { HeroSection } from "./components/HeroSection";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <HeroSection />
      <CardsContainer>
        <Card image="https://placehold.co/500x200" alt="imagem ai" href="https://google.com" />
        <Card image="https://placehold.co/500x200" alt="imagem ai" href="https://google.com" />
        <Card image="https://placehold.co/500x200" alt="imagem ai" href="https://google.com" />
        <Card image="https://placehold.co/500x200" alt="imagem ai" href="https://google.com" />
        <Card image="https://placehold.co/500x200" alt="imagem ai" href="https://google.com" />
       

      </CardsContainer>
    </>

  );
}


export default App;
