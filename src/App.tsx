import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Cases } from "./components/Cases";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { DocumentMeta } from "./i18n/DocumentMeta";
import { languageFromPath } from "./i18n/language";
import "./App.css";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    function handlePopState() {
      const language = languageFromPath(window.location.pathname) ?? "ru";
      void i18n.changeLanguage(language);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [i18n]);

  return (
    <>
      <DocumentMeta />
      <Header />

      <main className="page">
        <Hero />
        <Services />
        <Process />
        <Cases />
        <About />
        <Cta />
      </main>

      <Footer />
    </>
  );
}

export default App;
