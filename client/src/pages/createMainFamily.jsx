import CreateFamily from "../components/createFamily";

import { useState } from "react";

export default function MainFamily() {
  const divStyle = {
    width: "200px",
    height: "100px",
    borderColor: "green",
    backgroundColor: "grey",
    display: "flex",
    marginLeft: "20px",
    marginTop: "30px",
    
  };
  return <CreateFamily />;
}
