import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Notification.module.scss';

export class Notification extends Component {
  render() {
    const { message } = this.props;

    return <p className={styles.text}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
