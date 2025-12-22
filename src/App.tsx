import { CardsContainer } from "./components/CardsContainer";
import { HeroSection } from "./components/HeroSection";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <HeroSection />
      <CardsContainer>
        <Card image="/images/banners/pixgg.png" alt="imagem ai" href="https://pixgg.com/marcosbarrocal" />
        <Card image="/images/banners/discord.png" alt="imagem ai" href="https://discord.gg/dDeJFDQ8zm" />
      </CardsContainer>
    </>

  );
}


export default App;
