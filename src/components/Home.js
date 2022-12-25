import React from "react";
import TextTransition, { presets } from "react-text-transition";
import mypic from "./mypic.jpg";
const TEXTS = ["Fullstack Developer", "YouTuber", "Freelancer"];

export default function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="home">
      {/* left */}
      <div className="left">
        <div className="left-container">
          <h1>Hii, I'm Tushar Soni.</h1>
          <h1 className="changing-text">
            <span>A</span>
            <TextTransition springConfig={presets.stiff}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </div>
      </div>
      {/* right */}
      <div className="right">
        <div className="image-container">
          <img id="dp" src={mypic} alt="" />
        </div>
      </div>
    </div>
  );
}
