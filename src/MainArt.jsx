import { useEffect, useState } from "react";
import faceHappy from "./assets/face-happy.png";
import facePoker from "./assets/face-poker.png";
import faceSad from "./assets/face-sad.png";
import trashBin from "./assets/trash-bin.png";

import "./MainArt.css";
function MainArt() {
  // console.log(localStorage.getItem("moods"));
  const [datas, setDatas] = useState(
    localStorage.getItem("moods") !== "[]"
      ? JSON.parse(localStorage.getItem("moods"))
      : () => {
          // localStorage.setItem(
          // "moods",
          // JSON.stringify([{ title: "So quiet... hmphh" }])
          // );
          return [
            {
              title: "So quiet... hmphh",
              text: `There is not any records yet 🍫... . Hit the Plus button to record From you Mood`,
              mood: faceSad,
              date: "From a KitKat chocolate",
            },
          ];
        }
  );

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [mood, setMood] = useState(facePoker);

  const [date, setDate] = useState();

  const addToList = () => {
    if (
      document.getElementById("title-inp").value !== "" &&
      document.getElementById("text-inp").value !== ""
    ) {
      const year = new Date().getFullYear();
      const month =
        new Date().getMonth() + 1 >= 10
          ? new Date().getMonth() + 1
          : `0${new Date().getMonth() + 1}`;
      const day =
        new Date().getDate() >= 10
          ? new Date().getDate()
          : `0${new Date().getDate()}`;
      const hours =
        new Date().getHours() >= 10
          ? new Date().getHours()
          : `0${new Date().getHours()}`;
      const minutes =
        new Date().getMinutes() >= 10
          ? new Date().getMinutes()
          : `0${new Date().getMinutes()}`;
      const seconds =
        new Date().getSeconds() >= 10
          ? new Date().getSeconds()
          : `0${new Date().getSeconds()}`;

      setDate(`${year}/${month}/${day}, ${hours}:${minutes}:${seconds}`);

      // setDatas([...datas, { title: title, text: text, mood: mood, date: date }]);

      setDatas([
        ...datas,
        { title: title, text: text, mood: mood, date: date },
      ]);
      localStorage.setItem(
        "moods",
        JSON.stringify([
          ...datas,
          { title: title, text: text, mood: mood, date: date },
        ])
      );
      // console.log(localStorage.getItem("moods"));

      setTitle("");
      setText("");
      // setMood();
    }
  };
  let formStatus = false;
  function showForm() {
    if (formStatus === false) {
      document.getElementsByClassName("form")[0].style.transition =
        "all 0.2s ease";
      document.getElementsByClassName("form")[0].style.animation =
        "form 0.2s ease forwards";
      document.getElementsByClassName("form")[0].style.display = "flex";

      const year = new Date().getFullYear();
      const month =
        new Date().getMonth() + 1 >= 10
          ? new Date().getMonth() + 1
          : `0${new Date().getMonth() + 1}`;
      const day =
        new Date().getDate() >= 10
          ? new Date().getDate()
          : `0${new Date().getDate()}`;
      const hours =
        new Date().getHours() >= 10
          ? new Date().getHours()
          : `0${new Date().getHours()}`;
      const minutes =
        new Date().getMinutes() >= 10
          ? new Date().getMinutes()
          : `0${new Date().getMinutes()}`;
      const seconds =
        new Date().getSeconds() >= 10
          ? new Date().getSeconds()
          : `0${new Date().getSeconds()}`;

      setDate(`${year}/${month}/${day}, ${hours}:${minutes}:${seconds}`);

      formStatus = true;
    } else {
      document.getElementsByClassName("form")[0].style.transition =
        "all 0.2s ease";
      document.getElementsByClassName("form")[0].style.animation =
        "form-back 0.2s ease forwards";

      document.getElementsByClassName("form")[0].style.display = "none";

      formStatus = false;
    }
  }

  // setInterval(() => {
  //   console.log(props.status);
  // }, 1000);

  function removeMood(e, index) {
    const prev = [...datas].filter((data, i) => i !== index);
    // prev.splice(index, 1);
    setDatas(prev);
    localStorage.setItem("moods", JSON.stringify(prev));
  }

  // document.getElementById("plus-button").style.display = "none";

  // props.button.style.backroundColor = "red";

  return (
    <article className="main-art">
      <section className="first-sec">
        {datas.map((data, index) => {
          return (
            <section className="section" key={index}>
              <div className="title-div">
                <img src={data.mood} alt="mood" className="mood-img"></img>
                <p className="tittle">{data.title}</p>
                <img
                  className="trash-bin"
                  src={trashBin}
                  onClick={(e) => removeMood(e, index)}
                ></img>
              </div>
              <hr className="section-hr"></hr>
              <pre className="description">{data.text}</pre>
              <div className="date-div">{data.date}</div>
            </section>
          );
        })}
      </section>

      {/* <section id="clear-space" className="section"> */}
      {/* <div className="title-div"> */}
      {/* <img src={facePoker} alt="mood" className="mood-img"></img> */}
      {/* <p>&nbsp;</p> */}
      {/* </div> */}
      {/* <hr className="section-hr"></hr> */}
      {/* <div className="description">descrition</div> */}
      {/* </section> */}

      <div className="form">
        <div className="form-radio">
          <div className="radio-div">
            <label htmlFor="radio-happy">
              <img src={faceHappy}></img>
            </label>

            <input
              id="radio-happy"
              name="mood"
              value={faceHappy}
              type="radio"
              onChange={() => setMood(faceHappy)}
            ></input>
          </div>

          <div className="radio-div">
            <label htmlFor="radio-poker">
              <img src={facePoker}></img>
            </label>

            <input
              id="radio-poker"
              name="mood"
              value={facePoker}
              type="radio"
              onChange={() => setMood(facePoker)}
            ></input>
          </div>

          <div className="radio-div">
            <label htmlFor="radio-sad">
              <img src={faceSad}></img>
            </label>

            <input
              id="radio-sad"
              name="mood"
              value={faceSad}
              type="radio"
              onChange={() => setMood(faceSad)}
            ></input>
          </div>
        </div>

        <input
          id="title-inp"
          placeholder="write a title about Your mood!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <textarea
          id="text-inp"
          placeholder="talk about Your mood!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            addToList();
            document.getElementsByClassName("form")[0].style.display = "none";
          }}
          className="form-button"
        >
          Add
        </button>
      </div>
      <button onClick={() => showForm()} className="button-main-add">
        +
      </button>
    </article>
  );
}

export default MainArt;
