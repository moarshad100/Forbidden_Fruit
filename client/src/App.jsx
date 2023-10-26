import { Outlet } from "react-router-dom";
import FamilyTree from "./components/family_tree";
import Nav from "./components/nav";
import Header from "./components/Header";
import Footer from "./components/footer";
import "./App.css";
import "./Styles/Header.css";

function App() {
  return (
    <>
      <section className="header">
        <Header> </Header>
        <Nav />
      </section>

      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
