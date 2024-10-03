import { ListItem, ListItemButton, MenuItem, MenuList } from "base-ui";
import Ninja from "../components/Ninja";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <>
      <MenuList>
        <MenuItem className="p-2" to="/" label="Home" />
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
        <MenuItem className="p-2" to="/about" label="About" />
      </MenuList>
      <Ninja></Ninja>
    </>
  );
};

export default Menu;
