import { CardsContainer } from "./components/CardsContainer";
import { HeroSection } from "./components/HeroSection";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <HeroSection />
      <CardsContainer>
        <Card image="/images/banners/sub.png" alt="Assinar mensalmente para vantagens exclusivas" href="https://livepix.gg/mrpumpking/little-pumpking" />
        <Card image="/images/banners/donate.png" alt="Enviar uma doação ao MrPumpKing" href="https://livepix.gg/mrpumpking" />
        <Card image="/images/banners/discord.png" alt="Entrar na comunidade Discord do MrPumpKing" href="https://discord.gg/dDeJFDQ8zm" />
      </CardsContainer>
    </>

  );
}


export default App;
