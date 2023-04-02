import { nanoid } from 'nanoid';
import css from './App.module.css';
import { Component } from 'react';

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
        <h3>Please leave feedback</h3>
        <div></div>
        <button
          key={nanoid()}
          className={css.voteButton}
          type="button"
          name="good"
          onClick={this.handleVote}
        >
          Good
        </button>
        <button
          key={nanoid()}
          className={css.voteButton}
          type="button"
          name="neutral"
          onClick={this.handleVote}
        >
          Neutral
        </button>
        <button
          key={nanoid()}
          className={css.voteButton}
          type="button"
          name="bad"
          onClick={this.handleVote}
        >
          Bad
        </button>
        <h3>Statistics</h3>
        <div>
          <p className={css.statInfo}>Good: {this.state.good}</p>
          <p className={css.statInfo}>Neutral: {this.state.neutral}</p>
          <p className={css.statInfo}>Bad: {this.state.bad}</p>
          <p className={css.statInfo}>Total: {this.countTotalFeedback()}</p>
          <p className={css.statInfo}>
            Positive feedback: {this.countPositiveFeedbackPercentage()} %
          </p>
        </div>
      </div>
    );
  }
}

export default App;
