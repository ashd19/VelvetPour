import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div className="flex-center h-screen ">
        <Navbar />
      </div>
    </>
  );
}

export default App;
