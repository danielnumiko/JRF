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
          <p className="styles-intro">Sizes step at 768&nbsp;px and 1440&nbsp;px breakpoints — the same scale the live JRF site uses.</p>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H1</span>
              <span className="scale-row__spec">DM Serif Text 400</span>
              <span className="scale-row__sizes">40 → 58 → 80 px · LH 1.15</span>
            </div>
            <div className="scale-row__sample"><h1 style={{margin: 0}}>A better future is possible.</h1></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H2</span>
              <span className="scale-row__spec">DM Serif Text 400</span>
              <span className="scale-row__sizes">30 → 45 → 55 px · LH 1.15</span>
            </div>
            <div className="scale-row__sample"><h2 style={{margin: 0}}>Section heading</h2></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H3</span>
              <span className="scale-row__spec">Lexend 500</span>
              <span className="scale-row__sizes">24 → 30 → 35 px · LH 1.3</span>
            </div>
            <div className="scale-row__sample"><h3 style={{margin: 0}}>Card or list-item title</h3></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H4</span>
              <span className="scale-row__spec">Lexend 500</span>
              <span className="scale-row__sizes">18 → 22 → 25 px · LH 1.25</span>
            </div>
            <div className="scale-row__sample"><h4 style={{margin: 0}}>Inline label / footer column</h4></div>
          </div>

          <div className="scale-row">
            <div className="scale-row__meta">
              <span className="scale-row__token">H5</span>
              <span className="scale-row__spec">Lexend 500</span>
              <span className="scale-row__sizes">14 → 16 → 18 px · LH 1.35</span>
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
              <p style={{fontSize: 'var(--text-body-lg)', lineHeight: 1.65, fontWeight: 300, margin: 0}}>Narratives shape our understanding of the world, individually and collectively. We are committed to changing the prevailing narratives that distort, divide and uphold injustice.</p>
              <dl className="styles-meta">
                <dt>Size</dt><dd>17 px</dd>
                <dt>Line height</dt><dd>1.65</dd>
                <dt>Weight</dt><dd>Lexend 300</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Body — card</div>
              <p style={{fontSize: 'var(--text-body)', lineHeight: 1.5, fontWeight: 300, margin: 0}}>Stories help people connect with each other and the issues that matter. Hear from the people leading change.</p>
              <dl className="styles-meta">
                <dt>Size</dt><dd>15 px</dd>
                <dt>Line height</dt><dd>1.5</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Eyebrow tag</div>
              <div className="eyebrow"><span className="eyebrow__tag">Explainer</span><span className="eyebrow__tag">Climate change</span></div>
              <dl className="styles-meta">
                <dt>Size</dt><dd>12 px uppercase · 0.08em</dd>
                <dt>Treatment</dt><dd>Green outline, rounded</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Date eyebrow</div>
              <div style={{fontSize: 'var(--text-meta)', color: 'var(--green)', fontWeight: 500}}>24 February 2026</div>
              <dl className="styles-meta">
                <dt>Size</dt><dd>13 px · Lexend 500</dd>
                <dt>Colour</dt><dd>Green #007A62</dd>
              </dl>
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
              {tok:'space-8', px:32, rem:'2rem'},
              {tok:'space-10', px:40, rem:'2.5rem'},
              {tok:'space-12', px:48, rem:'3rem'},
              {tok:'space-14', px:56, rem:'3.5rem'},
              {tok:'space-16', px:64, rem:'4rem'},
              {tok:'space-18', px:72, rem:'4.5rem'},
              {tok:'space-20', px:80, rem:'5rem'},
              {tok:'space-24', px:96, rem:'6rem'},
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

      <section className="styles-section">
        <div className="container">
          <h2>Padding &amp; margin tokens</h2>
          <p className="styles-intro">Where each token lives in the system.</p>
          <div className="styles-grid">
            <div className="styles-card">
              <div className="styles-card__label">Section padding (vertical)</div>
              <dl className="styles-meta">
                <dt>Default</dt><dd>72 px top / bottom · <code>space-18</code></dd>
                <dt>Compact</dt><dd>56 px · <code>space-14</code></dd>
                <dt>Generous</dt><dd>96 px · <code>space-24</code></dd>
                <dt>Mobile (≤700px)</dt><dd>48 px · <code>space-12</code></dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Container gutters (horizontal)</div>
              <dl className="styles-meta">
                <dt>Desktop</dt><dd>32 px · <code>space-8</code></dd>
                <dt>Tablet</dt><dd>24 px · <code>space-6</code></dd>
                <dt>Mobile</dt><dd>20 px · <code>space-5</code></dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Grid &amp; flex gaps</div>
              <dl className="styles-meta">
                <dt>Card grid</dt><dd>32 px · <code>space-8</code></dd>
                <dt>Two-column layout</dt><dd>64 px · <code>space-16</code></dd>
                <dt>Tight (chips, nav)</dt><dd>8 – 16 px · <code>space-2 / space-4</code></dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Heading margins</div>
              <dl className="styles-meta">
                <dt>Section H2 → body</dt><dd>32 px below · <code>space-8</code></dd>
                <dt>Article H2 above</dt><dd>72 px · <code>space-18</code></dd>
                <dt>Article H3 above</dt><dd>56 px · <code>space-14</code></dd>
                <dt>Paragraph below</dt><dd>18 px (~<code>space-5</code>)</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Button &amp; control padding</div>
              <dl className="styles-meta">
                <dt>Primary button</dt><dd>14 px × 32 px</dd>
                <dt>Newsletter CTA</dt><dd>22 px × 48 px</dd>
                <dt>Card body</dt><dd>20 px</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Radius &amp; rules</div>
              <dl className="styles-meta">
                <dt>Card / control radius</dt><dd>2 px (sharp)</dd>
                <dt>Avatar / circle</dt><dd>999 px</dd>
                <dt>Hairline rule</dt><dd>1 px solid <code>#15263B1A</code></dd>
                <dt>Bold rule (meta strip)</dt><dd>2 px solid navy</dd>
              </dl>
            </div>
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
