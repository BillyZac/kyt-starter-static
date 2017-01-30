
import React from 'react';
import { Paragraph } from 'taco-style';

function Home() {
  return (
    <section>
      <p className={Paragraph}>
        Welcome to the <strong>Taco Starter-kyt</strong>.
        This starter kyt should serve as the base for an advanced, delicious Taco app.
      </p>
      <p className={Paragraph}>
        Check out the Tools section for an outline of the libraries that
        are used in this Starter-kyt.
      </p>
    </section>
  );
}

export default Home;
