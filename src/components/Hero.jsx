import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";

function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const subtitleSplit = new SplitText(".title", { type: "lines " });
    heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))
  }, []);

  return (
    <>
      <section className="relative  inset-0 size-full bg-[url('/images/noise.png')] relative z-10 min-h-dvh w-full  border border-transparent ">
        <h1 className="title md:mt-32 mt-40 md:text-[20vw] text-8xl leading-none font-modern-negra text-center ">
          MOJITO
        </h1>
        <img
          src="/images/hero-left-leaf.png"
          alt=""
          className="absolute left-0 -bottom-20  md:w-fit w-1/3 md:top-20 md:bottom-auto "
        />
        <img
          src="/images/hero-right-leaf.png"
          alt=""
          className="absolute right-0  md:bottom-0 top-1/2 md:w-fit w-24"
        />
        <div className="body">
          <div className="flex  w-full gap-10 justify-between items-center mx-auto ">
            <div className="space-y-5  hidden md:block">
              <p className="text-left">Cool. Crisp. Classic.</p>
              <p className="subtitle text-left text-yellow text-5xl font-modern-negra">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className=" space-y-5 text-lg md:max-w-xs w-full">
              <p className="subtitle text-left">
                Every cocktail on our menu is a blend of premium ingredients,{" "}
                <br />
                creative , flair , and timeless recipes <br />- designed to
                delight your senses.
              </p>
              <a href="#cocktails" className="font-bold">
                View Cocktails
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
