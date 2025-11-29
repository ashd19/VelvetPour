import React from "react";

function Hero() {
  return (
    <>
      <section className="relative  inset-0 size-full bg-[url('/images/noise.png')] relative z-10 min-h-dvh w-full  border border-transparent ">
        <h1 className="md:mt-32 mt-40 md:text-[20vw] text-8xl leading-none font-modern-negra text-center ">
          MOJITO
        </h1>
        <img
          src="/images/hero-left-leaf.png"
          alt=""
          className="absolute left-0 -bottom-20 md:bottom-0 md:w-fit w-1/3 md:top-20 "
        />
      </section>
    </>
  );
}

export default Hero;
