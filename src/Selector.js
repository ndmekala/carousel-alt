import React, { useState, useEffect } from "react";
import './Selector.css';

const Selector = () => {

    const [activeBlurb, setActiveBlurb] = useState(1)
    let position = (activeBlurb - 1) * -100

    // V CLOSE --> there should be a wrapping component that sends an array of blurbs as a prop.
    // then this should iterate over that array rather than just arbitrary picking 3 here and iterating over the 
    // array in the other component



    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            if (i+1 === activeBlurb) {
                document.querySelector(`#sliderSelector${i+1}`).classList.remove('unselected')
                document.querySelector(`#sliderSelector${i+1}`).classList.add('selected')
            } else {
                document.querySelector(`#sliderSelector${i+1}`).classList.remove('selected')
                document.querySelector(`#sliderSelector${i+1}`).classList.add('unselected')
            }
        }
        position = (activeBlurb - 1) * -100
        document.querySelector('.blurbWrapper').style.transform = `translateX(${position}vw)`
    })
    
  return (
    <div className="selectorWrapper">
        <div className="sliderSelector" id="sliderSelector1" onClick={() => setActiveBlurb(1)}></div>
        <div className="sliderSelector" id="sliderSelector2" onClick={() => setActiveBlurb(2)}></div>
        <div className="sliderSelector" id="sliderSelector3" onClick={() => setActiveBlurb(3)}></div>
    </div>
  );
}

export default Selector;
