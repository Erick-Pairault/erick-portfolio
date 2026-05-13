import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Bio from "./pages/Bio";
import Art from "./pages/Art";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === "home" && <Home />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "bio" && <Bio />}
        {currentPage === "art" && <Art />}
      </main>
    </>
  );
}
