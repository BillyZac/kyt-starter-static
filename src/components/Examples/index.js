
import React from 'react';
import { MenuItem } from 'taco-components';
import styles from './styles.scss';

function Examples() {
  return (
    <section>
      <h1>Examples</h1>

      <p className={styles.paragraph}>
        This page shows how to use the stuff in the Taco Components package. See: <pre>src/components/Examples/</pre>
      </p>

      <MenuItem
        name="Taco yum"
        price="1.99"
      />

    </section>
  );
}

export default Examples;
