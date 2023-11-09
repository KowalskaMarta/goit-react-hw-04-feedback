import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const App = () => {

const [state, setState] = useState({good:0, neutral:0, bad:0})

  const updateState = (opinion) => {
    setState(state => ({
      ...state,
      [opinion] : state[opinion] + 1
    }))
  }

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  }

    const options = Object.keys(state);
    const totalFeedback = countTotalFeedback();

    return (
      <div>
        <h1>Please live feedback</h1>

        <Section title="Please live feedback:">
          <FeedbackOptions options={options} onLeaveFeedback={updateState} />
        </Section>

        <Section title="Statistics:">
          {totalFeedback > 0 ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="Brak danych do wyświetlenia." />
          )}
        </Section>
      </div>
    );
}

export default App;
