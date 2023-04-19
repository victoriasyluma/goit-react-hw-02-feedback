import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = [
    { key: 'good', label: 'Good' },
    { key: 'neutral', label: 'Neutral' },
    { key: 'bad', label: 'Bad' },
  ];

  onLeaveFeedback = ({ key }) => {
    this.setState((state) => {
      const value = state[key];

      return {
        [key]: value + 1,
      };
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
    const { options, onLeaveFeedback } = this;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const hasFeedback = total > 0;

    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {hasFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
