import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Cases } from './components/Cases'
import { About } from './components/About'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
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
  )
}

export default App
