import Image from "next/image";
import About from "./components/About"
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <About />
      <Experience />
    </div>
  );
}
