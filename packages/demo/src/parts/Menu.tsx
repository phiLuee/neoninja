import { MenuItem, MenuList } from "base-ui";
import Ninja from "../components/Ninja";

const Menu: React.FC = () => {
  return (
    <>
      <MenuList>
        <MenuItem to="/" label="Home" />
        <MenuItem label="Components">
          <MenuList>
            <MenuItem to="/components/buttons" label="Button"></MenuItem>
            <MenuItem to="/components/navbar" label="Navbar"></MenuItem>
            <MenuItem to="/components/modals" label="Modals"></MenuItem>
            <MenuItem label="Sub">
              <MenuList>
                <MenuItem label="ListItem"></MenuItem>
              </MenuList>
            </MenuItem>
          </MenuList>
        </MenuItem>
        <MenuItem to="/about" label="About" />
      </MenuList>
      <Ninja></Ninja>
    </>
  );
};

export default Menu;
