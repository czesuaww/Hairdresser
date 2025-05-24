import { useState, useRef, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Workstation from "./components/Workstation/Workstation.jsx";
import About from "./components/About/About.jsx";
import Chooselanding from "./components/Chooselanding/Chooselanding.jsx";
import Address from "./components/Address/Address.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Socials from "./components/Socials/Socials.jsx";
import MiniGallery from "./components/Minigallery/Minigallery.jsx";
import Offer from "./components/Offer/Offer.jsx";
import Opinions from "./components/Opinions/Opinions.jsx";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("default");
  const [hasInteracted, setHasInteracted] = useState(false);
  const chooseRef = useRef(null);

  useEffect(() => {
    if (hasInteracted && activeView !== "gallery") {
      chooseRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeView, hasInteracted]);

  const handleSetActiveView = (view) => {
    setHasInteracted(true);
    setActiveView(view);
  };

  return (
    <div className="App">
      {activeView !== "gallery" && (
        <>
          <Header />
          <Workstation />
          <About />
        </>
      )}

      <div ref={chooseRef}>
        <Chooselanding activeView={activeView} setActiveView={handleSetActiveView} />
      </div>

      {activeView === "gallery" && <MiniGallery />}
      {activeView === "offer" && <Offer />}
      {activeView === "opinions" && <Opinions />}
      {activeView !== "gallery" && <Socials />}
      {activeView !== "gallery" && <Address />}
      <Footer />
    </div>
  );
}

export default App;
