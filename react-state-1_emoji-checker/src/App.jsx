import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";

  const validCode = "🐡🐠🐋";

  const [code, setCode] = useState("");

  function handleClick(emoji) {
    // console.log(emoji);

    setCode(code + emoji);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
            console.log("length: ", code.length);
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          setCode("");
        }}
      >
        Reset
      </button>
      {/* {code === validCode && <p>Valid code! 🎉</p>} */}
      {code !== validCode && code.length === 6 ? (
        <p>Invalid code!</p>
      ) : code === validCode ? (
        <p>Valid bro!</p>
      ) : null}
    </div>
  );
}
