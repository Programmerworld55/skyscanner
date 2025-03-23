import React from "react";
import Hero from "../usercomponents/hero";
import Navbar from "../usercomponents/navbar";
import CategoryButtons from "../usercomponents/categorybuttons";
import PromotionalSection from "../usercomponents/promotionalsection";
import FAQ from "../usercomponents/faq";
import InternationalSites from "../usercomponents/internationalsites";
import Footer from "../usercomponents/footer";
const Home = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <CategoryButtons/>
      <PromotionalSection />
      <FAQ/>
      <InternationalSites />
      <Footer/>

      
    </div>
  );
};

export default Home;
