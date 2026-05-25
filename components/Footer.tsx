export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="/" className="footer-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/path6-logo.svg" alt="Logo" width={29} height={29} />
        <span className="footer-logo-text">
          <span className="medium">LILY</span> <span className="light">CHYSTOFAT</span>
        </span>
      </a>
      <div className="footer-copy">
        The Leelu Method Private Office. Strict Confidentiality Protocols Observed.
      </div>
    </footer>
  );
}
