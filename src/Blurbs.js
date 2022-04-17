import React from "react";
import "./Blurbs.css";

const Blurbs = (props) => {
  let wrapperStyles = {
    width: props.blurbInfo.length * 100 + "%",
  };

  return (
    <div className="blurbWrapper" style={wrapperStyles}>
      {props.blurbInfo.map((blurb) => (
        <div className="blurbContainer">
          <div className="blurbText">“{blurb.text}”</div>
          <div className="blurbAuthorTItle">{blurb.authorTitle}</div>
          <div className="blurbAuthor">- {blurb.author}</div>
        </div>
      ))}
    </div>
  );
};

export default Blurbs;
