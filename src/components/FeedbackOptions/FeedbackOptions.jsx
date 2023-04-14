import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props; // options:{key, label}[]

    const buttons = options.map(({ key, label }) => {
      const onClick = () => {
        onLeaveFeedback({ key });
      };

      return (
        <li className={styles.item} key={key}>
          <button className={styles.button} onClick={onClick}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className={styles.list}>{buttons}</ul>;
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
