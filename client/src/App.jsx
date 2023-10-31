import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import Header from "./components/Header";
import Footer from "./components/footer";
import "./App.css";
import "./Styles/Header.css";
import "./Styles/Modal.css";

function App() {
  return (
    <>
      <section className="header">
        <Header> </Header>
      </section>
      <main className="mx-3">
        <Nav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
