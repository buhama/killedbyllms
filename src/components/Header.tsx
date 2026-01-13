export function Header() {
  return (
    <header className="header">
      <div className="header-branding">
        <img src="/tombstone.svg" alt="" className="header-icon" />
        <h1 className="header-title">Killed by LLMs</h1>
      </div>
      <p className="header-tagline">
        A tribute to the products killed by AI
      </p>
    </header>
  );
}
