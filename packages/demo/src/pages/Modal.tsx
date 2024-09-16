import { Button, Modal, ModalHandle } from "base-ui";
import { useRef } from "react";

function Modals(): React.ReactElement {
  const modalHandle = useRef<ModalHandle>(null);

  const callModal = () => {
    console.log(modalHandle.current);
    modalHandle.current?.setVisibile(true);
    // throw new Error("Not implemented");
  };
  return (
    <>
      <div>
        <h1>Modals</h1>
        <Button onClick={callModal}>Call Modal</Button>
        <Modal ref={modalHandle} />
      </div>
    </>
  );
}

export default Modals;
