import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header";
import ProductSlider from "./Components/Slider";
import { Parallax } from "react-parallax";
function App() {
  const bgImage = require("../src/Assets/img/hero-bg.jpeg");

  return (
    <Parallax bgImage={bgImage} strength={500}>
      <div className="Wrapper">
        <Header />
        <div className="Content">
          <HeroSection />
          <div className="ScrollContainer">
            <div className="ScrollContent">
              <ProductSlider />
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default App;
