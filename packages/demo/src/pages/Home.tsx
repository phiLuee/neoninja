import { Button, ButtonBase } from "base-ui";
import Container from "../components/Container/Container";
import Ninja from "../components/Ninja";

import React from "react";

function Home(): React.ReactElement {
  return (
    <>
      <Container className="flex justify-between">
        <Container className="flex-1 ">
          <h1>Neoninja UI</h1>
          <Ninja></Ninja>
          <div>
            <Button>Button</Button>
            <Button as="RouterLink">Button as RouterLink</Button> <br></br>
            <ButtonBase>ButtonBase</ButtonBase> <br></br>
            <ButtonBase to="/">ButtonBase to</ButtonBase> <br></br>
            <ButtonBase as="RouterLink">ButtonBase as RouterLink</ButtonBase>
            <br></br>
            <ButtonBase href="/">ButtonBase as href</ButtonBase>
          </div>
        </Container>
        <Container className="flex-1 ">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Container>
      </Container>
    </>
  );
}

export default Home;
