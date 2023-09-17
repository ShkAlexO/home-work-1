import { useState, useEffect } from "react";
import "./todoListItem.sass";
import CustomButton from "../CustomButton/CustomButton";

function TodoListItem({ item, handleItemDelete }) {
  const [bgColor, setBgColor] = useState(item.bgColor || "#A9CCF3");

  useEffect(() => {
    const savedColor = localStorage.getItem(`bgColor_${item.id}`);
    if (savedColor) {
      setBgColor(savedColor);
    }
  }, [item.id]);

  const changeBgColor = (e) => {
    const newColor = e.target.value;
    setBgColor(newColor);

    localStorage.setItem(`bgColor_${item.id}`, newColor);
  };

  const handleButtonClick = () => {
    localStorage.removeItem(`bgColor_${item.id}`);
    handleItemDelete(item.id);
  };

  return (
    <>
      <li style={{ backgroundColor: bgColor }}>
        <strong>{item.rating}</strong>
        <span>{item.title}</span>
        <input type="color" value={bgColor} onChange={changeBgColor} />
        <CustomButton title="Delete" actionOnClick={handleButtonClick} />
      </li>
    </>
  );
}

export default TodoListItem;
