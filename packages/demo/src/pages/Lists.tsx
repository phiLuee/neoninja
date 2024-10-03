import { Button, List, ListItem, ListItemButton } from "base-ui";
import Container from "../components/Container/Container";

function Lists(): React.ReactElement {
  return (
    <>
      <Container>
        <h1>Lists</h1>
        <Container className="flex">
          <Container>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
              <ListItem>Item 6</ListItem>
              <ListItem>Item 7</ListItem>
              <ListItem>Item 8</ListItem>
              <ListItem>Item 9</ListItem>
              <ListItem>Item 10</ListItem>
              <ListItem>Item 11</ListItem>
              <ListItem>Item 12</ListItem>
              <ListItem>Item 13</ListItem>
              <ListItem>Item 14</ListItem>
              <ListItem>Item 15</ListItem>
              <ListItem>Item 16</ListItem>
              <ListItem>Item 17</ListItem>
              <ListItem>Item 18</ListItem>
              <ListItem>Item 19</ListItem>
              <ListItem>Item 20</ListItem>
              <ListItem>Item 21</ListItem>
              <ListItem>Item 22</ListItem>
            </List>
          </Container>
          <Container>
            <List>
              <ListItem>
                <ListItemButton>Item 1</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 2</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 3</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 4</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 5</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 6</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 7</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 8</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 9</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 10</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 11</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 12</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Item 13</ListItemButton>
              </ListItem>
            </List>
          </Container>
        </Container>
        <Container>
          <List direction="horizontal">
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem>Item 5</ListItem>
            <ListItem>Item 6</ListItem>
            <ListItem>Item 7</ListItem>
            <ListItem>Item 8</ListItem>
            <ListItem>Item 9</ListItem>
            <ListItem>Item 10</ListItem>
            <ListItem>Item 11</ListItem>
            <ListItem>Item 12</ListItem>
            <ListItem>Item 13</ListItem>
            <ListItem>Item 14</ListItem>
            <ListItem>Item 15</ListItem>
            <ListItem>Item 16</ListItem>
            <ListItem>Item 17</ListItem>
            <ListItem>Item 18</ListItem>
            <ListItem>Item 19</ListItem>
            <ListItem>Item 20</ListItem>
            <ListItem>Item 21</ListItem>
            <ListItem>Item 22</ListItem>
          </List>
        </Container>
        <Container>
          <List as="ol" direction="horizontal" wrap={false}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem>Item 5</ListItem>
            <ListItem>Item 6</ListItem>
            <ListItem>Item 7</ListItem>
            <ListItem>Item 8</ListItem>
            <ListItem>Item 9</ListItem>
            <ListItem>Item 10</ListItem>
            <ListItem>Item 11</ListItem>
            <ListItem>Item 12</ListItem>
            <ListItem>Item 13</ListItem>
            <ListItem>Item 14</ListItem>
            <ListItem>Item 15</ListItem>
            <ListItem>Item 16</ListItem>
            <ListItem>Item 17</ListItem>
            <ListItem>Item 18</ListItem>
            <ListItem>Item 19</ListItem>
            <ListItem>Item 20</ListItem>
            <ListItem>Item 21</ListItem>
            <ListItem>Item 22</ListItem>
          </List>
        </Container>
      </Container>
    </>
  );
}

export default Lists;
