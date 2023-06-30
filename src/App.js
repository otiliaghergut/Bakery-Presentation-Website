import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Cakes from "./pages/Cakes";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "./components/Footer/cookies/Cookies";
import Gdpr from "./components/Footer/gdpr/Gdpr";
import Termeni from "./components/Footer/termeni/Termeni";
import ContactForm from "./pages/ContactForm/ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route index element={<Home />} />{"landing page"}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cakes/:id" element={<Cakes />} />
          <Route path="/form" element={<ContactForm />} />
          {/* <Route path="/cakes/tematic" element={<Cakes />} /> */}
          <Route path="/privacy" element={<Termeni />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/gdpr" element={<Gdpr />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
