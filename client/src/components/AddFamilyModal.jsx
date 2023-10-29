import React from "react";
import { Button } from "@mui/material";

export default function AddFamily({ closeModal }) {
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
