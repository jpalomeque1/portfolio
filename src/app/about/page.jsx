import { Button } from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AboutMe from "@/components/AboutMe/AboutMe";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import MenuLink from "@/components/MenuLink/MenuLink";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
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

const socialLinks = [
  {
    name: "X",
    link: "#",
    imageSrc: "x.png",
  },
  {
    name: "Github",
    link: "#",
    imageSrc: "github.png",
  },
  {
    name: "Linkedin",
    link: "#",
    imageSrc: "linkedIn.png",
  },
];

export default function About() {
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
          <section className="left-right-container">
            <section className="left-container">
              <AboutMe
                name={
                  'I\'m a college student aiming to become a web developer, passionate about technology and outdoor activities'
                }
                content1={
                  "As a college student pursuing a career in web development, my passion for technology is matched by my enthusiasm for outdoor activities. This blend of interests fuels my drive to excel in the tech industry while maintaining a balanced lifestyle.\n" +
                  "\n"
                }
                content2={
                  "Transitioning from a focus on psychology to software engineering has been a significant shift, but I am confident it will be rewarding. This major change reflects my commitment to embracing new challenges and pursuing a field that aligns with my passion for technology."
                }
                content3={
                  "Taking an intro to web development class transformed my approach to coding. I gained essential skills in HTML, CSS, and JavaScript, which have become indispensable in my daily projects. The class clarified the complexities of web design and development, enabling me to create responsive websites and resolve issues with greater confidence."
                }
                content4={
                  "Using an Apple Mac Pro with tools like Visual Studio Code, IntelliJ IDEA, and WebStorm boosts my coding efficiency and enhances my skills in computer science through seamless integration and powerful performance."
                }
              />
            </section>
            <section className="right-image-container">
              <div className="image-container">
                <img src="me.png" alt="about" />
              </div>
            </section>
            <section className="right-socials-container">
              <SocialLinks socialLinks={socialLinks} />
              <MenuLink
                email="jup017@ensign.edu"
                imageSrc="email.png"
                link="#"
              />
            </section>
          </section>
        </div>
      </main>
      <footer>
        <Footer links={links} />
      </footer>
    </div>
  );
}
