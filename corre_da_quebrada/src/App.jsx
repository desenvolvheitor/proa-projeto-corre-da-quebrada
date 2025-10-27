import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import whatsappIcon from './assets/whatsapp.svg'

function App() {  
  return (
    <>
      <main>
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
      <a 
        href="https://wa.me/5511993288288" 
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="Fale Conosco pelo WhatsApp" />
      </a>
    </>
  )
}

export default App