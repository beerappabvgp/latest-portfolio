import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Landing } from "@/components/Landing";
import { Projects } from "@/components/Projects";



export default function Home() {
  return (
   <div className={`min-h-screen font-roboto`}>
      <Landing />
      <Experience />
      <Projects />
      <Footer />
   </div>
  );
}
