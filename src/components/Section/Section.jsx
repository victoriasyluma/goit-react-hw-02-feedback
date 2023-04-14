import PropTypes from 'prop-types';
import styles from './Section.module.scss';
import { Component } from 'react';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
