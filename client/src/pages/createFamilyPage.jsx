import "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";

function AddFamily({ closeModal }) {
  return (
    <section className="modalBackground">
      <div className="modalContainer">
        <div className="closeBtn">
          <Button onClick={() => closeModal(false)} className="close">
            X
          </Button>
        </div>

        <section className="familyAddingButtons">
          <Button variant="outlined">Parents</Button>
          <Button variant="outlined">Spouse</Button>
          <Button variant="outlined">Child</Button>
        </section>
      </div>
    </section>
  );
}

function CreateModal({ closeModal, propName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.addname.value;
  };

  return (
    <section className="modalBackground">
      <div className="modalContainer">
        <div className="closeBtn">
          {/* close button */}
          <Button
            variant="outlined"
            onClick={() => closeModal(false)}
            className="close"
          >
            X
          </Button>
        </div>
        <div className="title">
          <p>Enter Details</p>
        </div>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="body"
        >
          {/* input for adding a person */}

          <input type="text" name="addname" placeholder="name" />

          <section>
            <label htmlFor="Male">Male</label>
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="Female">Female</label>
            <input type="radio" id="Female" name="gender" value="Female" />
          </section>
          <br />
          <div className="modalFooter">
            <Button type="submit" variant="contained" className="submit">
              submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

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
        <Button
          variant="contained"
          className="openModal"
          onClick={() => setOpen(true)}
        >
          add person
        </Button>

        <section>
          {open && <CreateModal propName={"hello"} closeModal={setOpen} />}
        </section>
        <NavigateNextIcon
          id="addFamily"
          className="addFamily"
          onClick={() => setStart(true)}
        />

        <section>{startFamily && <AddFamily closeModal={setStart} />}</section>
      </section>
    </section>
  );
}

export default CreateFamily;
