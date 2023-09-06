import React from "react";

const Buttons = ({ btns = [] }) => {
  return (
    <div className="container__btn">
      {btns.map(({ action, text }, index) => (
        <button key={index} onClick={action}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
