// App shell — prototype tab bar above 3 rebuilt JRF pages

const PAGES = [
  { id: 'home', label: 'Home', Comp: () => <HomePage /> },
  { id: 'narrative', label: 'Narrative change', Comp: () => <NarrativePage /> },
  { id: 'climate', label: 'Climate justice', Comp: () => <ClimatePage /> },
  { id: 'styles', label: 'Styles', Comp: () => <StylesPage /> },
];

function App() {
  const [pageId, setPageId] = React.useState(() => {
    try { return localStorage.getItem('jrf_proto_page') || 'home'; }
    catch { return 'home'; }
  });
  const [viewport, setViewport] = React.useState(() => {
    try { return localStorage.getItem('jrf_proto_viewport') || 'desktop'; }
    catch { return 'desktop'; }
  });

  React.useEffect(() => {
    try { localStorage.setItem('jrf_proto_page', pageId); } catch {}
    // Scroll page area to top on tab change
    const el = document.querySelector('.proto-stage');
    if (el) el.scrollTop = 0;
  }, [pageId]);

  React.useEffect(() => {
    try { localStorage.setItem('jrf_proto_viewport', viewport); } catch {}
  }, [viewport]);

  const current = PAGES.find(p => p.id === pageId) || PAGES[0];
  const VIEWPORTS = [
    { id: 'mobile', label: 'Mobile', icon: 'smartphone' },
    { id: 'tablet', label: 'Tablet', icon: 'tablet' },
    { id: 'desktop', label: 'Desktop', icon: 'desktop_windows' },
  ];

  return (
    <>
      <div className="proto-bar" role="tablist" aria-label="Prototype pages">
        <span className="proto-bar__label">Prototype</span>
        <div className="proto-bar__tabs">
          {PAGES.map(p => (
            <button
              key={p.id}
              role="tab"
              aria-selected={p.id === pageId}
              className={"proto-tab" + (p.id === pageId ? " is-active" : "")}
              onClick={() => setPageId(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <span className="proto-bar__spacer"></span>
        <div className="proto-viewport" role="group" aria-label="Viewport size">
          {VIEWPORTS.map(v => (
            <button
              key={v.id}
              type="button"
              aria-pressed={v.id === viewport}
              className={"proto-viewport__btn" + (v.id === viewport ? " is-active" : "")}
              onClick={() => setViewport(v.id)}
              title={v.label}
            >
              <span className="material-symbols-outlined">{v.icon}</span>
              <span className="proto-viewport__label">{v.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={"proto-stage proto-stage--" + viewport}>
        <div className="proto-stage__frame">
          <SiteHeader />
          <main data-screen-label={current.label}>
            {React.createElement(current.Comp)}
          </main>
          <SiteFooter />
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
