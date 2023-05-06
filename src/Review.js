import { useState } from "react";
import people from "./Data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber);
  };
  const lastPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="name-job">
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
      </div>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronCircleLeft onClick={lastPerson} />
        </button>
        <button className="prev-btn">
          <FaChevronCircleRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random Character
      </button>
    </article>
  );
};

export default Review;
