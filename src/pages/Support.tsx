import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SupportHero from "../components/Support/SupportHero";
import SupportImpact from "../components/Support/SupportImpact";
import ArchitecturalHighlights from "../components/Support/ArchitecturalHighlights";
import ProgressLog from "../components/Support/ProgressLog";
import DonationDetails from "../components/Support/DonationDetails";
import Footer from "../components/Footer/Footer";

const Support = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // Small delay lets the page finish rendering/laying out
        // before we scroll, so the offset lands correctly.
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <SupportHero />
      <SupportImpact />
      <ArchitecturalHighlights />
      <ProgressLog />
      <DonationDetails />
      <Footer />
    </>
  );
};

export default Support;