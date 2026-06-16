import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="flex h-[300px] flex-col bg-black">
        <Navbar />
        <Banner />
      </header>
      <Home />
    </div>
  );
}
