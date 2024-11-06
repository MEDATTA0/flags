import React from "react";

const Button = ({ text, color, fn }) => {
  return (
    <div>
      <button style={{ backgroundColor: `${color}` }} onClick={() => fn("")}>
        {text}
      </button>
    </div>
  );
};

export default Button;
