"use client";

import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

export default function Process() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            circle.classList.add("in-view");
            obs.unobserve(circle);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(circle);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="process-section">
      <div className="process-arc-mobile">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/frame_222.svg" alt="" />
      </div>
      <div className="process-circle" ref={circleRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/circle.svg" alt="" />
      </div>

      <div className="process-content">
        <h2 className="process-heading">The Process</h2>

        <div className="process-body">
          <p>
            Engagement at this level requires mutual vetting to ensure strategic alignment.<br />
            While we can structure focused engagements around specific flashpoints (an M&amp;A transaction, a succession event), The Private Office is designed for continuous intelligence.
          </p>
          <p className="accent">
            This is about having a permanent second perspective on the decisions that cannot be delegated to your board or your advisors—the decisions where you are alone, and getting it right the first time is the only option.
          </p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="process-step-num">1.</div>
            <div className="process-step-title">INQUIRY</div>
            <div className="process-step-text">You (or your Chief of Staff) submit a brief dossier below.</div>
          </div>
          <div className="process-step">
            <div className="process-step-num">2.</div>
            <div className="process-step-title">VETTING</div>
            <div className="process-step-text">My Private Office will review your profile. If there is potential alignment, we will schedule a preliminary intelligence briefing.</div>
          </div>
          <div className="process-step">
            <div className="process-step-num">3.</div>
            <div className="process-step-title">RETAINER</div>
            <div className="process-step-text">Retainers are structured based on operational scope, deployment requirements, and institutional complexity. Engagements are priced to objective, as opposed to time.</div>
          </div>
        </div>
      </div>

      <div className="contact-area" id="contact">
        <div className="contact-card">
          <div className="contact-left">
            <h3 className="contact-title">
              <span className="coral">INITIATE</span><br />
              <span className="cream">CONTACT</span>
            </h3>
            <p className="contact-desc">
              Access to the Private Office is by invitation or vetted inquiry only. Please provide essential details to begin the protocol.
            </p>
            <div className="contact-badges">
              <div className="contact-badge">
                <svg className="contact-badge-icon" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 0L0 4.5V9.5C0 14.025 3.2 18.275 7.5 19C11.8 18.275 15 14.025 15 9.5V4.5L7.5 0ZM6 13.5L3 10.5L4.05 9.45L6 11.4L10.95 6.45L12 7.5L6 13.5Z" fill="#ffdda3" />
                </svg>
                <span className="contact-badge-text">ENCRYPTED</span>
              </div>
              <div className="contact-badge">
                <svg className="contact-badge-icon" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11 7H5V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7Z" fill="#ffdda3" />
                </svg>
                <span className="contact-badge-text">ABSOLUTE DISCRETION GUARANTEED</span>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
