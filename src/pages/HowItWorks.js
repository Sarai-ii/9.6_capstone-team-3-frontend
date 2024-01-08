import React from "react";
import "../css/HowItWorks.css";

import questionImage from "../images/undraw_questions_re_1fy7.svg";

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <div id="how-it-works-container" className="text-container">
        <div id="title-container" className="title-container">
          <h1 id="how-it-works-title" className="how-it-works-title">
            How It Works
          </h1>
          <h3 id="how-it-works-description" className="how-it-works-description">
            Welcome to Happiness Exchange, where the joy of gift-giving brings
            people together. Here's your guide to getting started:
          </h3>
        </div>
        <div id="image-container" className="image-container">
          <img src={questionImage} alt="homepage-gift-image" />
        </div>
      </div>

      <section className="how-it-works-step">
        <h3 className="step-title">Register and Create Your Profile</h3>
        <p className="step-description">
          Begin your journey by creating an account on Happiness Exchange. Share
          your interests to help us match you with someone who suits your
          personality.
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Join Events</h3>
        <p className="step-description">
          Explore and participate in occasional events on the platform. Each
          event has a unique theme and a specific registration time frame.
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Fill Out the Matching Form</h3>
        <p className="step-description">
          Join an event by filling out a matching form. Your provided
          information ensures accurate matching based on shared interests. Your
          privacy is a top priority, and your information will be safeguarded.
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Matching Process</h3>
        <p className="step-description">
          Our advanced algorithms handle the matching process, pairing you with
          another user based on your profiles. Get ready for a delightful gift
          exchange!
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Gift Exchange</h3>
        <p className="step-description">
          Once matched, it's time to send a thoughtful gift within the specified
          budget. Personalize your gift to make the experience extra special!
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Proof of Gift and Deadlines</h3>
        <p className="step-description">
          Upload proof that you've sent the gift before the event deadline. Each
          event has specific deadlines for registration, matching, sending a
          gift, and providing proof.
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Information Safeguarded</h3>
        <p className="step-description">
          Your information is vital for the gift exchange and will only be
          shared with your matched user for the purpose of sending a gift. We
          prioritize the safeguarding of your data and ensure secure handling.
        </p>
        <p className="step-description">
          If you're concerned about providing your address, we understand. We
          offer alternatives, such as using a P.O. Box or a local pickup point,
          to ensure your comfort and security.
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Premium Accounts</h3>
        <p className="step-description">
          Look out for the near future when we introduce premium accounts.
          Subscribers will enjoy access to exclusive premium exchanges with
          higher minimums, ensuring a certain level of gifts.
        </p>
      </section>

      <section className="how-it-works-step">
        <h3 className="step-title">Notification Hub</h3>
        <p className="step-description">
          Stay updated with the convenience of a notification hub on your
          profile. Receive timely updates on registration, matching, and other
          important events within the community.
        </p>
      </section>
    </div>
  );
}

export default HowItWorks;
