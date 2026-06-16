import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      // Drive the parallax from page scroll so it's active immediately.
      setScrolled(window.scrollY);
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    // Normal-flow hero — scrolls away seamlessly while the layers parallax.
    <section
      ref={sectionRef}
      className="relative h-[110vh] w-full overflow-hidden bg-[#FAF5F9]"
    >
      {/* Back layer: sky — full-bleed on every screen, moves with the hero */}
      <img
        src="/hero-xl-10-sky-2880.webp"
        alt=""
        aria-hidden="true"
        className="absolute -top-[400px] left-0 z-0 h-[calc(100%+800px)] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${180 - scrolled * 0.3}px, 0)` }}
      />

      {/* Middle layer: title + copy — ungrouped, each positioned individually */}
      <img
        src="/hero-xl-10-title.svg"
        alt="Samara"
        width="760"
        height="302"
        className="hero-xl-10-title absolute left-1/2 top-[18%] z-10 -translate-x-1/2"
      />

      <p className="absolute left-[12vw] top-[18%] z-20 whitespace-pre-line text-[2vw]">
        {"Small living,\nsupersized."}
      </p>

      <p className="absolute right-[8%] top-[18%] z-10 whitespace-pre-line text-left text-[1.4vw]">
        {"Introducing Backyard XL 10:\nTwo bedrooms, two baths:\n950 square feet."}
      </p>

      {/* Front layer: transparent hero image — full-bleed, moves with the sky */}
      <img
        src="/hero.webp"
        alt="Samara backyard home"
        className="absolute -top-[400px] left-0 z-20 h-[calc(100%+800px)] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${180 - scrolled * 0.3}px, 0)` }}
      />
    </section>
  );
}
