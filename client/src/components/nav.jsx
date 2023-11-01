import FamilyTree from "./family_tree";
export default function Nav() {
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
        <br />
      </section>
    </nav>
  );
}
