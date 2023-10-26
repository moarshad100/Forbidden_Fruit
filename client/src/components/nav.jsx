import { Link } from "react-router-dom";
import FamilyTree from "./family_tree";
export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
        }}
      >
        <FamilyTree />
      </section>
    </nav>
  );
}
