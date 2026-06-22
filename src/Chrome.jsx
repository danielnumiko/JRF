// Shared header with full horizontal nav + search

// Helper for offline bundling — falls back to local path in dev.
window.R = window.R || function (id, fallback) { return (window.__resources && window.__resources[id]) || fallback; };

function JrfLogo() {
  return (
    <svg className="jrf-logo" viewBox="0 0 140 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M70.087 0C31.2872 0 0 31.2872 0 69.913C0 108.539 31.2872 140 70.087 140C108.887 140 140 108.713 140 69.913C140 31.1131 108.713 0 70.087 0ZM105.393 67.2897C107.14 67.2897 109.937 67.989 111.51 67.989C113.083 67.989 113.956 67.8149 114.482 67.6378C114.482 70.2581 111.858 73.7548 109.064 73.7548C106.618 73.7548 104.871 72.8814 102.947 72.8814C101.374 72.8814 100.501 73.2295 99.9756 73.4066V97.3523H93.5074V46.3155H115.355L117.801 52.2584H100.15L99.9756 70.087C101.374 67.989 103.646 67.2897 105.393 67.2897ZM34.7809 93.3333C40.3756 93.1593 40.7238 88.4379 40.7238 83.0203V52.4324H22.8951L25.3413 46.4895H47.1889V82.8432C47.1889 92.4569 42.4706 98.2226 35.129 98.2226C28.838 98.2226 23.4173 94.903 23.2432 87.7355C23.0692 82.3179 25.8665 80.394 28.4868 80.394C31.107 80.394 32.5057 81.9667 32.5057 84.0647C32.5057 86.3368 30.4077 87.9096 27.7874 87.7355C27.9615 89.1342 29.1861 93.5044 34.7778 93.3272L34.7809 93.3333ZM65.5428 74.4572H60.8246V97.3523H54.3564V46.4926C58.7265 42.4737 66.2422 41.075 70.2611 41.075C74.28 41.075 87.0393 42.8218 87.0393 58.2043C87.0393 65.72 81.4476 71.3117 75.8528 73.2356L88.7861 97.3553H81.2704L70.4352 76.7323C69.2106 74.2862 67.6378 74.4602 65.5398 74.4602L65.5428 74.4572Z"></path>
      <path d="M80.4001 57.679C80.4001 51.2109 76.0299 47.1919 69.7389 47.1919C65.1947 47.1919 62.0492 48.5906 60.8246 49.464V68.8655H69.913C76.3781 68.8655 80.4001 63.2738 80.4001 57.679Z"></path>
    </svg>
  );
}
window.JrfLogo = JrfLogo;

function SiteHeader() {
  const open = null;
  const onEnter = () => {};
  const onLeave = () => {};
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-logo" aria-label="Joseph Rowntree Foundation home">
          <JrfLogo />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <div className="site-nav__item" onMouseEnter={() => onEnter('topics')} onMouseLeave={onLeave}>
            <button type="button" aria-expanded={open === 'topics'}><span className="site-nav__label">Topics</span> <span className="material-symbols-outlined site-nav__chev">expand_more</span></button>
            {open === 'topics' && (
              <div className="site-nav__panel">
                <a href="#">Climate change</a>
                <a href="#">Child poverty</a>
                <a href="#">Cost of living</a>
                <a href="#">Housing</a>
                <a href="#">Narrative change</a>
                <a href="#">Neighbourhoods and communities</a>
                <a href="#">Power and participation</a>
                <a href="#">Social security</a>
                <a href="#">Work</a>
              </div>
            )}
          </div>
          <div className="site-nav__item" onMouseEnter={() => onEnter('news')} onMouseLeave={onLeave}>
            <button type="button" aria-expanded={open === 'news'}><span className="site-nav__label">News and events</span> <span className="material-symbols-outlined site-nav__chev">expand_more</span></button>
            {open === 'news' && (
              <div className="site-nav__panel">
                <a href="#">News</a>
                <a href="#">Events</a>
                <a href="#">Press releases</a>
                <a href="#">Media enquiries</a>
              </div>
            )}
          </div>
          <div className="site-nav__item">
            <button type="button"><span className="site-nav__label">UK poverty statistics</span></button>
          </div>
          <div className="site-nav__item" onMouseEnter={() => onEnter('about')} onMouseLeave={onLeave}>
            <button type="button" aria-expanded={open === 'about'}><span className="site-nav__label">About</span> <span className="material-symbols-outlined site-nav__chev">expand_more</span></button>
            {open === 'about' && (
              <div className="site-nav__panel">
                <a href="#">Vision, mission and principles</a>
                <a href="#">Background and history</a>
                <a href="#">Our people</a>
                <a href="#">Funding</a>
                <a href="#">Careers</a>
                <a href="#">Contact us</a>
              </div>
            )}
          </div>
        </nav>
        <div className="site-header__right">
          <button className="site-header__search-btn" type="button" aria-label="Search">
            <span>Search</span>
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="site-header__menu-btn" type="button" aria-label="Open menu">
            <span className="site-header__menu-label">Main menu</span>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function NewsletterBand() {
  return (
    <section className="newsletter-band">
      <div className="container">
        <div className="newsletter-band__inner">
          <h2 className="newsletter-band__title">Sign up to the JRF Newsletter</h2>
          <a href="#" className="newsletter-band__btn">Join our newsletter</a>
        </div>
      </div>
    </section>
  );
}

const SOCIAL_PATHS = {
  x: "M13.5 10.6L20.9 2h-1.8l-6.4 7.5L7.6 2H2l7.8 11.4L2 22h1.8l6.8-7.9L16.1 22H22l-8.5-11.4z",
  bluesky: "M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364-3.911.58-7.386 2.005-2.83 7.078 5.012 5.5 6.87-1.179 7.823-4.566.953 3.387 2.05 10.066 7.733 4.566 4.267-4.567 1.172-6.498-2.74-7.078 2.67.296 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.479 0-.689-.139-1.86-.902-2.205-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z",
  linkedin: "M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z",
  medium: "M2.846 6.887c.03-.295-.083-.586-.303-.784L.293 3.169V2.71h7.84l6.058 13.297L19.51 2.71H27v.459l-2.012 1.93c-.173.132-.26.347-.226.561v14.156c-.034.214.053.429.226.561l1.965 1.93v.459h-9.881v-.459l2.035-1.978c.2-.2.2-.258.2-.561V8.087L13.65 22.71h-.764L6.295 8.087v9.802c-.055.402.078.808.36 1.09l2.643 3.205v.458H2v-.458l2.643-3.205c.28-.282.404-.69.336-1.09V6.887z",
  youtube: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z",
};
function SocialIcon({ name, label, slug }) {
  return (
    <a href="#" className="footer-social" aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={SOCIAL_PATHS[slug]} />
      </svg>
    </a>
  );
}

function SiteFooter() {
  return (
    <>
      <NewsletterBand />
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand footer-col--brand">
              <JrfLogo />
              <dl className="footer-co">
                <div><dt>Company Number:</dt><dd>12132713</dd></div>
                <div><dt>Charity Number (Scotland):</dt><dd>SC049712</dd></div>
                <div><dt>Charity Number (England and Wales):</dt><dd>1184957</dd></div>
              </dl>
            </div>
            <div className="footer-col footer-col--contact">
              <h4>Contact</h4>
              <address className="footer-address">
                The Homestead<br/>
                40 Water End<br/>
                York<br/>
                YO30 6WP
              </address>
              <a href="tel:+441904629241" className="footer-phone">01904 629 241</a>
              <div className="footer-socials">
                <SocialIcon slug="x" label="X (Twitter)" />
                <SocialIcon slug="bluesky" label="Bluesky" />
                <SocialIcon slug="linkedin" label="LinkedIn" />
                <SocialIcon slug="medium" label="Medium" />
                <SocialIcon slug="youtube" label="YouTube" />
              </div>
            </div>
            <div className="footer-col footer-col--quick">
              <h4>Quick links</h4>
              <ul>
                <li><a href="#">Vision, mission and principles</a></li>
                <li><a href="#">Background and history</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Our people</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className="footer-col footer-col--legal">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Website terms and conditions</a></li>
                <li><a href="#">Feedback and complaints</a></li>
                <li><a href="#">Information for suppliers</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            Copyright Joseph Rowntree Foundation 2026. A company limited by guarantee and a registered charity.
          </div>
        </div>
      </footer>
    </>
  );
}

function Eyebrow({ tags, variant }) {
  return (
    <div className={"eyebrow" + (variant ? " eyebrow--" + variant : "")}>
      {tags.map((t, i) => <span key={i} className="eyebrow__tag">{t}</span>)}
    </div>
  );
}

window.SiteHeader = SiteHeader;
window.SiteFooter = SiteFooter;
window.Eyebrow = Eyebrow;
