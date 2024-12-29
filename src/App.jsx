/* eslint-disable react/prop-types */
import "./App.css";

import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? DARK_THEME : LIGHT_THEME,
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
        {isSidebarOpen && (
          <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <main>
          <Intro />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
