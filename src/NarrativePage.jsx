// Narrative change — landing page with sections, toolkit grid, filterable list, experts
function NarrativePage() {
  const toolkit = [
    { tags: ["Resource", "Narrative change", "Housing"], title: "Talking about Homes: 3 top tips for effective explanation", body: "Our current housing system isn't working for everyone. Here's how to explain why, build understanding, counteract fatalism, and increase support for solutions." },
    { tags: ["Resource", "Narrative change", "Housing", "Power and participation"], title: "Talking about Homes: framing stories from lived experience", body: "Stories rooted in lived experience can bring housing issues to life by revealing what isn't working, highlighting the solutions we need, and helping to build understanding through careful, considered framing." },
    { tags: ["Resource", "Narrative change", "Housing"], title: "A framing toolkit: How to talk about homes", body: "In this resource you'll find practical tips and tools appropriate not only for communicators in the housing sector, but for anyone who is talking and writing about homes." },
    { tags: ["Briefing", "Narrative change", "Housing"], title: "Talking about homes: what we can learn from homelessness and poverty research", body: "This briefing shares insights on how to frame homes, homelessness and poverty to build public understanding and support for solutions." },
    { tags: ["Resource", "Narrative change", "Housing"], title: "How to grow support for building social homes", body: "This guide will help you communicate why social homes are vital for making sure everyone has a decent, affordable place to live and how they're made possible." },
    { tags: ["Resource", "Narrative change", "Housing"], title: "How to talk about private renting", body: "This guide will help you communicate why improving renting is a vital part of ensuring everyone in the UK has a decent, affordable home." },
    { tags: ["Resource", "Narrative change", "Housing"], title: "Building consensus for building homes", body: "A practical communications guide to increase support for building homes in communities." },
    { tags: ["Resource", "Narrative change", "Housing"], title: "How to talk about supported housing", body: "A practical communications guide to increase support for decent, affordable supported housing." },
  ];

  const items = [
    { date: "2 April 2026", tags: ["Reflection", "Neighbourhoods and communities", "Narrative change", "Power and participation"], title: "Capturing hope and resilience in communities tackling hardship", body: "Over the past 3 years, JRF has been on a learning journey, working with community groups across the UK, to develop a more ethical, representative approach to our visual storytelling, with co-creation at the centre." },
    { date: "23 February 2026", tags: ["Reflection", "Imagination infrastructures", "Narrative change"], title: "Why Futures in Draft matters to us all", body: "After nearly two years of collaboration, Storythings and JRF are launching Futures in Draft — a new platform sharing the people and stories transforming our tomorrow." },
    { date: "6 February 2026", tags: ["Resource", "Narrative change", "Housing"], title: "Talking about Homes: 3 top tips for effective explanation", body: "Our current housing system isn't working for everyone. Here's how to explain why, build understanding, counteract fatalism, and increase support for solutions." },
    { date: "1 December 2025", tags: ["Reflection", "Narrative change", "Housing"], title: "What we've learnt about changing the narrative on homes through framing", body: "Looking back on the Talking about Homes project so far, how we've engaged with the sector, what organisational circumstances help mobilise framing, and the programme's next steps." },
    { date: "5 November 2025", tags: ["Resource", "Narrative change", "Housing", "Power and participation"], title: "Talking about Homes: framing stories from lived experience", body: "Stories rooted in lived experience can bring housing issues to life by revealing what isn't working, highlighting the solutions we need, and helping to build understanding through careful, considered framing." },
    { date: "8 October 2025", tags: ["Resource", "Narrative change", "Housing"], title: "How to talk about supported housing", body: "A practical communications guide to increase support for decent, affordable supported housing." },
    { date: "9 June 2025", tags: ["Report", "Narrative change", "Wealth, funding and investment practice"], title: "Talking about wealth inequality", body: "Looking at perceptions of, and attitudes towards, wealth and wealth inequality — and how to increase public support for a fairer distribution." },
    { date: "28 November 2024", tags: ["Resource", "Narrative change", "Housing"], title: "Building consensus for building homes", body: "A practical communications guide to increase support for building homes in communities." },
    { date: "27 June 2024", tags: ["Resource", "Narrative change", "Housing"], title: "How to talk about private renting", body: "This guide will help you communicate why improving renting is a vital part of ensuring everyone in the UK has a decent, affordable home." },
    { date: "23 May 2024", tags: ["Explainer", "Narrative change", "Housing"], title: "How to talk about homes: a short animation", body: "A short animation giving you an overview of the obstacles we face when we talk about homes and how to overcome them with effective framing." },
    { date: "2 May 2024", tags: ["Report", "Narrative change", "Wealth, funding and investment practice"], title: "Effects of the framing of wealth inequality: a literature review", body: "What does the academic evidence base tell us about the effects of framing on the public understanding of, and engagement with, wealth inequality?" },
    { date: "2 May 2024", tags: ["Report", "Narrative change", "Wealth, funding and investment practice"], title: "Changing the narrative on wealth inequality", body: "New approaches to framing wealth inequality as a social problem could build political pressure for change." },
  ];

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol>
            <li><a href="#">Home</a></li>
          </ol>
        </div>
      </nav>

      <section className="hero hero--split hero--navy">
        <div className="hero__split">
          <div className="hero__split-copy">
            <h1>Narrative change</h1>
            <p className="hero__lede">Narratives shape our understanding of the world, individually and collectively. We are committed to supporting narrative change to create a better, equitable future.</p>
          </div>
          <div className="hero__split-media">
            <img src={R('narrHero', 'assets/narr-hero.jpg')} alt="Person flying a kite in a field" />
          </div>
        </div>
      </section>

      <section className="section section--paper" style={{borderBottom: '1px solid var(--rule)'}}>
        <div className="container two-col">
          <h2 className="h-section" style={{margin: 0}}>Our mission</h2>
          <div className="prose">
            <p>JRF is committed to amplifying the voices of a more diverse pool of storytellers, content creators and strategists that champion social, political, environmental and economic justice.</p>
            <p style={{marginBottom: 0}}>Our goal is to use the power of stories to support and promote narratives that inspire change and nurture a more compassionate and equitable society.</p>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="prose prose--measure">
          <h2 className="h-section" style={{marginBottom: 20}}>Storytellers</h2>
          <p>The Storytellers Fund was created to support content creators who inspire change through storytelling so they can share their content more widely and reach new audiences. It also acts to diversify the pool of storytellers and content creators who are shaping the conversations around our politics and culture.</p>
          <p>Recognising the power of storytelling in inspiring change, the fund supports the distribution of content and stories with the potential to influence and nurture a more compassionate society.</p>
          <p style={{margin: 0}}><a href="#">Discover more about the Storytellers Fund.</a></p>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="prose prose--measure">
          <h2 className="h-section" style={{marginBottom: 20}}>Talking about homes</h2>
          <p>To build a more equal society where everyone can thrive, we must ensure access to decent, affordable homes for all. We aim to shift the focus from housing as wealth to homes as essential for a decent life.</p>
          <p>In collaboration with the <a href="#">Nationwide Foundation</a> and <a href="#">FrameWorks</a>, we've explored public attitudes towards housing, using research to guide conversations on the issues and solutions. From this we have produced a toolkit with resources designed to help anyone discussing housing and homes.</p>
          <p style={{margin: 0}}><a href="#">Watch our short animation to learn more.</a></p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <h2 className="h-section">Toolkit and resources for talking about homes</h2>
          <p className="section__intro">The toolkit and resources below are useful for anyone who is talking and writing about housing and homes.</p>
          <div className="card-grid card-grid--4">
            {toolkit.map((c, i) => (
              <a key={i} href="#" className="card">
                <div className="card__media">
                  <img src={R('toolkit'+(i+1), `assets/toolkit-${i+1}.png`)} alt="" />
                </div>
                <h3 className="card__title">{c.title}</h3>
                <Eyebrow tags={c.tags} variant="onDark" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <h2 className="h-section">Discover more about narrative change</h2>
          <div className="discover-grid">
            <p className="result-meta">Showing 1 – 12 of 33</p>
            <aside className="discover-filters">
              <label className="filter-select">
                <span className="sr-only">Content format</span>
                <select defaultValue=""><option value="">Content format</option><option>Briefing</option><option>Comment</option><option>Idea</option><option>Reflection</option><option>Report</option><option>Resource</option></select>
              </label>
              <label className="filter-select">
                <span className="sr-only">Year</span>
                <select defaultValue=""><option value="">Year</option><option>2026</option><option>2025</option><option>2024</option></select>
              </label>
              <label className="filter-select">
                <span className="sr-only">Regions</span>
                <select defaultValue=""><option value="">Regions</option><option>England</option><option>Scotland</option><option>Wales</option><option>Northern Ireland</option></select>
              </label>
            </aside>
            <div className="discover-list">
              {items.map((it, i) => (
                <a key={i} href="#" className="list-item">
                  <div className="list-item__date"><time>{it.date}</time></div>
                  <h3 className="list-item__title">{it.title}</h3>
                  <p className="list-item__body">{it.body}</p>
                  <Eyebrow tags={it.tags} />
                </a>
              ))}
              <nav className="pager" aria-label="Pagination">
                <button type="button" className="pager__prev" disabled aria-disabled="true">Previous</button>
                <ul className="pager__pages">
                  <li><button type="button" aria-current="page"><span>1</span></button></li>
                  <li><button type="button"><span>2</span></button></li>
                  <li><button type="button"><span>3</span></button></li>
                </ul>
                <button type="button" className="pager__next">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <h2 className="h-section">Our experts</h2>
          <div className="experts-grid">
            <article className="expert">
              <div className="expert__photo">
                <img src={R('expert1', 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2NNM1VXdHJmMVczZ0hQUm1aWEs3LmpwZyJ9:joseph-rowntree-foundation:c1-8B-U74T-t2YDcH3e-ILyBaBt-FXjhjIB0wVcOAZM?width=750&height=750&crop=fp&fp=0.495237,0.266231')} alt="Husna Mortuza" loading="lazy" />
              </div>
              <div className="expert__body">
                <h3 className="expert__name"><a href="#">Husna Mortuza</a></h3>
                <p className="expert__role">Associate Director for Public Engagement</p>
                <ul className="expert__contact">
                  <li>
                    <span className="expert__icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007a62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><polyline points="3,7 12,13 21,7"/></svg>
                    </span>
                    <a href="mailto:husna.mortuza@jrf.org.uk">husna.mortuza@jrf.org.uk</a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="expert">
              <div className="expert__photo">
                <img src={R('expert2', 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2lacU1Xbzg5YnNacDFacmtucWN1LmpwZyJ9:joseph-rowntree-foundation:U1sNhpE0eIPVRLFnExsjOaFqdFXu4kbXEFYlQZLFqTU?width=750&height=750&crop=fp&fp=0.488558,0.260506')} alt="Natalie Tate" loading="lazy" />
              </div>
              <div className="expert__body">
                <h3 className="expert__name"><a href="#">Natalie Tate</a></h3>
                <p className="expert__role">Project Lead for Talking about Homes</p>
                <ul className="expert__contact">
                  <li>
                    <span className="expert__icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007a62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><polyline points="3,7 12,13 21,7"/></svg>
                    </span>
                    <a href="mailto:natalie.tate@jrf.org.uk">natalie.tate@jrf.org.uk</a>
                  </li>
                  <li>
                    <span className="expert__icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#007a62"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11.001-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                    </span>
                    <a href="#">Follow Natalie on LinkedIn</a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="expert">
              <div className="expert__photo">
                <img src={R('expert3', 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1BWMjhZNWVRWk1OczN0MkpLb1Y4LnBuZyJ9:joseph-rowntree-foundation:r6AkwsFXnGYwFwwlNKX51_0ASzmGbvuHS0sZymHz4Ps?width=750&height=750&crop=fp&fp=0.550661,0.365639')} alt="Cassandra Walker" loading="lazy" />
              </div>
              <div className="expert__body">
                <h3 className="expert__name"><a href="#">Cassandra Walker</a></h3>
                <p className="expert__role">Programme Lead (Movement Effectiveness)</p>
                <ul className="expert__contact">
                  <li>
                    <span className="expert__icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007a62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><polyline points="3,7 12,13 21,7"/></svg>
                    </span>
                    <a href="mailto:cassandra.walker@jrf.org.uk">cassandra.walker@jrf.org.uk</a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

window.NarrativePage = NarrativePage;
