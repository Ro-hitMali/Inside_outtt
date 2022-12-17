import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "🙃": "Upside-Down Face",
  "🤑": "Money-Mouth Face",
  "😐": "Neutral face",
  "🥵": "Hot face",
  "👿": "Angry face with horns",
  "💀": "Skull",
  "👻": "Ghost",
  "💖": "Sparking heart",
  "🤟": "Love you",
  "👀": "Eyes",
  "🐯": "Tiger face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    //console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    //console.log(emoji);
  }

  return (
    <div className="App">
      <h1> INSIDE OUTTT</h1>
      <input onChange={emojiInputHandler} />
      <h2>Emoji Meaning - {meaning}</h2>
      <h3> Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
