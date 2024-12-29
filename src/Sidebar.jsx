/* eslint-disable react/prop-types */
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const MENU_ITEMS = ["About", "Work", "Contact"];

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer anchor="right" open={open} onClose={toggleSidebar}>
      <Box
        sx={{ width: 250 }}
        onClick={toggleSidebar}
        onKeyDown={toggleSidebar}
      >
        <List>
          {MENU_ITEMS.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href={`#${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
