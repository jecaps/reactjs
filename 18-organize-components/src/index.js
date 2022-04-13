import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./styles.css";

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
