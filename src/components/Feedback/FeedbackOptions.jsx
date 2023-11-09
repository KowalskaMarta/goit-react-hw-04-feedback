
import React from 'react';

// // eslint-disable-next-line
// import FeedbackStyle from '../Feedback/FeedbackStyle.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button className="feedback-button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired, 
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default FeedbackOptions;
