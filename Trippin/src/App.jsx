import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import Hero from "./components/custom/Hero";
import Header from "./components/custom/Header";
import Destination from "./components/custom/Destination";
import CustomerReviews from "./components/custom/CustomerReviews";
import Footer from "./components/custom/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/hero.jpg')]">
      <Header />
      <Hero />
      <Destination />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
