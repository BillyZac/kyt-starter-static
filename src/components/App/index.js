
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';

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
        { message }
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.content} onClick={() => onMessageClick()}>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageClick: () => {
      dispatch({
        type: 'UPDATE_MESSAGE'
      })
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp;
