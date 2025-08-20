import axios from "axios";
import ProductCards from "./ProductCards";
import EcommerceHero from "./HeroEcommerce";
const Hero = () => {
  const handleApi = (req, res) => {
    const response = axios.get();
  };
  return (
    <section>
      <EcommerceHero />
      <div>
        <ProductCards />
      </div>
    </section>
  );
};

export default Hero;
