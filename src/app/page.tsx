import Loader from "@/components/Loader"
import BackgroundFX from "@/components/BackgroundFX"
import Cursor from "@/components/Cursor"
import NavBar from "@/components/NavBar"
import Hero from "@/components/Hero"
import Work from "@/components/Work"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Certificates from "@/components/Certificates"
import Involvement from "@/components/Involvement"
import Footer from "@/components/Footer"
import SiteEffects from "@/components/SiteEffects"

export default function Home() {
  return (
    <>
      <Loader />
      <BackgroundFX />
      <Cursor />
      <NavBar />

      <main className="app" id="top">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Involvement />
        <Footer />
      </main>

      <SiteEffects />
    </>
  )
}
