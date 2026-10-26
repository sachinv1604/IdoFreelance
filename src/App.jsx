
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";

import GraphicDesigning from "./components/graphic-designing";
import Pricing from "./components/pricing";

import Contact from "./components/contact";
import Footer from "./components/footer";
import PrivacyPolicy from "./components/privacy-policy";
import Terms from "./components/terms";
import WebDevelopment from "./components/web-development";


function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#191816] selection:bg-[#4E6047]/25 selection:text-[#191816]">
      {view === 'home' ? (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <GraphicDesigning />
            <WebDevelopment />
            <Pricing />
            <Contact />
          </main>
          <Footer setView={setView} />
        </>
      ) : view === 'privacy' ? (
        <PrivacyPolicy onBack={() => setView('home')} />
      ) : (
        <Terms onBack={() => setView('home')} />
      )}
    </div>
  );
}

export default App;
