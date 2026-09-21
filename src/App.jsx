import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactFooter />
    </>
  );
}

export default App;
