import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Statistic.module.scss';

export class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ key }) => {
    const value = this.state[key];

    this.setState({
      ...this.state,
      [key]: value + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (!total) return 0;

    return Math.round((100 * good) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <section className="statistic_section">
        <h1>Please leave feedback</h1>

        <button
          type="button"
          onClick={() => this.handleIncrement({ key: 'good' })}
        >
          Good
        </button>

        <button
          type="button"
          onClick={() => this.handleIncrement({ key: 'neutral' })}
        >
          Neutral
        </button>

        <button
          type="button"
          onClick={() => this.handleIncrement({ key: 'bad' })}
        >
          Bad
        </button>

        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positiveFeedback} %</li>
        </ul>
      </section>
    );
  }
}
