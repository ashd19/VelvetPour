import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Cocktails />
        <Footer />
      </div>
    </>
  );
}

export default App;
