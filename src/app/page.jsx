import {Button} from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import IntroCard from "@/components/IntroCard/IntroCard";


export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

//Links for Footer
const links = [
  {
    title: 'Home',
    url: '/home',
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

//WorkWidget component needed Array
const experiences = [

  {
    logo: 'ensign.png',
    organization: 'Ensign College',
    jobTitle: 'Software Engineer Student',
    startYear: 2023,
    endYear: null,
  },


];

//SkillsWidget component needed Array
const skills = [
  { name: 'HTML', proficiency: 60, icon: 'html5.png' },
  { name: 'CSS', proficiency: 50, icon: 'css3.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'javascript.png' },
];

//Project Cards needed Array
const articles = [
  {
    date: 'Nov 15, 2021',
    title: 'Everything you need to know about React',
    content:
      'The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.',
    link: 'https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea',
  },
  {
    date: 'Sep 2, 2020',
    title: 'The Missing Introduction to React',
    content:
      'React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.',
    link: 'https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76',
  },
];


export default function Home() {
  return (
    <div className="body">
      <header>
        <Navbar
          options={[
            {path: '/', label: 'Home'},
            {path: '/about', label: 'About'},
            {path: '/projects', label: 'Projects'},
            {path: '/uses', label: 'Uses'},
          ]}
        />
        <ThemeSwitcher />
      </header>
      <main>
        <div className="main-container">
          <section className="intro">
            <IntroCard
              name={'Software Engineer in the works '}
              logo={'profile.png'}
              content={'I am a college student pursuing a future in web development, driven by a passion for creating innovative and user-friendly digital experiences. My academic journey is focused on mastering the latest web technologies and honing my skills in front-end development. In addition to my dedication to technology, I have a deep appreciation for the great outdoors. Whether it\'s hiking, camping, or exploring new trails, I find inspiration and balance in nature. This blend of technical expertise and a love for outdoor adventures fuels my creativity and determination to excel in the dynamic field of web development.'}
            />
          </section>
          <section className="articles-widgets-container">
            <section className="articles-container">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            ))}
            </section>
            <section className="widgets-container">
              <SignupWidget
                title={'Stay up to date'}
                content={'Get notified when I publish something new, and unsubscribe at any time.'}
              />
              <WorkWidget
                title={'Work'}
                content={'My work experience.'}
                experiences={experiences}
              />
              <SkillsWidget
                title="My Skills"
                content="Here are my skills:"
                skills={skills}
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
