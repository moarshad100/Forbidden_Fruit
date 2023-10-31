import "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";

function CreateModal({ closeModal, setName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = e.target.Father.value;
    console.log(inputName);
    setName(inputName);
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

        <form onSubmit={handleSubmit} className="body">
          {/* input for adding a person */}

          <input type="text" name="addname" placeholder="Name" />
          <input type="text" name="Father" placeholder="Add Father" />
          <input type="text" name="Mother" placeholder="Add Mother" />
          <input type="text" name="Spouse" placeholder="Add Spouse" />
          <input type="text" name="Child" placeholder="Add Child" />
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

function CreateFamily({ addname }) {
  const [open, setOpen] = useState(false);
  const [startFamily, setStart] = useState(false);
  const [name, setName] = useState("Add Person");
  const [familyTree, setFamilyTree] = useState([
    {
      id: "1",
      name: "arshad",
      parent: ["jamal", "d"],
      children: ["haf"],
      spouse: ["rif"],
    },
  ]);

  return (
    <section>
      <section
        style={{
          margin: "0",
          display: "flex",
        }}
      >
        {familyTree.map((person) => {
          return (
            <Button
              variant="contained"
              className="openModal"
              onClick={() => setOpen(true)}
              name={addname}
            >
              {person.name}
            </Button>
          );
        })}

        <section>
          {open && <CreateModal setName={setName} closeModal={setOpen} />}
        </section>

        <section>
          {startFamily && (
            <AddFamily
              setFamilyTree={setFamilyTree}
              familyTree={familyTree}
              closeModal={setStart}
            />
          )}
        </section>
      </section>
    </section>
  );
}

export default CreateFamily;
