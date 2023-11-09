import "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "@mui/material";
import { ADD_MEMBERS } from "../utils/mutations";
import { useMutation } from "@apollo/client";

import React from "react";

function CreateModal({ closeModal, setName }) {
  const [addmember, { error }] = useMutation(ADD_MEMBERS);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputName = e.target.addname.value;
    console.log(inputName);
    setName(inputName);
    try {
      const member = await addmember({ variables: { name: inputName } });
      console.log(member);
    } catch (error) {
      console.log("error");
    }
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

  const [name, setName] = useState("Add Person");

  return (
    <section
      style={{
        paddingTop: "25px",
      }}
    >
      <section
        style={{
          margin: "0",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          className="openModal"
          onClick={() => setOpen(true)}
          name={addname}
        >
          add person
        </Button>

        <section>
          {open && <CreateModal setName={setName} closeModal={setOpen} />}
        </section>
      </section>
    </section>
  );
}

export default CreateFamily;
