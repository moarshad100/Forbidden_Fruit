import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

//Create Modal for add person
export default function CreateModal({ closeModal }) {
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

        <form className="body">
          {/* input for adding a person */}

          <input type="text" name="addname" placeholder="name" />

          <section>
            <label htmlFor="Male">Male</label>
            <input type="radio" id="male" name="gender" value="MALE" />
            <label htmlFor="Female">Female</label>
            <input type="radio" id="Female" name="gender" value="FEMALE" />
          </section>
          <br />
          <div className="modalFooter">
            <Button type="submit" variant="contained" className="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
