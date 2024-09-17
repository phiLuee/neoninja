import { List, ListItem } from "base-ui";
import Container from "../components/Container/Container";

function Lists(): React.ReactElement {
  return (
    <>
      <Container>
        <h1>Lists</h1>
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
