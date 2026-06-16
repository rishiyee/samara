// Small home image set inline within the headline text.
function InlineHome({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="mx-2 inline-block h-[0.72em] w-auto rounded-lg align-middle"
    />
  );
}

export default function Feature() {
  return (
    <section className="w-full bg-[rgb(247,247,240)] px-[12vw] py-32">
      <h2 className="whitespace-nowrap text-[6.5vw] font-normal leading-[0.96] tracking-[-0.04em]">
        Backyard <InlineHome src="/intro-studio-400.webp" alt="Backyard ADU" /> is
        the
        <br />
        super simple, smartly
        <br />
        customizable,{" "}
        <InlineHome src="/intro-twobed-800.webp" alt="Customizable ADU" /> all-new
        <br />
        ADU <InlineHome src="/intro-xl-800.webp" alt="All-new ADU" /> from Samara.
      </h2>

      <div className="mt-10 ">
        <p className="text-4xl leading-snug text-black">
          We handle everything, from installation to financing.
        </p>
        <p className="text-4xl leading-snug text-black/40">
          Available now in California.
        </p>

        <p className="mt-4 text-base text-black/40">
          Not in California?{" "}
          <a
            href="#"
            className="text-black/60 underline underline-offset-2 hover:text-black"
          >
            Tell us where to build next ›
          </a>
        </p>
      </div>
    </section>
  );
}
