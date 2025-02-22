import About from "./components/About"
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <About />
      <Experience />
      <Project />
      <Contact />

      <footer className="text-white/60 py-6 text-center">
          <p>Designed & Built by Bereket Girma</p>
      </footer>
    </div>
  );
}
