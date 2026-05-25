"use client";

import { useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function CasesPage() {
  const tabsRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);

  useEffect(() => {
    const tabs = document.querySelectorAll<HTMLAnchorElement>(".tab-link");
    const cases = document.querySelectorAll<HTMLElement>(".case-study");
    tabsRef.current = tabs;
    const navHeight = 88;
    const tabNavHeight = 80;
    const offset = navHeight + tabNavHeight + 40;

    function updateActiveTab() {
      let current = "";
      cases.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset + 100) current = section.id;
      });
      tabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.tab === current);
      });
    }

    function handleTabClick(e: Event) {
      e.preventDefault();
      const tab = e.currentTarget as HTMLAnchorElement;
      const targetId = tab.getAttribute("href")?.substring(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - offset + 10;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));
    window.addEventListener("scroll", updateActiveTab, { passive: true });
    updateActiveTab();

    return () => {
      tabs.forEach((tab) => tab.removeEventListener("click", handleTabClick));
      window.removeEventListener("scroll", updateActiveTab);
    };
  }, []);

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="cases-hero">
        <div className="cases-hero-inner">
          <div className="cases-hero-label">Selected Briefings</div>
          <h1>
            <span className="gold">Engagements</span>
            <br />
            <span className="light">&amp; Operational Outcomes</span>
          </h1>
          <p className="cases-hero-subtitle">
            A curated record of high-stakes interventions across capital markets, succession dynamics, and organizational intelligence.
          </p>
        </div>
      </section>

      {/* TAB NAV */}
      <div className="tab-nav" style={{ backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <div className="tab-nav-inner">
          <a href="#case-dynasty" className="tab-link active" data-tab="case-dynasty">
            <span className="tab-link-label">Briefing 01</span>
            <span className="tab-link-title">Dynasty</span>
          </a>
          <a href="#case-psychology" className="tab-link" data-tab="case-psychology">
            <span className="tab-link-label">Briefing 02</span>
            <span className="tab-link-title">The Psychology of Yes</span>
          </a>
          <a href="#case-100m" className="tab-link" data-tab="case-100m">
            <span className="tab-link-label">Briefing 03</span>
            <span className="tab-link-title">€100M Read</span>
          </a>
          <a href="#case-meeting" className="tab-link" data-tab="case-meeting">
            <span className="tab-link-label">Briefing 04</span>
            <span className="tab-link-title">50% Exit Premium</span>
          </a>
        </div>
      </div>

      {/* CASE STUDIES */}
      <div className="cases-container">

        {/* CASE 1: DYNASTY */}
        <article className="case-study" id="case-dynasty">
          <div className="case-header">
            <div className="case-label">Briefing 01</div>
            <h2 className="case-title">A Dynasty Days From Unraveling</h2>
            <p className="case-subtitle">Tier-one discretion. Shared privately with families and their offices. Not for circulation.</p>
          </div>
          <div className="case-body-grid">
            <div className="case-text">
              <h3 className="section-heading">Context</h3>
              <p>Divorce often presents itself as the obviously correct decision. The prospect carries a particular kind of conviction — freedom, relief, a future that finally looks like one&apos;s own. What this conviction tends to obscure is that two people who have drifted apart over years rarely arrive at the decision with accurate models of each other, of themselves, or of what the dissolution will actually produce. The vision of liberation is real. Its alignment with reality is the variable.</p>
              <p>Lily&apos;s work does not consist of telling clients what they want to hear. It consists of describing — with precision — what she believes is actually happening and what is actually about to happen. When the description proves accurate, the conversation can continue. When the conversation can continue, options reappear that had seemed foreclosed. This is difficult for clients who have arrived at firm conclusions, which is most of them. It is also, in her experience, the only thing that works.</p>

              <h3 className="section-heading">Engagement</h3>
              <p>Settlement contracts drafted. Signature scheduled within the month. The family&apos;s name sits in European politics and industry. Lily was retained at the eleventh hour, at the recommendation of a single advisor who had seen her work in an unrelated matter.</p>

              <h3 className="section-heading">Initial assessment</h3>
              <p>Within the first session, Lily&apos;s analysis diverged from the prevailing one. The client saw liberation. Lily, in her reading, saw the opposite. She named the specific second-order consequences she expected, and the order in which they would arrive. The client dismissed the read as impossible. Several of the consequences arrived within two weeks, in sequence. Trust followed.</p>

              <h3 className="section-heading">Diagnosis</h3>
              <p>The opposing spouse, contrary to the picture assembled by counsel, was not pursuing advantage. They were attempting — through the only channel still open to them, their attorneys — to preserve a marriage they had concluded was already lost. Each party had been negotiating against a version of the other that did not exist. The litigation posture was not the underlying problem. It was the visible expression of two people who had stopped being able to speak to each other, surrounded by professionals whose mandate was to escalate.</p>

              <h3 className="section-heading">Intervention</h3>
              <p>Conventional therapeutic channels were not working. The family&apos;s visibility made confidentiality impossible through any standard practice; intake records and scheduling alone represent a disclosure risk that no reputable clinic is structured to eliminate. Lily&apos;s practice is built around the absence of that infrastructure. Over the months that followed, she worked with each spouse individually, then jointly, hearing each party&apos;s actual position in a setting where neither&apos;s words could be leaked, repeated, or reframed by counsel. The litigation track dissolved.</p>

              <h3 className="section-heading">Outcome at seven years</h3>
              <p>The marriage is intact. New domains of shared purpose — philanthropic and operational — have been identified and built out. The succession plan proceeded on the family&apos;s timeline rather than a court&apos;s. The children were spared a public unwinding and the documentary record it would have created. No element of the matter entered the press.</p>

              <div className="pull-quote">Seven years later, they remain married. New areas of shared purpose were identified and developed. The family legacy is intact. The children were spared a public unwinding.</div>

              <h3 className="section-heading">What this case is not</h3>
              <p>Lily does not commit to reconciliation, preservation, or any predetermined outcome. She commits to an honest reading of what she believes the outcome will be, and the discipline to pursue it — or, where a different path better serves the family, to guide everyone there with as much grace as the situation allows. Often, the right answer is separation. Those cases end well, too, by different measures.</p>

              <h3 className="section-heading">Where Lily works</h3>
              <p>Multi-generational families navigating decisions whose consequences ripple across generations — succession, alliance, separation, the choices one member makes that reshape everyone. The work is private, sustained, and restorative — conducted across the family as a whole, including the relationships within it and the dynamics between them.</p>

              <h3 className="section-heading">What is restored</h3>
              <p>Time. Clarity. The capacity for joy. Cohesion across generations.</p>

              <h3 className="section-heading">The next step is a conversation</h3>
              <p>Lily accepts a small number of engagements each year, and only after a private candidacy review: a confidential one-hour conversation, no materials requested, no obligation on either side, in which she assesses whether her work is the right instrument for the situation.</p>
            </div>
            <aside className="case-sidebar-wrap">
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Operational Outcome</span>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">7+</span> <span className="unit">years</span></div>
                  <div className="outcome-row-desc">Marriage preserved</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">3</span> <span className="unit">months</span></div>
                  <div className="outcome-row-desc">From intervention<br />to reconciliation path</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">0</span> <span className="unit">press</span></div>
                  <div className="outcome-row-desc">Public embarrassment averted</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="label">Succession preserved</span></div>
                  <div className="outcome-row-desc">Litigation halted<br />Family legacy maintained</div>
                </div>
                <div className="outcome-summary-text">Seven years later, the marriage remains intact. New areas of shared purpose were identified and developed. The succession plan continued on the family&apos;s timeline, not the court&apos;s. The children were protected from public exposure, and no element of the matter entered the press.</div>
              </div>
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Engagement Scope</span>
                </div>
                <div className="outcome-tags">Family succession intelligence · High-confidentiality marital intervention · Individual and joint spouse work · Litigation de-escalation · Legacy protection · Private family dynamics assessment</div>
              </div>
            </aside>
          </div>
        </article>

        {/* CASE 2: PSYCHOLOGY */}
        <article className="case-study" id="case-psychology">
          <div className="case-header">
            <div className="case-label">Briefing 02</div>
            <h2 className="case-title">The Psychology of Yes</h2>
            <p className="case-subtitle">Case study · Tier-one discretion. Shared privately with founders and their offices. Not for circulation.</p>
          </div>
          <div className="case-body-grid">
            <div className="case-text">
              <h3 className="section-heading">Context</h3>
              <p>A founder raising at scale faces a problem the standard advisory stack is not built to solve. Five investors express interest. Conversations advance. Decks are reviewed, references taken, terms sketched. Nothing closes. Every prospect looks like an equal yes or an equal no, and the signals available — warmth in a meeting, speed of follow-up, depth of diligence questions — are indistinguishable from politeness. This is the founder&apos;s version of a problem Lily&apos;s practice is designed for: a decision that cannot be made in public, with advisors who cannot be told everything.</p>

              <h3 className="section-heading">Engagement</h3>
              <p>Anjan Katta is the founder of Daylight Computer Company, a venture built on de-inventing the modern personal computer. Stanford pedigree, a working prototype, a successful production run, early angel capital from the founders of WordPress and Notion, and a category the rest of the industry considered closed. He came to Lily through a referral — no engagement letter, no specific ask, a session booked out of curiosity.</p>

              <h3 className="section-heading">Initial assessment</h3>
              <p>Lily worked from his date of birth and his first name, with no further context. In the first session she described aspects of his life and character that no one outside his closest circle could have known. In the second, she gave him a reading of his trajectory: that what he was building required him to do something no one before him had done, that the people around him would tell him it was impossible, and that the conventional path was not available to him. The reading did not change his mind. It confirmed, from outside his own conviction, what he had already chosen.</p>

              <h3 className="section-heading">Diagnosis</h3>
              <p>Anjan presented the situation in plain terms. A working prototype. A successful production run. Five prospective investors, all engaged, none committed. He did not need help pitching. He needed a way to see who was real. The standard tools — warm introductions, reference checks, partner-level diligence — surface what investors say, not who investors are.</p>

              <h3 className="section-heading">Intervention</h3>
              <p>Anjan provided five dates of birth. Lily built a structural read on each: ambitions, risk tolerance, decision patterns, the specific shape of their compatibility with Anjan as an operator and as a person. Each prospect was assessed across more than seventy variables of fit, individually and as a combined trajectory study with Anjan over time.</p>
              <p>One stood out. Two people who shared a fundamental drive — both pulled toward building something genuinely new, both oriented toward category leadership rather than portfolio diversification. The alignment was not visible from the surface. It was visible in the read.</p>
              <p>The prospect was part of an investment group. Anjan&apos;s engagement had run, as engagements at this level do, through the senior partner. Lily redirected: the path, in her reading, ran through a junior member of the team. She described his character, identified the specific points of common ground with Anjan outside the deal entirely, and gave a direct instruction — not a pitch meeting, not a deck review, time spent together as two people with something in common.</p>
              <p>Anjan acted on it. As the relationship developed, Lily provided a full map of the partnership: where the alignment was strongest, where it would be tested over time, what each side would need to understand to protect what they were building.</p>

              <h3 className="section-heading">Outcome</h3>
              <p>The investment closed at $10mm. Daylight has scaled past its early production constraints; the company has generated tens of millions of annual revenue, with demand outpacing supply through successive runs. The partnership Lily mapped has not merely held — it has thrived under the kinds of pressures she identified in advance.</p>

              <h3 className="section-heading">A note on the work</h3>
              <p>Lily does not pick investors. What she provided was a read at a resolution the standard tools cannot reach — first on Anjan himself, then on the prospects, then on the partnership that would result. Each layer confirmed the previous one. Anjan&apos;s decision to act was a response to that compounding evidence. He is a rare founder — not only for what he is building, but for his willingness to seek unconventional inputs, hold them against his own judgment, and act decisively when the two align. It was a privilege to support him at this inflection.</p>

              <div className="pull-quote">She ran each prospect across more than seventy variables of fit, producing both individual assessments and a combined trajectory study for each potential partnership. Out of the five, one stood out clearly.</div>

              <h3 className="section-heading">Where Lily works for founders</h3>
              <p>Capital decisions, key hires, cofounder dynamics, board composition, succession — the moments where crucial decisions carry asymmetric consequences and conventional tools leave the outcome largely to chance. Her work produces step-change outcomes well beyond the conventional path.</p>

              <h3 className="section-heading">What is restored</h3>
              <p>Conviction. Time. The ability to distinguish signal from politeness. The decisions you cannot afford to get wrong, made with the read and strategy you cannot otherwise get.</p>

              <h3 className="section-heading">The next step is a conversation, not a commitment.</h3>
              <p>Lily accepts a small number of engagements each year, and only after a private candidacy review: a confidential one-hour conversation, no materials requested, no obligation on either side. Where her work is not the right instrument, she will say so — and where possible, point you toward who can.</p>
            </div>
            <aside className="case-sidebar-wrap">
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Operational Outcome</span>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">$10MM</span> <span className="unit">raised</span></div>
                  <div className="outcome-row-desc">Lead investor strategy successfully closed</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">5</span> <span className="unit">investors</span></div>
                  <div className="outcome-row-desc">Prospective investors analyzed in depth</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">70+</span> <span className="unit">variables</span></div>
                  <div className="outcome-row-desc">Compatibility markers mapped across ambition, risk, timing and decision dynamics</div>
                </div>
                <div className="outcome-summary-text">What began as a founder struggling to distinguish genuine conviction from investor theater became a deeply targeted capital alignment strategy. Rather than optimizing pitch mechanics or fundraising process, the engagement focused on identifying where authentic long-term compatibility existed — both professionally and personally. The resulting partnership did not simply close the round; it became part of the company&apos;s long-term trajectory as Daylight scaled into tens of millions in annual revenue with demand consistently outpacing supply.</div>
              </div>
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Engagement Scope</span>
                </div>
                <div className="outcome-tags">Founder trajectory analysis · Investor compatibility assessment · Capital strategy advisory · Partnership trajectory mapping · Decision-pattern analysis · Long-term alignment evaluation · High-confidentiality founder advisory · Fundraising signal interpretation · Strategic relationship guidance · Asymmetric decision support</div>
              </div>
            </aside>
          </div>
        </article>

        {/* CASE 3: 100M READ */}
        <article className="case-study" id="case-100m">
          <div className="case-header">
            <div className="case-label">Briefing 03</div>
            <h2 className="case-title">The €100M Read:<br />Cracking Asia from the Negotiating Table</h2>
            <p className="case-subtitle">Case study · Tier-one discretion. Shared privately with principals and their offices. Not for circulation.</p>
          </div>
          <div className="case-body-grid">
            <div className="case-text">
              <h3 className="section-heading">Context</h3>
              <p>A CEO running an established multi-billion-euro business faces a different problem than a founder raising a round. The decisions are larger, the counterparties are more polished, and the cost of choosing wrong is not a missed quarter but a missed market — sometimes permanently. In a market separated from headquarters by language, distance, and regulatory culture, standard diligence is incomplete by definition. Surface signals — credentials, capitalization, the warmth of a meeting — do not distinguish the partner who will build with you from the one who will quietly cost you the market. This is the operator&apos;s version of a problem Lily&apos;s practice is designed for: a decision that cannot be made in public, with advisors who cannot be told everything.</p>

              <h3 className="section-heading">Engagement</h3>
              <p>The principal is the CEO of a multi-billion-euro European company that had built a substantial international footprint but had not yet established Asia. Japan was the prize: the highest concentration of qualified demand, a customer base already drawn to the product, and a regulatory environment strict enough to keep casual entrants out. He needed not a legal partner but an operating one, and the cost of choosing wrong was a market closed for a generation.</p>
              <p>He had already worked with Lily on a personal matter and seen the read play out. When the Asia decision arrived, he gave her the candidate pool and asked her to tell him who to trust.</p>

              <h3 className="section-heading">Initial assessment</h3>
              <p>She received names and dates of birth, nothing more. Lily had never worked with Japanese characters before; she converted each one into her system manually. No titles, no org charts, no context about who was senior, junior, decision-maker, or gatekeeper. She worked the profiles blind.</p>

              <h3 className="section-heading">Diagnosis</h3>
              <p>Multiple parties, all credentialed, all capitalized, each proposing a different structure — equity, revenue share, operational control. The proposals were not comparable on their face. Conventional diligence could surface what each candidate said. It could not surface who they were, what they actually wanted, or how they would behave eighteen months into an operating partnership when the original terms were tested.</p>

              <h3 className="section-heading">Intervention</h3>
              <p>Lily built a dossier on each candidate. Not résumés — psychological architectures. For each person: what business they were genuinely suited for, what drew them to this one, where their character was reliable, where it would fail under pressure, and what would not surface in a pitch meeting or a dinner but would surface deep into the relationship. She then cross-matched each candidate against the CEO&apos;s own profile — not as a personality exercise but as a business question: which of these people will this specific CEO be able to build with, negotiate with, and trust across a language barrier and a ten-thousand-kilometer distance.</p>
              <p>The CEO could see the insight on paper but could not execute against it in live negotiations. He proposed a move Lily had not made before: bring her into the room. Not as a consultant introduced to the other side. As a silent instrument. She would sit beside him, having already profiled every person at the table, and read the room in real time — who was telling the truth, who was posturing, where the actual flexibility was.</p>
              <p>She prepared the profiles cold. She had never met any of the candidates in person, but she knew their patterns before they walked in.</p>
              <p>The negotiations ran through professional interpreters. The translation pause — the gap between statement and translation that for most people is dead air — became the operating channel. During each pause, Lily was guiding him: ask this. Push here. Pull back. He is not saying what he means; here is what he actually wants.</p>
              <p>One of the people at the table was not what he appeared to be. A senior figure inside the CEO&apos;s own company had positioned himself as a translator, a neutral bridge between the parties. Lily had flagged him in advance: not trustworthy, not serving the principal. Mid-negotiation she caught it live. The internal translator was pivoting the conversation to insert terms that gave him a role in the deal structure — terms the Japanese counterparty had not asked for. Lily identified the deviation as it happened. The CEO acted. The breach was closed before it could embed.</p>
              <p>By the end of the process — profiling, compatibility analysis, real-time reads, red flags surfaced and removed — the candidates with no viable long-term future were eliminated, and the right partners rose to the top by confirmed fit rather than by elimination.</p>

              <h3 className="section-heading">Outcome</h3>
              <p>The CEO signed in Japan. The partners proved effective from day one. With the playbook established and Lily&apos;s continued involvement across India and China, the broader Asia program produced a €100M revenue increase within twelve months. The work continued: in the year that followed, Lily was asked to apply the same read to the company&apos;s corporate structure. Headcount fell from 90 to 45, with margins and revenue both rising in the year after.</p>

              <h3 className="section-heading">A note on the work</h3>
              <p>Lily did not negotiate the deal. She did not select the partners. The decisions were the CEO&apos;s, the relationships were his to build, and the company is his to run. What she provided was a read at a resolution the standard tools cannot reach, delivered first on paper and then in the room as it was happening. By the time the decisions were made, the CEO was acting on a track record, not a leap of faith. He brought her in because he had seen the read work before; he brought her further in because it kept working.</p>

              <div className="pull-quote">She would sit beside him in meetings and, because she had already profiled every person at the table, she would read the room in real time. Who was telling the truth? Who was posturing? Where the actual flexibility was.</div>

              <h3 className="section-heading">Where Lily works for principals at this stage</h3>
              <p>Market entry, partnership selection, cross-border negotiation, internal trust questions at the senior level, and the structural decisions — who stays, who goes, what the company actually needs — that determine operating leverage in the years that follow. Her work brings clarity to the decisions where conventional processes often fail.</p>

              <h3 className="section-heading">What is restored</h3>
              <p>A clear read on the people across the table, and across the hall. The ability to distinguish a partner from a passenger before the contract closes. Operating leverage.</p>

              <h3 className="section-heading">The next step is a conversation, not a commitment.</h3>
              <p>Lily accepts a small number of engagements each year, and only after a private candidacy review: a confidential one-hour conversation, no materials requested, no obligation on either side. Where her work is not the right instrument, she will say so — and where possible, point you toward who can.</p>

              <p className="closing-note">Identifying details have been omitted at the principal&apos;s request.</p>
            </div>
            <aside className="case-sidebar-wrap">
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Operational Outcome</span>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">€100M</span></div>
                  <div className="outcome-row-desc">Revenue creation in 12 months</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">30</span> <span className="unit">candidates</span></div>
                  <div className="outcome-row-desc">Built teams and revenue in three new Asian markets: Japan, India, and China</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">50%</span></div>
                  <div className="outcome-row-desc">Corporate headcount reduced from 90 to 45 while margins and revenue rose</div>
                </div>
                <div className="outcome-summary-text">What began as a high-stakes Asia market-entry decision became a live operating advantage at the negotiating table. Lily&apos;s work helped the CEO distinguish credible long-term partners from polished surface signals, identify hidden internal risk, and move forward with partners who could actually build the market. The same read later informed structural decisions that improved operating leverage across the company.</div>
              </div>
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Engagement Scope</span>
                </div>
                <div className="outcome-tags">Market entry intelligence · Cross-border partner assessment · Blind candidate profiling · CEO-counterparty compatibility analysis · Real-time negotiation read · Internal trust risk detection · Partnership selection support · Asia expansion strategy · Corporate structure assessment · High-confidentiality principal advisory</div>
              </div>
            </aside>
          </div>
        </article>

        {/* CASE 4: ONE MEETING */}
        <article className="case-study" id="case-meeting">
          <div className="case-header">
            <div className="case-label">Briefing 04</div>
            <h2 className="case-title">One Meeting, 50% Exit Premium</h2>
            <p className="case-subtitle">Case study · Tier-one discretion. Shared privately with principals and their offices. Not for circulation.</p>
          </div>
          <div className="case-body-grid">
            <div className="case-text">
              <h3 className="section-heading">Context</h3>
              <p>A fund holding an illiquid private position in a sector with a credible strategic acquirer faces a particular kind of stall. The thesis is right. The buyer is real. The deal team has been working the relationship for months, sometimes years. Conversations are warm. Nothing closes. The realistic outcome at this stage, for most positions, is an exit at cost — if you can exit at all. The premium is not in the asset. The premium is in reaching the one person inside the acquirer who can move it, in the form they will move it in, at the moment they are ready to move. Conventional process — six contacts, regular outreach, building consensus across the org chart — is structurally incapable of finding that. This is the investor&apos;s version of a problem Lily&apos;s practice is designed for: a decision that cannot be made in public, with advisors who cannot be told everything.</p>

              <h3 className="section-heading">Engagement</h3>
              <p>The principal is the managing partner of an investment fund holding a meaningful position in a private infrastructure asset he had personally championed for years — a permitted and processed platform in a sector a $3 trillion market cap technology company was actively building toward. The fund&apos;s deal team had been working six contacts inside the acquirer for over a year. None of the conversations were converging. Lily had previously worked with the managing partner on complex personal dynamics, and the read had played out as she described. When the strategic process stalled, he gave her the candidate pool and asked her to tell him who to trust.</p>

              <h3 className="section-heading">Initial assessment</h3>
              <p>He provided dates of birth for the six contacts. Nothing else. No roles, no titles, no context about who was senior or junior, decision-maker or gatekeeper. She worked the profiles blind.</p>

              <h3 className="section-heading">Diagnosis</h3>
              <p>Five of the six would not move. Lily said so directly. Not because they were unwilling — because they were not the people inside the acquirer who actually made this kind of decision. A year of patient outreach in their direction would produce another year of patient silence. It was a verdict on twelve months of the deal team&apos;s work, delivered with no context and without hedging.</p>
              <p>The sixth was the channel. Not the senior figure by title. Not the obvious decision-maker by org chart. The managing partner pushed back: this person isn&apos;t making decisions; there&apos;s no leverage to push anything. Lily told him to ignore that read. The pattern in the profile said this contact was the actual decision-maker, independent of title and independent of how the acquirer was structured on paper. She also identified something the org chart could not show: a personal disposition aligned with the one thing the managing partner cared about most — protecting the operating team that had built the company.</p>

              <h3 className="section-heading">Intervention</h3>
              <p>Lily told him to wait. Based on her read of the contact&apos;s own forecast for the year, there was a specific window in which the outreach would land. He held.</p>
              <p>When the window opened, she directed the form of the email — what it should say, what it should not say, the tone to strike. The contact responded and indicated he was ready to talk. The managing partner offered to fly across the country to meet in person. Lily agreed and directed the format: not the office, a restaurant, informal, not a pitch.</p>
              <p>Then she did the most important part of the work. She walked him through the conversation itself — the contact&apos;s actual interests and passions beyond the deal, where to find the genuine commonality that would let the meeting begin as a connection between two people. Don&apos;t jump to the deal. Find the connection first. Earn it.</p>
              <p>She also coached his posture. After a year of stalled effort, the managing partner was carrying that year into every room. People can sense desperation, Lily told him. Whatever else he brought to the meeting, he could not bring that. He scenario-played the conversation with her in advance. By the time he flew out, he was not pitching a deal. He was meeting a person whose work he understood and whose interests he shared.</p>
              <p>The meeting went exactly as Lily had described it would. The contact became his champion inside the acquirer.</p>

              <h3 className="section-heading">Outcome</h3>
              <p>Operating-team continuity is rarely a line item in a strategic acquirer&apos;s diligence. It is a thing sellers ask for and rarely receive. Reaching a decision-maker who personally valued it changed the conversation entirely — team protection became a deal term rather than a request, and once both sides were aligned on what the transaction was actually accomplishing, there was room to expand the value of the deal itself.</p>
              <p>The sale closed at a 50% premium to its prior valuation. An asset that had been stuck for over a year moved within weeks of the right meeting. The operating team&apos;s future was secured.</p>

              <h3 className="section-heading">A note on the work</h3>
              <p>Lily designed the play, top to bottom. The managing partner executed it — he made the decision to act against his own deal team&apos;s read, flew across the country, held the conversation in the room, absorbed the coaching on his own mindset, and re-entered the meeting as a different version of himself than the one who had spent a year unable to close. The play required both. Neither alone would have produced the outcome.</p>

              <div className="pull-quote">Five of the six would not move. Lily said so directly. It was a verdict on twelve months of the deal team&apos;s work, delivered with no context and without hedging.</div>

              <h3 className="section-heading">Where Lily works for principals at this stage</h3>
              <p>Strategic exits, transaction structuring, identifying the actual decision-maker inside a counterparty, timing of outreach, and the moments where a stalled process needs a read on whether the relationships being worked are the relationships that will close.</p>

              <h3 className="section-heading">What is restored</h3>
              <p>Optionality on a position that had none. Time. The premium that exists, in any sufficiently complex transaction, between the deal that gets done and the deal that gets done right.</p>

              <h3 className="section-heading">The next step is a conversation, not a commitment.</h3>
              <p>Lily accepts a small number of engagements each year, and only after a private candidacy review: a confidential one-hour conversation, no materials requested, no obligation on either side. Where her work is not the right instrument, she will say so — and where possible, point you toward who can.</p>

              <p className="closing-note">Identifying details have been omitted at the principal&apos;s request.</p>
            </div>
            <aside className="case-sidebar-wrap">
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Operational Outcome</span>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">50%</span></div>
                  <div className="outcome-row-desc">Premium to prior valuation target</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">$3T</span></div>
                  <div className="outcome-row-desc">Led the strategic close of a $3 trillion acquirer</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">1</span> <span className="unit">meeting</span></div>
                  <div className="outcome-row-desc">Resolved a 12-month deadlock in a single meeting. Exposed the unexpected key stakeholder who closed the deal</div>
                </div>
                <div className="outcome-row">
                  <div className="outcome-row-key"><span className="num">50%</span></div>
                  <div className="outcome-row-desc">Leveraged a team-retention mandate to drive a 50% valuation uplift</div>
                </div>
                <div className="outcome-summary-text">What appeared externally as a slow-moving strategic process was, in reality, a targeting problem. The relationship network being worked for over a year was not connected to the person capable of moving the transaction. Lily identified the correct channel, the timing window, the interpersonal alignment, and the psychological posture required to reopen the process from an entirely different position. Once the right relationship was activated, the transaction moved rapidly and with materially improved economics.</div>
              </div>
              <div className="case-sidebar">
                <div className="outcome-label-wrapper">
                  <span className="outcome-label">Engagement Scope</span>
                </div>
                <div className="outcome-tags">Strategic exit advisory · Acquirer decision-maker identification · Blind counterparty profiling · Transaction timing strategy · Outreach positioning · Negotiation psychology coaching · Relationship-channel analysis · Seller leverage optimization · High-confidentiality principal advisory · Operating-team continuity strategy</div>
              </div>
            </aside>
          </div>
        </article>

      </div>

      {/* SELECTIVE SECTION */}
      <section className="selective-section">
        <div className="selective-arch">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/circle.svg" alt="" />
        </div>
        <div className="selective-inner">
          <div className="selective-label">Request a Private Briefing</div>
          <h2 className="selective-text">Engagements are selective<br />and by referral only.</h2>
          <p className="selective-sub">Limited intake for the 2026/27 cycle.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-area" id="contact">
        <div className="contact-card">
          <div className="contact-left">
            <h3 className="contact-title">
              <span className="coral">INITIATE</span>
              <br />
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
      </section>

      <Footer />
    </>
  );
}
