export default function Principles() {
  return (
    <section className="principles-section">
      <div className="sword-divider">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/sword.svg" alt="" width={40} height={211} />
      </div>
      <div className="principles-inner">
        <div className="principles-heading">WE OPERATE ON THREE PRINCIPLES</div>

        <div className="principles-top-row">
          <div className="principle-card">
            <div className="principle-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/Capa_1.svg" alt="" width={64} height={62} />
            </div>
            <div className="principle-title">
              <span className="num">01 .</span>&nbsp; PRIORITY ACCESS<br />PROTOCOL
            </div>
            <p className="principle-body">
              You have a direct, encrypted channel to me. Whether you are negotiating a contract at 2 AM in New York or navigating a family crisis on a Sunday, I am on the line, providing real-time behavioral decoding of the people and situations currently facing you.
            </p>
          </div>
          <div className="principle-card">
            <div className="principle-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/Capa_2.svg" alt="" width={60} height={60} />
            </div>
            <div className="principle-title">
              <span className="num">02 .</span>&nbsp; THE EMBEDDED<br />FUNCTION
            </div>
            <p className="principle-body">
              Instead of a vendor or consultant you call when a problem arises, I become part of your decision infrastructure—a continuous system that identifies probability arcs before they manifest.
            </p>
          </div>
        </div>

        <div className="principles-divider" />

        <div className="principles-bottom-row">
          <div className="principle-03-col">
            <div className="principle-03-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/Capa_3.svg" alt="" width={157} height={157} />
            </div>
            <div className="principle-title">
              <span className="num">03 .</span>&nbsp; FULL-SCALE<br />DEPLOYMENT
            </div>
            <p className="principle-03-accent">
              I am integrated directly into your operational reality—monitoring decision pressure, incentive asymmetry, and power movement in real time. When conditions shift, you are informed before consequences compound.
            </p>
          </div>
          <div className="detail-panels">
            {[
              {
                label: "THE BOARDROOM",
                body: "Strategy is easy; consensus is hard. I sit in on critical sessions to decode the unstated agendas of the board and key stakeholders. I identify where objectives are confused, who is operating on hidden incentives, and provide intelligence on how to navigate the power holders who control your capital—who to influence, when to push, and where alignment is mathematically possible.",
              },
              {
                label: "THE ESTATE",
                body: "I profile your family structure, domestic staff, and inner circle to isolate behavioral patterns indicating relational dynamics, loyalty structures, and succession compatibility. Including the problems no advisor, therapist, or attorney has been able to crack—some of which have been waiting for a solution for years, or even decades.",
              },
              {
                label: "THE ORGANIZATION",
                body: "I diagnose your leadership team and key executives to identify who is actually driving revenue versus who appears productive on paper. I detect where executives are miscast in their roles—costing you in silent inefficiency, internal friction, or stunted growth. I map who should be repositioned, who represents hidden risk, and where conflicts between key players are draining profit before the dysfunction becomes visible to the board or the market.",
              },
              {
                label: "THE SUMMIT",
                body: "I accompany you to high-stakes events as an intelligence layer, decoding the unstated intentions and positioning of key players.",
              },
            ].map(({ label, body }) => (
              <div className="detail-panel" key={label}>
                <div className="detail-panel-header">
                  <div className="detail-panel-line" />
                  <div className="detail-panel-label">{label}</div>
                </div>
                <p className="detail-panel-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
