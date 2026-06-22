// Home page — "A better future is possible"
function HomePage() {
  return (
    <>
      <section className="hero hero--cream">
        <div className="hero__split">
          <div className="hero__split-copy">
            <h1 className="h-home">A better future is possible.</h1>
            <p className="hero__lede">At the Joseph Rowntree Foundation, we work to speed up and support the transition to a future free from poverty, in which people and planet can flourish.</p>
            <a href="#" className="btn">Read more about us <span className="btn__arrow">→</span></a>
          </div>
          <div className="hero__split-media">
            <img src={R('heroHome', 'assets/home-hero.jpg')} alt="People sat in evening sun in park next to a body of water" />
          </div>
        </div>
      </section>

      <section className="feature feature--navy">
        <div className="container">
          <div className="feature__inner">
            <div className="feature__media">
              <img src={R('homeFeature', 'assets/home-feature.png')} alt="UK Poverty 2026 hero image" />
            </div>
            <div>
              <h2 className="feature__title">UK Poverty 2026: The essential guide to understanding poverty in the UK</h2>
              <p className="feature__body">This report sets out the nature of poverty in the UK, and evaluates changes under the last Conservative-led Government. It also sets out the scale of action necessary for the current Government to deliver the change it has promised.</p>
              <Eyebrow tags={["Report", "Child poverty", "Housing", "Social security", "Work", "Race and ethnicity"]} variant="onDark" />
              <a href="#" className="btn">Explore the report <span className="btn__arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section__head">
            <h2 className="h-section">Latest</h2>
          </div>

          <div className="pinned-feed">
            <article className="pinned-feed__lead">
              <div className="pinned-feed__lead-media">
                <img src={R('latest1', 'assets/latest-1.jpg')} alt="GGI rendering of new houses being built on a construction site" />
              </div>
              <div className="pinned-feed__lead-body">
                <span className="pinned-feed__item-date pinned-feed__lead-date">29 April 2026</span>
                <h3 className="pinned-feed__lead-title">Getting homes built: why social and affordable capacity is key</h3>
                <p className="pinned-feed__lead-lede">The Government can support housebuilding by increasing the financial capacity of social and affordable housing providers — here's how it could unlock the next 100,000 homes.</p>
                <Eyebrow tags={["Briefing", "Housing"]} />
              </div>
            </article>

            <aside className="pinned-feed__list" aria-label="More from this month">
              <ol className="pinned-feed__items">
                {[
                  { date: "27 April 2026", title: "Will party manifestos meet Scotland's child poverty targets?", summary: "We assess what the main parties are offering in the run-up to the Holyrood election — and whether it adds up to the action needed.", tags: ["Comment", "Child poverty"] },
                  { date: "24 April 2026", title: "Under pressure: the affordability challenges facing private renters", summary: "New analysis of rent-to-income ratios shows where the squeeze on private renters is becoming most acute.", tags: ["Briefing", "Housing"] },
                  { date: "22 April 2026", title: "Why social infrastructure matters for economic security", summary: "Libraries, community centres and youth clubs aren't a nice-to-have. They are part of what makes economic security possible.", tags: ["Idea", "Communities"] },
                  { date: "18 April 2026", title: "Supporting just and regenerative futures in the North East", summary: "Inside a year-long partnership with civil-society organisations exploring what economic transition could look like locally.", tags: ["Idea", "Power and participation"] },
                  { date: "17 April 2026", title: "Action needed for economically insecure disabled people in Scotland", summary: "Disabled people in Scotland face deepening insecurity. We set out the policy choices that could turn the picture around.", tags: ["Briefing", "Income"] },
                  { date: "14 April 2026", title: "A new framework for thinking about local economic security", summary: "A practical tool for places looking to measure and improve the economic security of their residents.", tags: ["Report"] },
                  { date: "11 April 2026", title: "What the Spring Statement means for low-income families", summary: "The headline measures, the missing pieces, and what the next fiscal event will need to do.", tags: ["Comment", "Cost of living"] },
                  { date: "08 April 2026", title: "Listening to the workers shaping the future of social care", summary: "Care workers tell us what a fair, secure future of work in the sector would look like — and what stands in the way.", tags: ["Idea", "Work"] },
                  { date: "04 April 2026", title: "How the next devolution settlement could shift power", summary: "Looking beyond mayors and combined authorities to the deeper question of who gets to decide.", tags: ["Briefing", "Power and participation"] },
                  { date: "02 April 2026", title: "Reading the small print: housing benefit and the rent cap", summary: "A short explainer on the technical changes that could make a real difference to renters' budgets.", tags: ["Comment", "Housing"] },
                ].map((it, i) => (
                  <li key={i} className="pinned-feed__item">
                    <a href="#" className="pinned-feed__item-link">
                      <span className="pinned-feed__item-date">{it.date}</span>
                      <h3 className="pinned-feed__item-title">{it.title}</h3>
                      <p className="pinned-feed__item-summary">{it.summary}</p>
                      <Eyebrow tags={it.tags} />
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="card-grid">
            <a href="#" className="card card--onDark">
              <div className="card__media"><img src={R('funding', 'assets/funding.jpg')} alt="" /></div>
              <h3 className="card__title">Funding</h3>
              <p className="card__body">The Joseph Rowntree Foundation funds and works in partnership with other organisations to unlock the UK from poverty.</p>
            </a>
            <a href="#" className="card card--onDark">
              <div className="card__media"><img src={R('ourPeople', 'assets/our-people.jpg')} alt="" /></div>
              <h3 className="card__title">Our people</h3>
              <p className="card__body">Meet our leadership team and our teams of experts. You can also learn more about our trustees.</p>
            </a>
            <a href="#" className="card card--onDark">
              <div className="card__media"><img src={R('careers', 'assets/careers.jpg')} alt="" /></div>
              <h3 className="card__title">Careers</h3>
              <p className="card__body">Do you want to help build a fairer future, free from poverty? Join us and use your skills to make a real difference.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

window.HomePage = HomePage;
