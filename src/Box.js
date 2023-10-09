import React, { useState } from "react";
import cssColorNames from "css-color-names";

function Box() {
  const [inputValue, setInputValue] = useState("");
  const [boxText, setBoxText] = useState("Empty Value");
  const [boxStyle, setBoxStyle] = useState({
    backgroundColor: "transparent",
    color: "black", // Initial text color
  });
  const [textColor, setTextColor] = useState("black"); // State to toggle text color

  const handleInputChange = (event) => {
    const newColor = event.target.value;
    setInputValue(newColor);
    setBoxText(newColor);

    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      setBoxStyle({ backgroundColor: newColor, color: textColor });
    } else if (cssColorNames[newColor]) {
      setBoxStyle({ backgroundColor: cssColorNames[newColor], color: textColor });
    } else {
      setBoxStyle({ backgroundColor: "transparent", color: textColor });
    }
  };

  const toggleTextColor = () => {
    // Toggle between white and black text color
    const newTextColor = textColor === "black" ? "white" : "black";
    setTextColor(newTextColor);
    setBoxStyle((prevStyle) => ({
      ...prevStyle,
      color: newTextColor,
    }));
  };

  return (
    <div className="center-container">
      <div className="box" style={boxStyle}>
        {boxText}
      </div>
      <form className="addForm">
        <input
          placeholder="Add Color"
          id="addColor"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
      </form>
      <button className="buttonStyle" onClick={toggleTextColor}>Toggle Text Color</button>
    </div>
  );
}

export default Box;
