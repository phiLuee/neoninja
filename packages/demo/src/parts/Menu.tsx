import MenuItem from "../components/MenuItem/MenuItem";
import MenuList from "../components/MenuList/MenuList";
import Ninja from "../components/Ninja";

function Menu() {
  return (
    <>
      <p>Menu</p>
      <nav>
        <MenuList>
          <MenuItem to="/" label="Home" />
          <MenuItem label="Components">
            <MenuList>
              <MenuItem to="/components/buttons" label="Buttons" />
            </MenuList>
          </MenuItem>
          <MenuItem to="/about" label="About" />
        </MenuList>
      </nav>
      <Ninja></Ninja>
    </>
  );
}

export default Menu;
