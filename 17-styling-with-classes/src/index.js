import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          className="nav-logo"
          alt="react-logo"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main className="main">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2022 Kanz development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
