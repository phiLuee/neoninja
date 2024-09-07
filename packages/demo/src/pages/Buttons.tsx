import { Button, Card } from "base-ui";
import Lamp from "../components/Lamp";

function Buttons(): React.ReactElement {
  const buttonContainerStyle: React.CSSProperties = {};

  return (
    <>
      <div>
        <h1>Buttons</h1>
        <div style={buttonContainerStyle}>
          <Button
            size="xsmall"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            variant="primary"
          >
            {" "}
            Primary Button Extra Small{" "}
          </Button>

          <Button
            variant="primary"
            size="small"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            {" "}
            Primary Button Small{" "}
          </Button>

          <Button
            variant="primary"
            size="medium"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            {" "}
            Primary Button Medium{" "}
          </Button>

          <Button
            variant="primary"
            size="large"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            {" "}
            Primary Button Large{" "}
          </Button>

          <Button
            variant="primary"
            size="xlarge"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            {" "}
            Primary Button XLarge{" "}
          </Button>
        </div>
      </div>
      <div>
        <Button
          variant="secondary"
          size="xsmall"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {" "}
          Secondary Button{" "}
        </Button>
        <Button
          variant="secondary"
          size="small"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {" "}
          Secondary Button small{" "}
        </Button>
        <Button
          variant="secondary"
          size="medium"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {" "}
          Secondary Button medium{" "}
        </Button>
        <Button
          variant="secondary"
          size="large"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {" "}
          Secondary Button large{" "}
        </Button>
        <Button
          variant="secondary"
          size="xlarge"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {" "}
          Primary Button XLarge{" "}
        </Button>
      </div>
      <div>
        <Card
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          <p>Yes</p>
        </Card>
      </div>
      <div>
        <Lamp></Lamp>
      </div>
    </>
  );
}

export default Buttons;
