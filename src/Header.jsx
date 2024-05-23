import { useState } from "react";
import "./Header.css";
import icon from "/icon.png";

function Header() {
  setTimeout(() => {
    if (window.innerWidth < 768) {
      document.getElementsByClassName("search-box")[0].placeholder =
        "Click to Search";
    }
  }, 500);

  setTimeout(() => {
    document.getElementsByClassName("intro")[0].style.display = "none";
  }, 2500);

  const [search, setSearch] = useState(null);
  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      document.getElementsByClassName("search-box")[0].focus();
    }
  });
  function checkSearch(e) {
    if (document.getElementsByClassName("search-box")[0].value === "") {
      document.querySelectorAll(".section").forEach((search) => {
        search.style.display = "flex";
      });
      return;
    }
    let searchs = document
      .querySelectorAll(".section")
      .forEach((searchItem) => {
        // console.log(
        //   searchItem.children[0].children[1].textContent
        //     .toLowerCase()
        //     .includes(search.toLowerCase())
        // );
        if (
          searchItem.children[0].children[1].textContent
            .toLowerCase()
            .includes(search.toLowerCase())
        ) {
          searchItem.style.display = "flex";
        } else searchItem.style.display = "none";
      });
  }
  return (
    <header>
      <div className="header">
        <img className="logo" src={icon} alt="logo"></img>
        <h2>MoodTracker</h2>
      </div>
      <textarea
        maxLength={window.innerWidth >= 768 ? 100 : 30}
        className="search-box"
        placeholder='Type "/" to search or click here'
        onChange={(e) => {
          handleSearch(e);
          checkSearch(e);
        }}
      ></textarea>
      <article className="intro">
        <img src={icon}></img>
        <p>MoodTracker</p>
      </article>
    </header>
  );
}
export default Header;
