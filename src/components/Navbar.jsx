import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { navLinks } from "../../constants";``

gsap.registerPlugin(ScrollTrigger, SplitText);

function Navbar() {
  return (
    <nav className="bg-black/40">
      <div >
        <a href="#home" className="flex b items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
