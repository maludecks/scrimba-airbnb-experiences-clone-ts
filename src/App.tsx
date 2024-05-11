import "./App.css";
import { Card, CardProps } from "./components/card";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { cards } from "../data";

function App() {
  return (
    <>
      <Navbar />

      <main className="content-container">
        <Hero />
        <div className="card--container">
          {cards.map((card: CardProps) => (
            <Card key={card.id} item={card} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
