"use client";

import { useState } from "react";
import "./love-letter.css";

const hearts = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37 + 9) % 100}%`,
  delay: `${(i % 9) * -1.7}s`,
  duration: `${10 + (i % 6) * 2}s`,
  size: `${12 + (i % 4) * 5}px`,
}));

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [surprise, setSurprise] = useState(false);

  return (
    <main className="love-page">
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />
      <div className="floating-hearts" aria-hidden="true">
        {hearts.map((heart, i) => (
          <span
            className="floating-heart"
            key={i}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
            }}
          >
            {i % 3 === 0 ? "♡" : "♥"}
          </span>
        ))}
      </div>

      <section className={`love-card ${opened ? "is-open" : ""}`}>
        <p className="eyebrow">A LITTLE SOMETHING FOR YOU</p>
        <div className="tiny-heart" aria-hidden="true">♥</div>
        <h1>For Ellie<span className="title-heart"> ♡</span></h1>
        <p className="intro">
          Just a small reminder, for today and for all the days you need one.
        </p>

        {!opened ? (
          <div className="envelope-area">
            <button
              className="envelope-button"
              onClick={() => setOpened(true)}
              aria-label="Open your letter"
            >
              <span className="envelope">
                <span className="envelope-flap" />
                <span className="envelope-heart">♥</span>
                <span className="envelope-letter">
                  <span>for you</span>
                </span>
              </span>
              <span className="open-prompt">Tap to open your letter</span>
            </button>
          </div>
        ) : (
          <div className="letter-reveal" key="letter">
            <div className="letter-paper">
              <div className="paper-heart">♡</div>
              <p className="letter-greeting">Hey, Ellie,</p>
              <p className="main-message">I’m always proud of you.</p>
              <p>
                Even on the days when things feel heavy, when you’re tired,
                or when you don’t give yourself enough credit — I hope you
                remember how much you’re doing and how much it matters.
              </p>
              <p>
                You don’t have to be perfect, and you don’t have to have
                everything figured out. You deserve kindness on the hard days,
                too. I’m cheering for you, always. ♡
              </p>
              <p className="letter-signoff">A little reminder, just for you.</p>
            </div>

            <button
              className="surprise-button"
              onClick={() => setSurprise((value) => !value)}
              aria-expanded={surprise}
            >
              {surprise ? "Keep this little secret tucked away ♡" : "One more little thing…"}
              <span aria-hidden="true">{surprise ? " ↑" : " ↓"}</span>
            </button>

            {surprise && (
              <div className="surprise-note">
                <span className="surprise-sparkle" aria-hidden="true">✧</span>
                <p className="surprise-label">YOUR LITTLE SECRET MESSAGE</p>
                <p className="surprise-text">
                  If you ever forget how wonderful you are, come back here.
                  This page will be waiting to remind you: you are loved,
                  you matter, and I believe in you. Always. 💗
                </p>
                <span className="surprise-end">♡ ♡ ♡</span>
              </div>
            )}
          </div>
        )}

        <p className="footer-note">Made with love, just for you.</p>
      </section>
      <p className="bottom-note">a little corner of the internet, just for Ellie ♡</p>
    </main>
  );
}
