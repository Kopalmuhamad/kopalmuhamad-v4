import About from "@/components/organisme/About";
import { Hero } from "@/components/organisme/Hero";
import Projects from "@/components/organisme/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Home