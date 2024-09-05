import { Collapsible } from "base-ui";
import MenuItem from "../components/MenuItem/MenuItem";
import MenuList from "../components/MenuList/MenuList";
import Ninja from "../components/Ninja";
import { useState } from "react";

function Menu() {
  const [isVisible, setVisibility] = useState(false);
  return (
    <>
      <p>Menu</p>
      <nav>
        <MenuList>
          <MenuItem to="/" label="Home" />
          <button onClick={() => setVisibility(!isVisible)}>Components</button>
          <Collapsible inProp={isVisible}>
            <MenuList>
              <MenuItem to="/components/buttons" label="Buttons" />
            </MenuList>
          </Collapsible>
          <MenuItem to="/about" label="About" />
        </MenuList>
      </nav>
      <Ninja></Ninja>
    </>
  );
}

export default Menu;
