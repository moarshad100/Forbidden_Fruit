import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import Header from "./components/Header";
import Footer from "./components/footer";
import "./App.css";
import "./Styles/Header.css";
import "./Styles/Modal.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <section className="header">
        <Header> </Header>
      </section>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
