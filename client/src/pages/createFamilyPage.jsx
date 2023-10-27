import "react-bootstrap/Modal";
import { useState } from "react";
import CreateModal from "../components/CreateModal";

function CreateFamily() {
  const [open, setOpen] = useState(false);
  const [startFamily, setStart] = useState(false);

  return (
    <section>
      <section
        style={{
          margin: "0",
          position: "absolute",
          top: "50%",
          left: "50%",
          msTransform: "translateY(-50%)",
          transform: "translateY(-50%)",
          display: "flex",
        }}
      >
        <button className="openModel" onClick={() => setOpen(true)}>
          add person
        </button>
        <section>{open && <CreateModal closeModal={setOpen} />}</section>
      </section>
    </section>
  );
}

export default CreateFamily;
