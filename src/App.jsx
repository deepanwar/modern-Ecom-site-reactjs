import Hero from "./pages/Hero";
import Collections from "./pages/Collections";
import Features from "./pages/Features";
import FindOut from "./pages/FindOut";
import Footer from "./pages/Footer";
import Subscribe from "./pages/Subscribe";
import Trending from "./pages/Trending";
import NewProducts from "./pages/NewProducts";

import Header from "./components/Header";
import Card from "./components/Card";
import HeaderDrop from "./components/HeaderDrop";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  function handleNav() {
    setOpen(!open);
  }
  return (
    <div className="bg-[#E4E1DE] overflow-hidden">
      <Header headerOpen={open} handleNav={handleNav} />
      {open && <HeaderDrop />}
      <Hero />
      <Collections />
      <NewProducts />
      <FindOut />
      <Trending />
      <Features />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}

export default App;
