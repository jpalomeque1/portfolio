import React from 'react';
import { Button } from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AboutMe from "@/components/AboutMe/AboutMe";
import Usescard from "@/components/Usescard/Usescard";

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}

// Links for Footer
const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Uses',
    url: '/uses',
  },
];

export default function Uses() {
  return (
    <div className="body">
      <header>
        <Navbar
          options={[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/projects', label: 'Projects' },
            { path: '/uses', label: 'Uses' },
          ]}
        />
        <ThemeSwitcher />
      </header>
      <main>
        <div className="main-container">
          <section className="intro">
            <AboutMe
              name={'Software I use, gadgets I love, and other things I recommend.'}
              content4={'Using the Apple Mac Pro as my workstation has provided me with a sleek, powerful user experience, thanks to its seamless integration with the Apple ecosystem and top-tier security features. For development, Visual Studio Code offers versatility and performance, while IntelliJ IDEA and WebStorm by JetBrains provide advanced coding tools and smart debugging features, boosting productivity. Figma and Whimsical have revolutionized my design workflow, enabling real-time collaboration and streamlined processes. For productivity, Trello organizes projects visually, Slack and Microsoft Teams enhance team communication and integration, and Zoom facilitates effective virtual meetings. These tools collectively enhance my workflow, making complex tasks more manageable and fostering efficient collaboration.'}
            />
          </section>
          <section className="uses-container">
            <section className="tool-container">
              <div className="tool-text-container">
                Workstation
              </div>
              <div className="items-container">

                <Usescard
                  name="Apple Mac Pro"
                  content1="The MacBook Pro, running macOS, offers a sleek, powerful user experience with robust performance, seamless integration with Apple ecosystems, and top-tier security features."
                />
              </div>
            </section>
            <section className="tool-container">
              <div className="tool-text-container">
                Development tools
              </div>
              <div className="items-container">
                <Usescard
                  name="Visual Studio Code"
                  content1="A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS, and Linux."
                />
                <Usescard
                  name="IntelliJ"
                  content1="IntelliJ IDEA, an integrated development environment (IDE), offers powerful coding tools, intelligent code assistance, and seamless integration with various languages and frameworks for efficient software development."
                />
                <Usescard
                  name="Webstorm"
                  content1="WebStorm by JetBrains is a powerful IDE for JavaScript development, offering smart coding assistance, advanced debugging, and seamless integration with popular frameworks and tools."
                />
              </div>
            </section>
            <section className="tool-container">
              <div className="tool-text-container">
                Design
              </div>
              <div className="items-container">
                <Usescard
                  name="Figma"
                  content1="Figma is a collaborative design tool for UI/UX, offering real-time collaboration, vector editing, prototyping, and seamless integration with design systems for streamlined workflows."
                />
                <Usescard
                  name="Whimsical"
                  content1="Whimsical is a collaborative online tool for visual thinking, providing diagramming, wireframing, mind mapping, and project management features to enhance team productivity and creativity."
                />
              </div>
            </section>
            <section className="tool-container">
              <div className="tool-text-container">
                Productivity
              </div>
              <div className="items-container">
                <Usescard
                  name="Trello"
                  content1="A collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on, who's working on what, and where something is in a process."
                />
                <Usescard
                  name="Slack"
                  content1="A collaboration hub that connects your work to the people you work with. It integrates with the tools and services you need and centralizes your notifications, files, and data from 2,000+ other apps."
                />
                <Usescard
                  name="Microsoft Teams"
                  content1="Microsoft Teams is a collaboration platform offering chat, video conferencing, file sharing, and app integration, designed to enhance teamwork and productivity in organizations."
                />
                <Usescard
                  name="Zoom"
                  content1="A cloud-based video conferencing service you can use to virtually meet with others, either by video or audio-only or both, all while conducting live chats and it lets you record those sessions to view later."
                />
              </div>
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
