
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';
import updateMessage from '../../actions';

function App({ children, message, onMessageClick }) {
  return (
    <div>
      <i className={styles.logo} />
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/examples">Examples</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/tools">Tools</Link>
        </li>
      </ul>
      <button
        className={styles.message}
        onClick={() => {
          onMessageClick();
        }}
      >
        {message}
      </button>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  onMessageClick: PropTypes.func,
};

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  onMessageClick: () => {
    dispatch(updateMessage());
  },
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp;
