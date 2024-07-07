import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserList from "./components/userContainer/UserList";
import "./styles.css";

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <UserList />
      </main>

      <Footer />
    </>
  );
}

export default App;
