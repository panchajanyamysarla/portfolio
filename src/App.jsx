/* eslint-disable react/prop-types */
import "./App.css";

import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-darkBg text-textLight">
        <Header toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>{" "}
    </ThemeProvider>
  );
};

const HEADERS = ["About", "Work", "Contact"];

const Header = ({ toggleSidebar, toggleTheme }) => {
  return (
    <header className="fixed w-full bg-darkBg text-textLight z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Avatar sx={{ bgcolor: deepOrange[500] }} onClick={toggleTheme}>
          PM
        </Avatar>
        <ul className="hidden md:flex space-x-8">
          {HEADERS.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-textMain hover:text-primary transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon */}
        <button
          onClick={toggleSidebar}
          className="block md:hidden text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed inset-0 bg-darkBg bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul className="space-y-8 text-center">
        {["About", "Work", "Contact"].map((item, idx) => (
          <li key={idx}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-textLight text-2xl hover:text-primary"
              onClick={toggleSidebar}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-darkBg"
    >
      <div className="text-center">
        <p className="text-primary text-lg mb-4">Hi, my name is</p>
        <h1 className="text-textLight text-4xl md:text-6xl font-bold">
          Panchajanya Mysarla.
        </h1>
        <h2 className="text-textMain text-2xl md:text-4xl mt-2">
          I build things for the web.
        </h2>
        <p className="text-textMain mt-4 max-w-lg mx-auto">
          I’m a software engineer specializing in building exceptional digital
          experiences.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-primary text-darkBg px-6 py-3 rounded-md hover:bg-opacity-80"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-lightBg py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-primary font-semibold mb-6">About Me</h2>
        <p className="text-textMain">
          Hello! I’m Panchajanya, a software engineer who enjoys building things
          that help people life better. I specialize in creating (and
          occasionally designing) exceptional websites, applications, and
          everything in between.
        </p>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { title: "Project One", description: "A cool project.", link: "#" },
    { title: "Project Two", description: "Another cool project.", link: "#" },
  ];

  return (
    <section id="work" className="bg-darkBg py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-primary font-semibold mb-6">My Work</h2>
        <ul>
          {projects.map((project, idx) => (
            <li key={idx} className="mb-6">
              <h3 className="text-textLight text-xl">{project.title}</h3>
              <p className="text-textMain">{project.description}</p>
              <a href={project.link} className="text-primary hover:underline">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-lightBg py-16 text-center">
      <h2 className="text-3xl text-primary font-semibold mb-6">Get In Touch</h2>
      <a
        href="mailto:reachpanchajanya@gmail.com"
        className="mt-8 inline-block bg-primary text-darkBg px-6 py-3 rounded-md hover:bg-opacity-80"
      >
        Say Hello
      </a>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-darkBg py-4 text-center text-textMain">
      <p>&copy; 2025 Panchajanya Mysarla. Built with React</p>
    </footer>
  );
};

export default App;
