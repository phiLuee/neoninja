import Button from "../components/Button/Button"

function Buttons() {
  return (
    <>
      <div>
        <h1>Buttons</h1>
        <Button variant="primary" onClick={function (): void {
          alert('Click!');
        }}> Primary Button </Button>

        <Button variant="primary" size="small" onClick={function (): void {
          alert('Click!');
        }}> Primary Button Small </Button>


        <Button variant="primary" size="medium" onClick={function (): void {
          alert('Click!');
        }}> Primary Button Medium </Button>


        <Button variant="primary" size="large" onClick={function (): void {
          alert('Click!');
        }}> Primary Button Large </Button>

        <Button variant="secondary" onClick={function (): void {
          alert('Click!');
        }}> Secondary Button </Button>
      </div>
    </>
  )
}

export default Buttons