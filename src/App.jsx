import './App.css';
import Header from "./components/header";
import HomeSection from "./components/sections/home-section";
import ServicesSection from "./components/sections/services-section";
import ProjectsSection from "./components/sections/projects-section";
import FaqSection from "./components/sections/faq-section";
import ContactSection from "./components/sections/contact-section";
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <Header />

      <HomeSection />
      <ServicesSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />

      <Footer />
    </div>
  )
}

export default App
