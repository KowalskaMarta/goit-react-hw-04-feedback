import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  updateState = (opinion) => {
    this.setState((prevState) => ({
      [opinion]: prevState[opinion] + 1
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (good / total) * 100;
  }

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <h1>Please live feedback</h1>

        <Section title="Please live feedback:">
          <FeedbackOptions options={options} onLeaveFeedback={this.updateState} />
        </Section>

        <Section title="Statistics:">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="Brak danych do wyświetlenia." />
          )}
        </Section>
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';

// class OpinionApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     };
//   }

//   updateState = opinion => {
//     this.setState(prevState => ({
//       [opinion]: prevState[opinion] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total === 0 ? 0 : (good / total) * 100;
//   }

//   render() {
//     return (
//       <div>
//         <h1>Please live feedback</h1>

//         <h2>Statistics:</h2>
        
//         <button onClick={() => this.updateState('good')}>Good</button>
//         <button onClick={() => this.updateState('neutral')}>Neutral</button>
//         <button onClick={() => this.updateState('bad')}>Bad</button>

//         <p>Good: {this.state.good}</p>
//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>

//         <p>Total: {this.countTotalFeedback()}</p>
//         <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>

//       </div>
//     );
//   }
// }

// export default OpinionApp;
