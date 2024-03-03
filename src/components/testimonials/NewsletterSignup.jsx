import React, { useState } from 'react';
import './cards.scss';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with email:', email);
  };

  return (
    <div className="block newsletter">
      <div className="content">
        <form
          className="form subscribe"
          noValidate
          action="https://www.lafurniturestore.com/lafnewsletter/subscriber/new/"
          method="post"
          id="newsletter-validate-detail"
          onSubmit={handleSubmit}
        >
          <div className="field newsletter">
            <div className="text-holder">
              <label className="label" htmlFor="newsletter">
                <span>Subscribe to our newsletter</span>
              </label>
              <p>Be the first to receive information about new products, promotions and great offers</p>
            </div>
            <div className="control">
              <div className="input-holder">
                <input
                  name="email"
                  type="email"
                  id="newsletter"
                  data-lpignore="true"
                  autoComplete="off"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="action subscribe primary" title="Subscribe" type="submit">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSignup;
