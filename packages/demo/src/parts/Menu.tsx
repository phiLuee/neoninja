import { ListItem, ListItemButton, MenuItem, MenuList } from "base-ui";
import Ninja from "../components/Ninja";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <>
      <MenuList>
        <ListItem className="p-2">
          <ListItemButton as={Link} to="/">
            Home
          </ListItemButton>
        </ListItem>
        <MenuItem className="p-2" label="Components">
          <MenuList>
            <ListItem>
              <ListItemButton as={Link} to="/components/buttons">
                Button
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton as={Link} to="/components/navbar">
                Navbar
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton as={Link} to="/components/lists">
                Lists
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton as={Link} to="/components/modals">
                Modals
              </ListItemButton>
            </ListItem>
          </MenuList>
        </MenuItem>
        <ListItem className="p-2">
          <ListItemButton as={Link} to="/about">
            About
          </ListItemButton>
        </ListItem>
      </MenuList>
      <Ninja></Ninja>
    </>
  );
};

export default Menu;
