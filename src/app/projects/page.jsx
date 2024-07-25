import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AboutMe from "@/components/AboutMe/AboutMe";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import React from "react";
import ProjectPageIntro from "@/components/ProjectPageIntro/ProjectPageIntro"; // Added React import

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

//Links for Footer
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

export default function Projects() {
  return (
    <div className="body">
      <header>
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
        <ThemeSwitcher />
      </header>
      <main>
        <div className="main-container">
          <section className="intro">
            <ProjectPageIntro
              name={"Projects Shaping My Future In CS"}
              content={
                "Taking an intro to web development class was a game-changer. It provided me with foundational skills in HTML, CSS, and JavaScript, which I now use daily in my projects. The class demystified web design and coding, empowering me to build responsive websites and troubleshoot issues effectively, boosting my confidence."
              }
            />
          </section>
          <section className="project-card-container">
              <ProjectCard
                logo="ensign.png"
                name="CS 220 Web Dev"
                content="Creating a profile page to show case skills learned "
                link="https://ensign.edu"
              />

          </section>
        </div>
      </main>
      <footer>
        <Footer links={links} />
      </footer>
    </div>
  );
}
