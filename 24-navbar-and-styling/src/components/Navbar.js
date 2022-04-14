import reactLogo from "../images/React-icon.svg.png";

export default function Navbar() {
  return (
    // <header>
    <nav>
      <div className="nav--logo">
        <img src={reactLogo} className="nav--icon" alt="React logo" />
        <p className="nav--logo_name">ReactFacts</p>
      </div>
      <p className="nav--title">React Course - Project 1</p>
    </nav>
    // </header>
  );
}
