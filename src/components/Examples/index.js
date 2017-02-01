
import React from 'react';
import { Paragraph } from 'taco-style';
import { MenuItem } from 'taco-components';

function Home() {
  return (
    <section>
      <h1>Examples</h1>
      
      <p className={Paragraph}>
        This page shows how to use the stuff in the Taco Components package. See: <pre>src/components/Examples/</pre>
      </p>

      <MenuItem
        name="Taco yum"
        price="1.99"
      />

    </section>
  );
}

export default Home;
