import { Button, Card } from "base-ui";

function Buttons() {
  return (
    <>
      <div>
        <h1>Buttons</h1>
        <Button
          onClick={function (): void {
            alert("Click!");
          }}
          variant="primary"
        >
          {" "}
          Primary Button{" "}
        </Button>

        <Button
          variant="primary"
          size="small"
          onClick={function (): void {
            alert("Click!");
          }}
        >
          {" "}
          Primary Button Small{" "}
        </Button>

        <Button
          variant="primary"
          size="medium"
          onClick={function (): void {
            alert("Click!");
          }}
        >
          {" "}
          Primary Button Medium{" "}
        </Button>

        <Button
          variant="primary"
          size="large"
          onClick={function (): void {
            alert("Click!");
          }}
        >
          {" "}
          Primary Button Large{" "}
        </Button>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={function (): void {
            alert("Click!");
          }}
        >
          {" "}
          Secondary Button{" "}
        </Button>
        <Button
          variant="secondary"
          size="small"
          onClick={function (): void {
            alert("Click!");
          }}
        >
          {" "}
          Secondary Button small{" "}
        </Button>
        <Button
          variant="secondary"
          size="medium"
          onClick={function (): void {
            alert("Click!");
          }}
        >
          {" "}
          Secondary Button medium{" "}
        </Button>
        <Button
          variant="secondary"
          size="large"
          onClick={function (): void {
            alert("Click!");
          }}
        >
          {" "}
          Secondary Button large{" "}
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
    </>
  );
}

export default Buttons;
