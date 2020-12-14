import React, { useState } from "react";
import "./styles.css";

var emojiDic = {
  "❤️": "Red Heart",
  "🎄": "christmas tree",
  "🥰": "Smiling Face with Hearts",
  "😗": "Kissing Face",
  "🥺": "Pleading Face",
  "😂": "Face with Tears of Joy",
  "✨": "Sparkles",
  "🎁": "Wrapped Gift",
  "😉": "Winking Face",
  "😚": "Kissing Face with Closed Eyes",
  "🤭": "Face with Hand Over Mouth",
  "🤗": "Hugging Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "😠": "Angry Face",
  "💔": "Broken Heart",
  "🍾": "Bottle with Popping Cork",
  "🎂": "Birthday Cake",
  "🌅": "Sunrise",
  "🔥": "Fire",
  "🏆": "Trophy",
  "🎧": "Headphone",
  "😘": "Face Blowing a Kiss"
};

var emojisWeKnow = Object.keys(emojiDic);

export default function App() {
  var [meaning, setmeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDic[userInput];
    if (meaning === undefined) {
      meaning = "This emoji is Not defined";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDic[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Meanings</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter your emoji or checkout below"
      ></input>
      <h2>meaning of emoji: {meaning}</h2>
      <h3>------Emojis We Know-----</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.7rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
