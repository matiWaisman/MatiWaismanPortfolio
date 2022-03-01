import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Navigation from "./components/nav/navigation";
import Name from "./components/sections/name/name";
import About from "./components/sections/about/about";
import Skills from "./components/sections/skills/skills";
import Journey from "./components/sections/journey/journey";
import Projects from "./components/sections/projects/projects";
import SocialSidebar from "./components/socialSidebar/socialSidebar";
import Footer from "./components/footer/footer";
import { LanguageProvider } from "./context/languageContext";
import { DisableAnimationProvider } from "./context/disableAnimationContext";
import { RefsProvider } from "./context/refsContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Matías Waisman</title>
          <meta name="description" content="Matías Eliel Waisman portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <RefsProvider>
          <DisableAnimationProvider>
            <Navigation />
            <SocialSidebar />
            <Name />
            <About />
          </DisableAnimationProvider>
          <Skills />
          <Journey />
          <Projects />
          <Footer />
        </RefsProvider>
      </div>
    </LanguageProvider>
  );
}

export default App;
