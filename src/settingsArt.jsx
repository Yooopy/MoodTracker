import { useEffect } from "react";
import "./settingsArt.css";
import websiteImg from "./assets/website.png";
import githubImg from "./assets/github.png";

function settingsArt() {
  // localStorage.removeItem("mood-theme");
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("mood-theme")) === "light") {
      setThemeLight();
    } else if (JSON.parse(localStorage.getItem("mood-theme")) === "dark") {
      setThemeDark();
    } else {
      setThemeLight();
    }
  }, []);

  function createTheme(value) {
    localStorage.setItem("mood-theme", JSON.stringify(value));
  }

  function setThemeLight() {
    createTheme("light");
    document.documentElement.style.setProperty("--background-color", "#f1f1f1");
    document.documentElement.style.setProperty(
      "--background-l-color",
      "#ffffff"
    );
    document.documentElement.style.setProperty("color", "#000000");
    document.documentElement.style.setProperty("--shadow-color", "#a6a6a670");
  }

  function setThemeDark() {
    createTheme("dark");
    document.documentElement.style.setProperty("--background-color", "#111111");
    document.documentElement.style.setProperty(
      "--background-l-color",
      "#222222"
    );
    document.documentElement.style.setProperty("color", "#e3e3e3");
    document.documentElement.style.setProperty("--shadow-color", "#26262680");
  }

  return (
    <article className="settings-art">
      <h3>Settings</h3>
      <br></br>

      <ul className="ul">
        <p>Theme</p>
        <li onClick={() => setThemeLight()}>Light</li>
        <li onClick={() => setThemeDark()}>Dark</li>
        {/* <li></li> */}
      </ul>
      <div>
        <div
          className="normal-div"
          onClick={() => {
            window.open("https://github.com/yooopy/");
          }}
        >
          <img className="normal-img" src={githubImg}></img>
          <p>Github</p>
        </div>
        <div
          className="normal-div"
          onClick={() => {
            window.open("https://yooopy.github.io/");
          }}
        >
          <img className="normal-img" src={websiteImg}></img>
          <p>Personal Website</p>
        </div>
      </div>
    </article>
  );
}

export default settingsArt;
