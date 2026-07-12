import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Playground from "@/components/playground/Playground";
import RankLab from "@/components/ranklab/RankLab";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <Playground />
            <RankLab />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <Contact />
        </main>
    );
}
