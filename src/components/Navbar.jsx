import logo from "../assets/EP Glow.png";

export default function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="EP Logo" />
      </div>

      <div className="nav-links">
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("projects")}>Projects</button>
        <button onClick={() => setCurrentPage("bio")}>Bio</button>
        <button onClick={() => setCurrentPage("art")}>Art</button>
      </div>
    </nav>
  );
}
