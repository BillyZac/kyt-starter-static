
import React from 'react';
import { MenuItem } from 'taco-components';
import styles from './styles.scss';
import tacoStyle from 'taco-style/scss/main.scss';


function Examples() {
  return (
    <section>
      <h1>Examples</h1>

      <p className={styles.paragraph}>
        This page shows how to use the stuff in the Taco Components package.
      </p>

      <div className={styles['example-components']}>
        <MenuItem
          styles={tacoStyle}
          name="Taco yum"
          price="1.99"
        />
      </div>

    </section>
  );
}

export default Examples;
