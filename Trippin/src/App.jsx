import { useState } from "react";
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
