import { useState, type FormEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[rgb(247,247,240)] px-[3vw] pb-10 pt-20 text-black">
      <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.1fr)]">
        {/* Samara */}
        <nav aria-label="Samara">
          <h3 className="mb-6 text-4xl font-normal text-black/35">Samara</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-4xl  text-black transition-colors hover:text-black/50">
                News
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                Showrooms
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                For Developers
              </a>
            </li>
          </ul>
        </nav>

        {/* Backyard */}
        <nav aria-label="Backyard">
          <h3 className="mb-6 text-4xl font-normal text-black/35">Backyard</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                Models
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                Design yours
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                Financing
              </a>
            </li>
            <li>
              <a href="#" className="text-4xl text-black transition-colors hover:text-black/50">
                Local guides
              </a>
            </li>
          </ul>
        </nav>

        {/* Social */}
        <nav aria-label="Social">
          <h3 className="mb-6 text-4xl font-normal text-black/35">Social</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://www.instagram.com/samara"
                className="text-4xl text-black transition-colors hover:text-black/50"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@samara"
                className="text-4xl text-black transition-colors hover:text-black/50"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/samara"
                className="text-4xl text-black transition-colors hover:text-black/50"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>

        {/* Right column: contact + signup */}
        <div className="col-span-2 flex flex-col md:col-span-3 lg:col-span-1">
          <p className="text-sm text-black/50">Have questions?</p>
          <a
            href="#"
            className="mt-3 block rounded-md bg-brand py-3 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Contact us
          </a>

          <p className="mt-8 text-sm text-black/50">Get updates</p>
          {subscribed ? (
            <p className="mt-3 text-sm text-black/70">
              You've subscribed to Samara updates.
            </p>
          ) : (
            <>
              <p className="mt-1 text-sm text-black/40">
                Drop us your email to learn what's next.
              </p>
              <form onSubmit={handleSubmit} className="mt-3">
                <div className="flex items-center rounded-md bg-black/[0.06] focus-within:bg-black/[0.09]">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email"
                    className="w-full bg-transparent px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex-none px-4 text-lg text-black/40 transition-colors hover:text-black"
                  >
                    ›
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Footnote + legal, aligned to bottom of the column */}
          <div className="mt-auto pt-16">
            <p className="text-xs text-black/40">
              1 . "Net zero" may change for build sites with significant
              shading.
            </p>
            <ul className="mt-4 flex gap-6 text-sm text-black/70">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-12 text-sm text-black/40">© 2026 Samara Living Inc.</p>
    </footer>
  );
}
