
import React from 'react';
import PropTypes from 'prop-types';


import style from '../Feedback/FeedbackStyle.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button className={style['feedback-button']}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired, 
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
