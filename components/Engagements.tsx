"use client";

import { useState, useEffect, useRef } from "react";

const cards = [
  {
    title: "A Dynasty Days From Unraveling",
    text: "A prominent European family was weeks away from signing divorce settlement papers. The separation would have exposed succession, children, and legacy to public scrutiny. Lily was brought in at the eleventh hour. Her assessment challenged the legal narrative: the dispute was not about advantage, but about two people misreading each other through escalating counsel.",
    result: "Within weeks, the litigation track dissolved. Over three months, private individual and joint work restored communication and created a path back to shared purpose.",
    stats: [
      { num: "7", unit: "years", desc: "Marriage intact\nfamily legacy preserved" },
      { num: "3", unit: "months", desc: "From intervention\nto reconciliation path" },
    ],
    link: "/cases#case-dynasty",
  },
  {
    title: "The Psychology\nOf Yes",
    text: "A founder building against industry consensus had five engaged investors, but no commitment. Every signal looked the same from the surface — warm meetings, thoughtful diligence, polite momentum. Lily was brought in to identify who was truly aligned.",
    result: "Working from blind profiles alone, she mapped each prospect across 70+ variables of fit. One relationship stood apart. The round closed at $10MM, and the partnership continued to strengthen as the company scaled.",
    stats: [
      { num: "$10M", unit: "raise", desc: "Lead investor strategy closed" },
      { num: "5", unit: "investors", desc: "Analyzed in depth" },
    ],
    link: "/cases#case-psychology",
  },
  {
    title: "The\n€100M Read",
    text: "A European CEO entering Asia faced multiple qualified partners, no clear signal, and the risk of choosing wrong in a market where failure could close the opportunity for years. Lily was brought in to identify who could actually be trusted.",
    result: "Working from blind profiles, she mapped each candidate against the CEO — surfacing alignment, hidden risk, and negotiation patterns. The company entered Japan, expanded across India and China, and generated €100M in additional revenue within twelve months.",
    stats: [
      { num: "€100M", unit: "revenue", desc: "Created across Asia\nwithin 12 months" },
      { num: "30", unit: "candidates", desc: "Blind-profiled with no\ntitles or org charts" },
    ],
    link: "/cases#case-100m",
  },
  {
    title: "One Meeting,\n50% Exit Premium",
    text: "A fund had spent more than a year working six contacts inside a strategic acquirer, but nothing was closing. The buyer was real, the asset was credible, and the conversations were warm — but the process had stalled. Lily was brought in to identify who could actually move the transaction. Working from blind profiles alone, she identified that five contacts would not move and that the sixth was the true channel. With the right timing, message, and meeting format, one conversation reopened the process. The sale closed within weeks at a 50% premium, with the operating team protected as part of the deal.",
    result: null,
    stats: [
      { num: "50%", unit: "premium", desc: "Achieved above prior\nvaluation" },
      { num: "1", unit: "meeting", desc: "Closed a 12+ month\nstalled process" },
    ],
    link: "/cases#case-meeting",
  },
];

export default function Engagements() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(cards.length / perPage);
  const safePage = Math.min(page, totalPages - 1);
  const visibleCards = cards.slice(safePage * perPage, (safePage + 1) * perPage);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && safePage < totalPages - 1) setPage(safePage + 1);
      if (diff < 0 && safePage > 0) setPage(safePage - 1);
    }
  }

  return (
    <section className="engagements-section">
      <div className="engagements-inner">
        <div className="engagements-icon" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/orna_1.svg" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/orna_2.svg" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/orna_3.svg" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/orna_4.svg" alt="" />
        </div>

        <h2 className="engagements-heading">
          <span className="gray">SELECTED</span> <span className="coral">ENGAGEMENTS</span>
        </h2>

        <div className="engagements-carousel-wrapper">
          <div
            className="engagements-carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {visibleCards.map((card) => (
              <div key={card.title} className="engagement-card visible">
                <div className="engagement-card-title">
                  {card.title.split("\n").map((line, j, arr) => (
                    <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                  ))}
                </div>
                <p className="engagement-card-text">{card.text}</p>
                {card.result && <p className="engagement-card-result">{card.result}</p>}
                <div className="engagement-card-outcome-label">OUTCOME</div>
                <div className="engagement-card-stats">
                  {card.stats.map((stat, j) => (
                    <div key={j} className="stat">
                      <div>
                        <span className="stat-num">{stat.num} </span>
                        <span className="stat-unit">{stat.unit}</span>
                      </div>
                      <div className="stat-desc">
                        {stat.desc.split("\n").map((line, k, arr) => (
                          <span key={k}>{line}{k < arr.length - 1 && <br />}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <a href={card.link} className="engagement-card-btn">READ THE CASE STUDY</a>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button
              className={`carousel-arrow prev${safePage > 0 ? " active" : ""}`}
              aria-label="Previous"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M10 2L2 10L10 18" stroke="#ffdda3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="carousel-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === safePage ? " active" : ""}`}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              className={`carousel-arrow next${safePage < totalPages - 1 ? " active" : ""}`}
              aria-label="Next"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M2 2L10 10L2 18" stroke="#ffdda3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
