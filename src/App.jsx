import "./App.css";
import { useRef } from "react";
import Cast from "./components/Cast/Cast";
import Credits from "./components/Credits/Credits";
import DressCode from "./components/DressCode/DressCode";
import Hero from "./components/Hero/Hero";
import Place from "./components/Place/Place";
import RSVP from "./components/RSVP/RSVP";
import Time from "./components/Time/Time";

function App() {
  const castRef = useRef(null); // создаём реф для второй секции

  const scrollToCast = () => {
    castRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="app">
      <div className="section">
        <Hero onClickScroll={scrollToCast} />
      </div>
      <div className="section">
        <Cast ref={castRef} />
      </div>
      <div className="section">
        <Place />
      </div>
      <div className="section">
        <Time />
      </div>
      <div className="section">
        <DressCode />
      </div>
      <div className="section">
        <Credits />
      </div>
      <div className="section">
        <RSVP />
      </div>
    </div>
  );
}

export default App;
