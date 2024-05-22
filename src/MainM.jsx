// import { addToList } from "./MainArt.jsx";
import React, { useRef, useEffect } from "react";
import apps from "./assets/apps.png";
import notes from "./assets/edit.png";
import settings from "./assets/setting.png";
// import plus from "./assets/plus.png";
import "./MainM.css";
import NotesArt from "./notesArt.jsx";
import MainArt from "./MainArt.jsx";
import SettingsArt from "./settingsArt.jsx";
function MainM() {
  // let notesStatus = false;
  function openMain() {
    document.getElementsByClassName("notes-art")[0].style.display = "none";
    document.getElementsByClassName("settings-art")[0].style.display = "none";
    document.getElementsByClassName("main-art")[0].style.display = "flex";
  }

  function openSettings() {
    document.getElementsByClassName("main-art")[0].style.display = "none";
    document.getElementsByClassName("notes-art")[0].style.display = "none";
    document.getElementsByClassName("settings-art")[0].style.display = "flex";
  }
  function openNotes() {
    document.getElementsByClassName("main-art")[0].style.display = "none";
    document.getElementsByClassName("notes-art")[0].style.display = "flex";
    document.getElementsByClassName("settings-art")[0].style.display = "none";
  }
  // function changeTitle() {
  //   document.title = "HEllo";
  //   document.getElementById("plus-button").style.backgroundColor = "red";
  // }

  // document.getElementById("plus-button").style.backgroundColor = "red";
  // const [status, setStatus] = useState("main");
  // openMain();
  const timerId = useRef(null);
  useEffect(() => {
    timerId.current = setTimeout(() => {
      openMain();
    }, 1);

    return () => {
      clearTimeout(timerId.current);
    };
  }, []);

  // var status = "main";
  return (
    <main>
      <aside>
        <div className="aside">
          <img
            onClick={() => {
              openMain();
            }}
            className="nav-imgs"
            src={apps}
          ></img>
          <img
            onClick={function () {
              openNotes();
            }}
            className="nav-imgs"
            src={notes}
          ></img>
          <img
            onClick={function () {
              openSettings();
            }}
            className="nav-imgs"
            src={settings}
          ></img>
        </div>
      </aside>

      <MainArt />
      <NotesArt />
      <SettingsArt />
    </main>
  );
}

export default MainM;
