import CitiesSection from "../components/CitiesSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

export default function MainPage() {
  return (
    <>
      <header id="header-section" className="header_section">
        <Navbar />
        <Banner />
      </header>
      <CitiesSection />
      <ContentSection />
      <Footer />
    </>
  );
}
