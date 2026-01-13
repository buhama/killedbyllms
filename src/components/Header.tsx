export function Header() {
  return (
    <header className="header">
      <div className="header-branding">
        <img src="/tombstone.svg" alt="" className="header-icon" />
        <h1 className="header-title">Killed by LLMs</h1>
      </div>
      <p className="header-tagline">
        A tribute to the products and services made obsolete by Large Language Models.
        <br />
        <span className="header-disclaimer">
          These listings may not be entirely dead, but have become obsolete or close to obsolete because of LLMs.
        </span>
      </p>
    </header>
  );
}
