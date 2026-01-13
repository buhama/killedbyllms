export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-title">
          <img src="/tombstone.svg" alt="" className="footer-icon" />
          <span>Killed by LLMs</span>
        </div>
        <p className="footer-text">
          Killed by LLMs is a tribute to the companies and products disrupted by Large Language Models.
          <br />
          The idea and inspiration is entirely from the original project.
        </p>
        <p className="footer-attribution">
          Inspired by{' '}
          <a href="https://killedbygoogle.com" target="_blank" rel="noopener noreferrer">
            Killed by Google
          </a>
          {' '}by{' '}
          <a href="https://github.com/codyogden/killedbygoogle" target="_blank" rel="noopener noreferrer">
            Cody Ogden
          </a>
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Killed by LLMs
        </p>
      </div>
    </footer>
  );
}
