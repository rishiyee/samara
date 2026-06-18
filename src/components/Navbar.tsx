import Button from "./Button";

const menuItems = [
  { label: "Backyards", href: "#" },
  { label: "Models", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Showrooms", href: "#" },
  { label: "Multi-family", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center bg-transparent px-6 py-6">
      {/* Left: logo */}
      <div className="flex flex-none items-center justify-start">
        <a href="/" className="inline-flex items-center" aria-label="Samara home">
          <img src="/Logo.svg" alt="Samara" className="h-5 w-auto invert" />
        </a>
      </div>

      {/* Center: navigation menus */}
      <ul className="flex flex-1 items-center justify-center gap-6 px-[18px] py-[12px]">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-base text-white/80 transition-colors hover:text-white/100"
            >
              {item.label}
            </a>
          </li>
        ))}

        {/* Two-line trigger menu (content to be added later) */}
        <li>
          <button
            type="button"
            aria-label="Open menu"
            className="group flex flex-col justify-center gap-[5px]"
          >
            <span className="block h-0.5 w-[22px] bg-white/80 transition-colors group-hover:bg-white/100" />
            <span className="block h-0.5 w-[22px] bg-white/80 transition-colors group-hover:bg-white/100" />
          </button>
        </li>
      </ul>

      {/* Right: button */}
      <div className="flex flex-none items-center justify-end">
        <Button>Design Yours</Button>
      </div>
    </nav>
  );
}
