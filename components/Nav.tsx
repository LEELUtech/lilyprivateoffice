export default function Nav() {
  return (
    <nav className="nav" style={{ backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
      <a href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/path6-logo.svg" alt="Logo" width={29} height={29} />
        <span className="nav-logo-text">
          <span className="first">LILY</span> <span className="last">CHYSTOFAT</span>
        </span>
      </a>
      <a href="#contact" className="nav-cta">
        <span>TRANSMIT INQUIRY</span>
      </a>
    </nav>
  );
}
