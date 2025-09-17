
    import React from 'react';
    import './AboutPage.css';

    const AboutPage = () => {
      return (
        <div className="about-page">
          <div className="about-header">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">We are a team of passionate developers dedicated to creating amazing web experiences.</p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-number">1</div>
              <h2 className="feature-title">Build To Convert</h2>
              <p className="feature-description">Sales Pages can't just be pretty; they need to be conversion-focused. My sales page templates have 17 sections that are proven to boost conversions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">2</div>
              <h2 className="feature-title">Content Prompts</h2>
              <p className="feature-description">Each of my sales page templates come with content prompts that will help you write or refine your sales page copy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">3</div>
              <h2 className="feature-title">Easy to Customize</h2>
              <p className="feature-description">These Kajabi sales page templates are super easy to customize to your brand. All the changes can be done via a click from inside the builder.</p>
            </div>
          </div>
        </div>
      );
    };

    export default AboutPage;
    