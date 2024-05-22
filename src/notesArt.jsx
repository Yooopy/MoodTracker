import "./notesArt.css";
import { useEffect, useState } from "react";
import trashBin from "./assets/trash-bin.png";

function notesArt() {
  const [notes, setNotes] = useState(
    localStorage.getItem("mood-notes") !== "[]" ||
      localStorage.getItem("mood-notes") !== null
      ? JSON.parse(localStorage.getItem("mood-notes"))
      : () => {
          return [
            {
              title: "amm... You didnt take any notes yet",
              text: `, maybe wanna take a note? Hit the Plus button to open to form to take a note`,
              date: "from a KitKat chocolate",
            },
          ];
        }
  );
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  function returnDate() {
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
  }
  let formStatus = false;
  function showForm() {
    if (formStatus === false) {
      document.getElementsByClassName("n-form")[0].style.transition =
        "all 0.2s ease";
      document.getElementsByClassName("n-form")[0].style.animation =
        "form 0.2s ease forwards";
      document.getElementsByClassName("n-form")[0].style.display = "flex";
      returnDate();

      formStatus = true;
    } else {
      document.getElementsByClassName("n-form")[0].style.transition =
        "all 0.2s ease";
      document.getElementsByClassName("n-form")[0].style.animation =
        "form-back 0.2s ease forwards";

      document.getElementsByClassName("n-form")[0].style.display = "none";

      formStatus = false;
    }
  }

  const addToNotes = () => {
    returnDate();
    if (title !== "" && text !== "") {
      setNotes([...notes, { title: title, text: text, date: date }]);
      localStorage.setItem(
        "mood-notes",
        JSON.stringify([...notes, { title: title, text: text, date: date }])
      );
      setTitle("");
      setText("");
    }
  };

  function removeMood(e, index) {
    const prev = [...notes].filter((data, i) => i !== index);
    // prev.splice(index, 1);
    setNotes(prev);
    localStorage.setItem("mood-notes", JSON.stringify(prev));
  }

  return (
    <article className="notes-art">
      <section className="first-sec">
        {notes.map((note, index) => {
          return (
            <section className="section" key={index}>
              <div className="title-div">
                <p style={{ display: "none" }}>{note.title}</p>
                <p>{note.title}</p>
                <img
                  src={trashBin}
                  className="trash-bin"
                  onClick={(e) => removeMood(e, index)}
                ></img>
              </div>
              <hr className="section-hr"></hr>
              <div className="description">{note.text}</div>
              <div className="date-div">{note.date}</div>
            </section>
          );
        })}
      </section>

      <div className="n-form">
        <h4>Save Your notes here</h4>
        <input
          id="n-title-inp"
          placeholder="write a title about Your mood!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <textarea
          id="n-text-inp"
          placeholder="talk about Your mood!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            addToNotes();
            document.getElementsByClassName("n-form")[0].style.display = "none";
          }}
          className="form-button"
        >
          Add
        </button>
      </div>
      <button onClick={() => showForm()} className="button-notes-add">
        +
      </button>
    </article>
  );
}
export default notesArt;

// import trashBin from "./assets/trash-bin.png";
// import { useState, useEffect } from "react";
// import "./notesArt.css";
// function notesArt(props) {
//   const [notes, setNotes] = useState(
//     JSON.parse(
//       localStorage.getItem("moods-notes") !== null
//         ? localStorage.getItem("moods-notes")
//         : "[]"
//     )
//   );

//   const [nTitle, setNTitle] = useState("");
//   const [nText, setNText] = useState("");
//   const [nDate, setNDate] = useState("");

//   const addToNotes = () => {
//     if (
//       document.getElementById("title-inp").value !== "" &&
//       document.getElementById("text-inp").value !== ""
//     ) {
//       const year = new Date().getFullYear();
//       const month =
//         new Date().getMonth() + 1 >= 10
//           ? new Date().getMonth() + 1
//           : `0${new Date().getMonth() + 1}`;
//       const day =
//         new Date().getDate() >= 10
//           ? new Date().getDate()
//           : `0${new Date().getDate()}`;
//       const hours =
//         new Date().getHours() >= 10
//           ? new Date().getHours()
//           : `0${new Date().getHours()}`;
//       const minutes =
//         new Date().getMinutes() >= 10
//           ? new Date().getMinutes()
//           : `0${new Date().getMinutes()}`;
//       const seconds =
//         new Date().getSeconds() >= 10
//           ? new Date().getSeconds()
//           : `0${new Date().getSeconds()}`;

//       setNDate(`${year}/${month}/${day}, ${hours}:${minutes}:${seconds}`);

//       // setDatas([...datas, { title: title, text: text, mood: mood, date: date }]);

//       setNotes([...notes, { title: nTitle, text: nText, date: nDate }]);
//       localStorage.setItem(
//         "moods-notes",
//         JSON.stringify([...notes, { title: nTitle, text: nText, date: nDate }])
//       );
//       console.log(localStorage.getItem("moods-notes"));

//       setNTitle("");
//       setNText("");
//       // setMood();
//     }
//   };

//   let formStatus = false;
//   function setOnClick() {
//     document.getElementById("plus-button").onclick = () => {
//       if (formStatus === false) {
//         document.getElementsByClassName("notes-form")[0].style.transition =
//           "all 0.2s ease";
//         document.getElementsByClassName("notes-form")[0].style.animation =
//           "form 0.2s ease forwards";
//         document.getElementsByClassName("notes-form")[0].style.display = "flex";

//         const year = new Date().getFullYear();
//         const month =
//           new Date().getMonth() + 1 >= 10
//             ? new Date().getMonth() + 1
//             : `0${new Date().getMonth() + 1}`;
//         const day =
//           new Date().getDate() >= 10
//             ? new Date().getDate()
//             : `0${new Date().getDate()}`;
//         const hours =
//           new Date().getHours() >= 10
//             ? new Date().getHours()
//             : `0${new Date().getHours()}`;
//         const minutes =
//           new Date().getMinutes() >= 10
//             ? new Date().getMinutes()
//             : `0${new Date().getMinutes()}`;
//         const seconds =
//           new Date().getSeconds() >= 10
//             ? new Date().getSeconds()
//             : `0${new Date().getSeconds()}`;

//         setNDate(`${year}/${month}/${day}, ${hours}:${minutes}:${seconds}`);

//         formStatus = true;
//       } else {
//         document.getElementsByClassName("notes-form")[0].style.transition =
//           "all 0.2s ease";
//         document.getElementsByClassName("notes-form")[0].style.animation =
//           "form-back 0.2s ease forwards";

//         document.getElementsByClassName("notes-form")[0].style.display = "none";

//         formStatus = false;
//       }
//     };
//   }

//   function removeNote(e, index) {
//     const prev = [...notes].filter((data, i) => i !== index);
//     // prev.splice(index, 1);
//     setNotes(prev);
//     localStorage.setItem("moods-notes", JSON.stringify(prev));
//   }

//   useEffect(() => {
//     if (props.status === "notes") {
//       setOnClick();
//     }
//   }, [props.status]);

//   return (
//     <article className="notes-art">
//       <section className="first-sec-notes">
//         {notes.map((data, index) => {
//           return (
//             <section className="section" key={index}>
//               <div className="title-div">
//                 <p>{data.title}</p>
//                 <img className="trash-bin"></img>
//               </div>
//               <hr className="section-hr"></hr>
//               <div className="description">{data.text}</div>
//               <div className="date-div">{data.date}</div>
//             </section>
//           );
//         })}
//       </section>

//       <section id="clear-space" className="section">
//         <div className="title-div">
//           <p>Im Normal Today</p>
//         </div>
//         <hr className="section-hr"></hr>
//         <div className="description">descrition</div>
//       </section>
//       <div className="notes-form">
//         <input
//           id="title-inp"
//           placeholder="write a title about Your mood!"
//           value={nTitle}
//           onChange={(e) => setNTitle(e.target.value)}
//         ></input>

//         <textarea
//           id="text-inp"
//           placeholder="talk about Your mood!"
//           value={nText}
//           onChange={(e) => setNText(e.target.value)}
//         ></textarea>
//         <button
//           onClick={() => {
//             addToNotes();
//             document.getElementsByClassName("notes-form")[0].style.display =
//               "none";
//           }}
//           className="form-button"
//         >
//           Add
//         </button>
//       </div>
//     </article>
//   );
// }

// export default notesArt;
