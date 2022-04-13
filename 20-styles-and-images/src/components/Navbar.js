import reactLogo from "../images/React-icon.svg.png";

export default function Navbar() {
  return (
    <nav>
      <img src={reactLogo} className="nav--icon" alt="React logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
