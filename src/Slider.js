import React from "react";
import Blurbs from "./Blurbs";
import Selector from "./Selector";

const Slider = () => {
  const blurbInfo = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum.",
      authorTitle: "Title 1",
      author: "Person 1",
      translatePosition: 0,
    },
    {
      text: "Habitant morbi tristique senectus et netus et malesuada fames. Mauris vitae ultricies leo integer malesuada nunc. Mattis nunc sed blandit libero volutpat sed. Dictum non consectetur a erat nam.",
      authorTitle: "Title 2",
      author: "Person 2",
      translatePosition: -100,
    },
    {
      text: "Tortor vitae purus faucibus ornare suspendisse sed. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Integer quis auctor elit sed vulputate mi sit. Massa sapien faucibus et molestie ac feugiat.",
      authorTitle: "Title 3",
      author: "Person 3",
      translatePosition: -200,
    },
  ];

  return (
    <div>
      <Blurbs blurbInfo={blurbInfo} />
      <Selector blurbInfo={blurbInfo} />
    </div>
  );
};

export default Slider;
