import "react-bootstrap/Modal";
import { useState } from "react";
import CreateModal from "../components/AddDetailsModal";
import AddFamily from "../components/AddFamilyModal";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function CreateFamily() {
  const [open, setOpen] = useState(false);
  const [startFamily, setStart] = useState(false);
  const [name, setName] = useState([]);

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
        <Button
          variant="contained"
          className="openModal"
          onClick={() => setOpen(true)}
        >
          add person
        </Button>

        <section>{open && <CreateModal closeModal={setOpen} />}</section>
        <NavigateNextIcon
          id="addFamily"
          className="addFamily"
          onClick={() => setStart(true)}
        >
          +
        </NavigateNextIcon>

        <section>{startFamily && <AddFamily closeModal={setStart} />}</section>
      </section>
    </section>
  );
}

export default CreateFamily;
