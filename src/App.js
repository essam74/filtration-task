import "./App.css";
import About from "./components/About/About.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/OurServices/Services.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";

function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
