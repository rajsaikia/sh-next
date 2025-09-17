import React from 'react';
import './FaqPage.css';

const FaqPage = () => {
  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions and troubleshoot issues.</p>
      </div>
      <div className="faq-grid">
        <div className="faq-card">
          <h2 className="faq-card-title">App Help</h2>
          <p className="faq-card-description">Learn how to use common app features and troubleshoot issues.</p>
          <button className="faq-card-button">View Articles</button>
        </div>
        <div className="faq-card">
          <h2 className="faq-card-title">Plan Help</h2>
          <p className="faq-card-description">Manage Trial, Free, or Premium plans including Duo, Family, and Student.</p>
          <button className="faq-card-button">View Articles</button>
        </div>
        <div className="faq-card">
          <h2 className="faq-card-title">Payment Help</h2>
          <p className="faq-card-description">Find answers for common payment and billing questions.</p>
          <button className="faq-card-button">View Articles</button>
        </div>
        <div className="faq-card">
          <h2 className="faq-card-title">Device Help</h2>
          <p className="faq-card-description">Troubleshoot the app with gaming devices, TVs, speakers, and more.</p>
          <button className="faq-card-button">View Articles</button>
        </div>
        <div className="faq-card">
          <h2 className="faq-card-title">Account Help</h2>
          <p className="faq-card-description">Get help with logging in, verification, and account settings.</p>
          <button className="faq-card-button">View Articles</button>
        </div>
        <div className="faq-card">
          <h2 className="faq-card-title">Community Help</h2>
          <p className="faq-card-description">Find guidance for getting started here in our Community.</p>
          <button className="faq-card-button">View Articles</button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
