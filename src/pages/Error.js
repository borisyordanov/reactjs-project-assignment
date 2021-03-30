import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <img
          src="https://i.pinimg.com/originals/24/8c/c4/248cc4eec11b158d6eaf49c7088022a4.jpg"
          alt="404 not found"
        />
        <Link to="/" className="button">
          back home
        </Link>
      </div>
    </section>
  );
}

export default Error;
