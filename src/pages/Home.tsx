import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Objectives from "../components/Objectives/Objectives";
import About from "../components/About/About";
import ChairmanMessage from "../components/ChairmanMessage/ChairmanMessage";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ChairmanMessage />
      <Objectives />
      <About />
      
      <Footer />
    </>
  );
};

export default Home;