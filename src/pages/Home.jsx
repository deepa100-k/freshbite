import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedMeals from "../components/FeaturedMeals";
import SpecialOffer from "../components/SpecialOffer";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import DownloadApp from "../components/DownloadApp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedMeals />
      <SpecialOffer />
      <WhyChooseUs />
      <Testimonials />
      <DownloadApp />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;