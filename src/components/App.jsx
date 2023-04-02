import css from './App.module.css';
import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVote = evt => {
    let btnName = evt.target.name;
    this.setState(prevState => {
      return { [btnName]: prevState[btnName] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prevVal, elm) => {
      return prevVal + elm;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    if (total !== 0) {
      return ((this.state.good / total) * 100).toFixed(0);
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className={css.feedbackArea}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleVote} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
