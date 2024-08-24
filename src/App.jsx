import { InlineWidget, PopupWidget } from "react-calendly";
import "./App.css";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/PricingPlans";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#F2F5F8]">
      <Navbar />
      <Header />
      <Features />
      <Testimonials />
      <PricingPlans />
      <About />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
