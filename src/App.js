import { DesktopLibrary } from "./components/DesktopLibrary/DesktopLibrary";
import { EquipmentVisualSelection } from "./components/EquipmentVisualSelection/EquipmentVisualSelection";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { MainNavigation } from "./components/MainNavigation/MainNavigation";
import { MediaSlider } from "./components/MediaSlider/MediaSlider";
import { ProductNavigation } from "./components/ProductNavigation/ProductNavigation";
import React from "react";

function App() {
  return (
    <div className="App">
      <ProductNavigation />
      <MainNavigation />
      <Hero />
      <MediaSlider />
      <DesktopLibrary />
      <EquipmentVisualSelection />
      <Footer />
    </div>
  );
}

export default App;
