import About from "./components/About"
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <About />
      <Experience />
      <Project />
    </div>
  );
}
