import React, { useState, useEffect } from "react";
import "./Selector.css";

const Selector = (props) => {
  const [activeBlurb, setActiveBlurb] = useState(1);
  let position = (activeBlurb - 1) * -100;

  useEffect(() => {
    props.blurbInfo.forEach((blurb) => {
      if (props.blurbInfo.indexOf(blurb) + 1 === activeBlurb) {
        document
          .querySelector(`#selector${props.blurbInfo.indexOf(blurb) + 1}`)
          .classList.remove("unselected");
        document
          .querySelector(`#selector${props.blurbInfo.indexOf(blurb) + 1}`)
          .classList.add("selected");
      } else {
        document
          .querySelector(`#selector${props.blurbInfo.indexOf(blurb) + 1}`)
          .classList.remove("selected");
        document
          .querySelector(`#selector${props.blurbInfo.indexOf(blurb) + 1}`)
          .classList.add("unselected");
      }
    });
    position = (activeBlurb - 1) * -100;
    document.querySelector(
      ".blurbWrapper"
    ).style.transform = `translateX(${position}vw)`;
  });

  return (
    <div className="selectorWrapper">
      {props.blurbInfo.map((blurb) => (
        <div
          className="selector"
          id={`selector${props.blurbInfo.indexOf(blurb) + 1}`}
          onClick={() => setActiveBlurb(props.blurbInfo.indexOf(blurb) + 1)}
        ></div>
      ))}
    </div>
  );
};

export default Selector;
