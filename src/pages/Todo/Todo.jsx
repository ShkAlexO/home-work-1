import React, { useState } from "react";
import Buttons from "./Buttons";
import "./style.sass";

const list = [
  {
    id: 1,
    title: `Task 1`,
  },
  {
    id: 2,
    title: `Task 2`,
  },
  {
    id: 3,
    title: `Task 3`,
  },
  {
    id: 4,
    title: `Task 4`,
  },
];
export default function Todo() {
  const [listFirst, setListFirst] = useState(list);
  const [listSecond, setListSecond] = useState([]);
  const [listThird, setListThird] = useState([]);

  const transferFromFirstToSecond = () => {
    setListSecond((prevState) => [listFirst[0], ...prevState]);
    setListFirst((prevState) => prevState.slice(1));
  };

  const transferFromSecondToFirst = () => {
    setListFirst((prevState) => [listSecond[0], ...prevState]);
    setListSecond((prevState) => prevState.slice(1));
  };

  const transferFromSecondToThird = () => {
    setListThird((prevState) => [listSecond[0], ...prevState]);
    setListSecond((prevState) => prevState.slice(1));
  };

  const removeLastItem = () => {
    setListThird((prevState) => prevState.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="container__list">
        <ul>
          {listFirst.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        {listFirst.length ? (
          <Buttons
            btns={[
              {
                text: `Transfer to Second list`,
                action: transferFromFirstToSecond,
              },
            ]}
          />
        ) : null}
      </div>

      <div className="container__list">
        <ul>
          {listSecond.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        {listSecond.length ? (
          <Buttons
            btns={[
              {
                text: `Transfer to First list`,
                action: transferFromSecondToFirst,
              },
              {
                text: `Transfer to Third list`,
                action: transferFromSecondToThird,
              },
            ]}
          />
        ) : null}
      </div>

      <div className="container__list">
        <ul>
          {listThird.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        {listThird.length ? (
          <Buttons
            btns={[
              {
                text: `Remove last item`,
                action: removeLastItem,
              },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}
