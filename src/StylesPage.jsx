// Styles reference — canonical heading scale H1–H5

function StylesPage() {
  return (
    <article className="styles-doc">
      <header className="styles-hero">
        <div className="container">
          <div className="eyebrow"><span className="eyebrow__tag">Reference</span></div>
          <h1>Type scale &amp; tokens</h1>
          <p className="hero-lede">Canonical heading scale matching the JRF production stylesheet. One size per level — applied consistently across the rebuilt pages.</p>
        </div>
      </header>

      <section className="styles-section">
        <div className="container">
          <h2>Fonts</h2>
          <div className="styles-grid">
            <div className="styles-card">
              <div className="styles-card__label">Serif — H1, H2</div>
              <div className="styles-card__sample" style={{fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', lineHeight: 1.05}}>DM Serif Text</div>
              <dl className="styles-meta">
                <dt>Family</dt><dd>DM Serif Text</dd>
                <dt>Weight</dt><dd>400</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Sans — H3, H4, H5, body, UI</div>
              <div className="styles-card__sample" style={{fontFamily: 'var(--font-sans)', fontSize: 'var(--text-h2)', fontWeight: 300}}>Lexend</div>
              <dl className="styles-meta">
                <dt>Family</dt><dd>Lexend</dd>
                <dt>Weights</dt><dd>300 body · 400 UI · 500 H4 / H5 / emphasis</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="styles-section styles-section--paper">
        <div className="container">
          <h2>Heading scale</h2>
          <p className="styles-intro">On the live site, heading sizes jump around a little — some steps are big, some barely change, and a few sit at awkward in-between sizes. This proposed scale tidies that up: headings grow in smooth, even steps as the screen gets bigger, so the hierarchy always feels deliberate. Every size is also pulled from the same underlying scale that controls spacing across the site, which keeps everything aligned and consistent — while still changing at the same screen widths as live, so the experience stays familiar.</p>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">Home H1</span>
              <span className="scale-row__spec">DM Serif Text 400 · home hero only · <code style={{fontSize:'var(--text-xs)',background:'#fff',padding:'1px 5px',borderRadius:3,border:'1px solid var(--rule)'}}>.h-home</code></span>
              <span className="scale-row__sizes">60 (320) → 72 (768) → 112 (1440) → 144 (1920) px · LH 1.05</span>
              <span className="scale-row__live">Live: 60 (320) → 70 (768) → 110 (1440) → 145 (1920) · LH 1.14 ✓ match</span>
            </div>
            <div className="scale-row__sample"><span className="h-home" style={{display:'block', fontFamily:'var(--font-serif)'}}>Home hero heading</span></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H1</span>
              <span className="scale-row__spec">DM Serif Text 400</span>
              <span className="scale-row__sizes">40 (320) → 56 (768) → 80 (1440) → 96 (1920) px · LH 1.1</span>
              <span className="scale-row__live">Live: 40 (320) → 58 (768) → 80 (1440) → 90 (1920) · LH 1.14</span>
            </div>
            <div className="scale-row__sample"><h1 style={{margin: 0}}>Hero heading</h1></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H2</span>
              <span className="scale-row__spec">DM Serif Text 400</span>
              <span className="scale-row__sizes">32 (320) → 44 (768) → 60 (1440) → 72 (1920) px · LH 1.1</span>
              <span className="scale-row__live">Live: 35 (320) → 45 (768) → 55 (1440) → 75 (1920) · LH 1.14</span>
            </div>
            <div className="scale-row__sample"><h2 style={{margin: 0}}>Section heading</h2></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H3 — serif</span>
              <span className="scale-row__spec">DM Serif Text 400 · subheadings within article body</span>
              <span className="scale-row__sizes">24 (320) → 32 (768) → 44 (1440) → 52 (1920) px · LH 1.2</span>
              <span className="scale-row__live">Live: DM Serif Text (matches)</span>
            </div>
            <div className="scale-row__sample"><span style={{margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'var(--text-h3)', lineHeight: 1.2, display: 'block'}}>Article subheading</span></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H3 — Lexend</span>
              <span className="scale-row__spec">Lexend 500 · cards &amp; list-item titles</span>
              <span className="scale-row__sizes">24 (320) → 32 (768) → 44 (1440) → 52 (1920) px · LH 1.25</span>
              <span className="scale-row__live">Live: 22 (320) → 25 (768) → 35 (1440) → 40 (1920) · LH 1.25</span>
            </div>
            <div className="scale-row__sample"><h3 style={{margin: 0}}>Card or list-item title</h3></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H4</span>
              <span className="scale-row__spec">Lexend 500</span>
              <span className="scale-row__sizes">16 (320) → 24 (768) → 32 (1440) → 36 (1920) px · LH 1.3</span>
              <span className="scale-row__live">Live: 18 (320) → 22 (768) → 25 (1440) → 30 (1920) · LH 1.25</span>
            </div>
            <div className="scale-row__sample"><h4 style={{margin: 0}}>Inline label / footer column</h4></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H5</span>
              <span className="scale-row__spec">Lexend 500</span>
              <span className="scale-row__sizes">12 (320) → 16 (768) → 20 (1440) → 24 (1920) px · LH 1.35</span>
              <span className="scale-row__live">Live: 18 (320) → 22 (768) → 25 (1440) → 30 (1920) · LH 1.25</span>
            </div>
            <div className="scale-row__sample"><h5 style={{margin: 0}}>Compact card / utility title</h5></div>
          </div>
        </div>
      </section>

      <section className="styles-section">
        <div className="container">
          <h2>Body &amp; UI</h2>
          <div className="styles-grid">
            <div className="styles-card">
              <div className="styles-card__label">Body — long-form</div>
              <p style={{fontSize: 'var(--text-body-lg)', lineHeight: 1.6, fontWeight: 300, margin: 0}}>Narratives shape our understanding of the world, individually and collectively. We are committed to changing the prevailing narratives that distort, divide and uphold injustice.</p>
              <dl className="styles-meta">
                <dt>Size</dt><dd>16 → 18 px · steps at 768</dd>
                <dt>Line height</dt><dd>1.6</dd>
                <dt>Weight</dt><dd>Lexend 300</dd>
              </dl>
              <p className="styles-card__live">Live: 16 (320) → 18 (768) px · LH 1.6 ✓ match</p>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Body — card</div>
              <p style={{fontSize: 'var(--text-body)', lineHeight: 1.5, fontWeight: 300, margin: 0}}>Stories help people connect with each other and the issues that matter. Hear from the people leading change.</p>
              <dl className="styles-meta">
                <dt>Size</dt><dd>16 px · space-4 · fixed</dd>
                <dt>Line height</dt><dd>1.5</dd>
              </dl>
              <p className="styles-card__live">Live: 16 px (fixed) · LH 1.5</p>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Eyebrow tag</div>
              <div className="eyebrow"><span className="eyebrow__tag">Explainer</span><span className="eyebrow__tag">Climate change</span></div>
              <dl className="styles-meta">
                <dt>Size</dt><dd>12 px · space-3 · fixed</dd>
                <dt>Treatment</dt><dd>Green outline, rounded</dd>
              </dl>
              <p className="styles-card__live">Live: 14 px (text-sm, fixed)</p>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Date eyebrow</div>
              <div style={{fontSize: 'var(--text-meta)', color: 'var(--green)', fontWeight: 500}}>24 February 2026</div>
              <dl className="styles-meta">
                <dt>Size</dt><dd>12 px · space-3 · fixed</dd>
                <dt>Colour</dt><dd>Green #007A62</dd>
              </dl>
              <p className="styles-card__live">Live: 14 px (fixed) · Lexend 500</p>
            </div>
          </div>
        </div>
      </section>

      <section className="styles-section styles-section--paper">
        <div className="container">
          <h2>Spacing scale</h2>
          <p className="styles-intro">4&nbsp;px base unit. Use these tokens for padding, margin, and gap — avoid arbitrary in-between values so vertical rhythm stays consistent.</p>
          <div className="space-grid">
            {[
              {tok:'space-1', px:4,  rem:'0.25rem'},
              {tok:'space-2', px:8,  rem:'0.5rem'},
              {tok:'space-3', px:12, rem:'0.75rem'},
              {tok:'space-4', px:16, rem:'1rem'},
              {tok:'space-5', px:20, rem:'1.25rem'},
              {tok:'space-6', px:24, rem:'1.5rem'},
              {tok:'space-7', px:28, rem:'1.75rem'},
              {tok:'space-8', px:32, rem:'2rem'},
              {tok:'space-9', px:36, rem:'2.25rem'},
              {tok:'space-10', px:40, rem:'2.5rem'},
              {tok:'space-11', px:44, rem:'2.75rem'},
              {tok:'space-12', px:48, rem:'3rem'},
              {tok:'space-13', px:52, rem:'3.25rem'},
              {tok:'space-14', px:56, rem:'3.5rem'},
              {tok:'space-15', px:60, rem:'3.75rem'},
              {tok:'space-16', px:64, rem:'4rem'},
              {tok:'space-18', px:72, rem:'4.5rem'},
              {tok:'space-20', px:80, rem:'5rem'},
              {tok:'space-24', px:96, rem:'6rem'},
              {tok:'space-28', px:112, rem:'7rem'},
              {tok:'space-36', px:144, rem:'9rem'},
            ].map(s => (
              <div className="space-row" key={s.tok}>
                <span className="space-row__token">{s.tok}</span>
                <span className="space-row__bar"><span style={{width: s.px}}></span></span>
                <span className="space-row__px">{s.px} px</span>
                <span className="space-row__rem">{s.rem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="styles-section styles-section--paper">
        <div className="container">
          <h2>Colour</h2>
          <div className="swatches">
            <div className="swatch"><div className="swatch__chip" style={{background: '#15263B'}}></div><div className="swatch__label">Navy<span>#15263B</span></div></div>
            <div className="swatch"><div className="swatch__chip" style={{background: '#0E1822'}}></div><div className="swatch__label">Footer navy<span>#0E1822</span></div></div>
            <div className="swatch"><div className="swatch__chip" style={{background: '#F4F0E7'}}></div><div className="swatch__label">Cream<span>#F4F0E7</span></div></div>
            <div className="swatch"><div className="swatch__chip" style={{background: '#A0D7E3'}}></div><div className="swatch__label">Sky<span>#A0D7E3</span></div></div>
            <div className="swatch"><div className="swatch__chip" style={{background: '#007A62'}}></div><div className="swatch__label">Green<span>#007A62</span></div></div>
            <div className="swatch"><div className="swatch__chip" style={{background: '#FFFFFF', border: '1px solid var(--rule)'}}></div><div className="swatch__label">White<span>#FFFFFF</span></div></div>
          </div>
        </div>
      </section>

      <section className="styles-section">
        <div className="container">
          <h2>Layout</h2>
          <dl className="styles-meta styles-meta--lg">
            <dt>Container max-width</dt><dd>1280 px</dd>
            <dt>Gutter</dt><dd>24–32 px</dd>
            <dt>Section vertical padding</dt><dd>72 px (desktop)</dd>
            <dt>Hero min-height</dt><dd>480 px</dd>
            <dt>Header bottom border</dt><dd>1 px solid navy</dd>
            <dt>Breakpoints</dt><dd>768 px · 1440 px</dd>
          </dl>
        </div>
      </section>
    </article>
  );
}

window.StylesPage = StylesPage;
