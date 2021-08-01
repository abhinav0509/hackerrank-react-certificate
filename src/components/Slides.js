import React, { useState } from "react";

function Slides({ slides }) {
  const [index, setIndex] = useState(0);

  const { title, text } = slides[index];
  const getNextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    });
  };
  const getPrevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex;
    });
  };
  const restart = () => {
    setIndex(0);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restart}
          disabled={index > 0 ? false : true}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={getPrevSlide}
          disabled={index === 0 ? true : false}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={getNextSlide}
          disabled={index === slides.length - 1 ? true : false}
        >
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </div>
  );
}

export default Slides;
