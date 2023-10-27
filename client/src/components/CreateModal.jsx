import React from "react";

export default function CreateModal({ closeModal }) {
  // const ModalStyle = {}
  return (
    <section className="modalBackground">
      <div className="modalContainer">
        <div className="closeBtn">
          <button onClick={() => closeModal(false)} className="close">
            X
          </button>
        </div>
        <div className="title">
          <p>Enter Details</p>
        </div>

        <div className="body">
          <p>Name</p>
          <br></br>
          <p>Age</p>
          <br />
          <p>Sex</p>
          <br />
        </div>
        <div className="modalFooter">
          <button className="submit">Submit</button>
        </div>
      </div>
    </section>
  );
}
