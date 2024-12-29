/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";

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
        <div className="block md:hidden text-primary">
          <Fab onClick={toggleSidebar} size="small">
            <MenuIcon />
          </Fab>
        </div>
      </nav>
    </header>
  );
};

export default Header;
