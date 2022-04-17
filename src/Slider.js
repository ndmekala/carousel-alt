import React from "react";
import './Slider.css';

const Slider = () => {
    const blurbs = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum.',
            authorTitle: 'Title 1',
            author: 'Person 1',
            translatePosition: 0,
        },
        {
            text: 'Habitant morbi tristique senectus et netus et malesuada fames. Mauris vitae ultricies leo integer malesuada nunc. Mattis nunc sed blandit libero volutpat sed. Dictum non consectetur a erat nam.',
            authorTitle: 'Title 2',
            author: 'Person 2',
            translatePosition: -100,
        },
        {
            text: 'Tortor vitae purus faucibus ornare suspendisse sed. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Integer quis auctor elit sed vulputate mi sit. Massa sapien faucibus et molestie ac feugiat.',
            authorTitle: 'Title 3',
            author: 'Person 3',
            translatePosition: -200,
        },
    ];

    let wrapperStyles = {
        width: blurbs.length * 100 + '%',
       }

  return (
    <div className="blurbWrapper" style={wrapperStyles}>
        {blurbs.map((blurb) => (
            <div className="blurbContainer">
                <div className="blurbText">
                    “{blurb.text}”
                </div>
                <div className="blurbAuthorTItle">
                    {blurb.authorTitle}
                </div>
                <div className="blurbAuthor">
                    - {blurb.author}
                </div>
            </div>
        ))}
    </div>
  );
}

export default Slider;
