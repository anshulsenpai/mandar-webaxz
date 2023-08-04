import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";
import { ContactUs } from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen h-full w-full bg-black">
      <Header />
      <Hero />
      <Services />
      <About />
      <ContactUs />
    </div>
  );
};

export default App;
