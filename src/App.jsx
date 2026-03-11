import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('close');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 150) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav>
        <div className="inner">
          <div className="logo">
            Keboola<span>Financial Intelligence Suite</span>
          </div>
          <a href="#s1" className={activeSection === 's1' ? 'active' : ''}>I. World Changed</a>
          <a href="#s2" className={activeSection === 's2' ? 'active' : ''}>II. CFO Evolution</a>
          <a href="#s3" className={activeSection === 's3' ? 'active' : ''}>III. Data Problem</a>
          <a href="#s4" className={activeSection === 's4' ? 'active' : ''}>IV. Before/After</a>
          <a href="#s5" className={activeSection === 's5' ? 'active' : ''}>V. How It Works</a>
          <a href="#s6" className={activeSection === 's6' ? 'active' : ''}>VI. Guardrails</a>
          <a href="#s7" className={activeSection === 's7' ? 'active' : ''}>VII. Architecture</a>
          <a href="#s8" className={activeSection === 's8' ? 'active' : ''}>VIII. Drift</a>
          <a href="#s9" className={activeSection === 's9' ? 'active' : ''}>IX. AI-Ready</a>
        </div>
      </nav>

      {/* =================== I. THE WORLD HAS CHANGED =================== */}
      <section id="s1">
        <div className="sn">Section I</div>
        <div className="st">The World Has Changed</div>
        <div className="ss">
          What 200 finance chiefs at billion-dollar companies say is top of mind for 2026
        </div>
        <div className="card cp">
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-num blue">87%</div>
              <div className="stat-bar">
                <div className="stat-bar-f blue" style={{ width: '87%' }}></div>
              </div>
              <div className="stat-desc">
                of CFOs say AI will be <strong>extremely or very important</strong> to finance in 2026
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-num blue">54%</div>
              <div className="stat-bar">
                <div className="stat-bar-f blue" style={{ width: '54%' }}></div>
              </div>
              <div className="stat-desc">
                say <strong>integrating AI agents</strong> is their top priority
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-num amber">21%</div>
              <div className="stat-bar">
                <div className="stat-bar-f amber" style={{ width: '21%' }}></div>
              </div>
              <div className="stat-desc">
                say AI has actually delivered <strong>clear, measurable value</strong>
              </div>
            </div>
          </div>
          <div className="tension">
            The ambition is there. The results <em>aren't</em>. Yet.
          </div>
          <div className="src-line">
            Deloitte Q4 2025 CFO Signals Survey — 200 finance chiefs at $1B+ North American companies
          </div>
        </div>
      </section>

      {/* Apps + Agent Growth */}
      <section style={{ paddingTop: 0 }}>
        <div className="card cp">
          <div className="charts-row">
            <div className="chart-group">
              <h3>Number of Applications Today</h3>
              <div className="donut-wrap">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#e5e6e3" strokeWidth="24" strokeDasharray="88 352" strokeDashoffset="0" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#a4aaa8" strokeWidth="24" strokeDasharray="66 374" strokeDashoffset="-88" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#2864dc" strokeWidth="24" strokeDasharray="158 282" strokeDashoffset="-154" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#783cdc" strokeWidth="24" strokeDasharray="70 370" strokeDashoffset="-312" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#1a1a2c" strokeWidth="24" strokeDasharray="26 414" strokeDashoffset="-382" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#f0f0eb" strokeWidth="24" strokeDasharray="31 409" strokeDashoffset="-408" />
                </svg>
                <div className="donut-ctr">
                  <div className="donut-hero">52%</div>
                  <div className="donut-sub">have 50+ apps</div>
                </div>
              </div>
              <div className="legend">
                <div className="leg"><div className="ldot" style={{ background: '#e5e6e3' }}></div>1–10 (20%)</div>
                <div className="leg"><div className="ldot" style={{ background: '#a4aaa8' }}></div>11–50 (15%)</div>
                <div className="leg"><div className="ldot" style={{ background: '#2864dc' }}></div>51–100 (36%)</div>
                <div className="leg"><div className="ldot" style={{ background: '#783cdc' }}></div>101–1K (16%)</div>
                <div className="leg"><div className="ldot" style={{ background: '#1a1a2c' }}></div>1K+ (6%)</div>
              </div>
            </div>
            <div className="chart-group">
              <h3>And It's About to Get Worse</h3>
              <div className="growth-row">
                <div className="growth-card">
                  <div className="gc-num">40%</div>
                  <div className="gc-lbl">of enterprise apps will feature <strong>AI agents</strong> by 2026</div>
                </div>
                <div className="growth-card">
                  <div className="gc-num">75%</div>
                  <div className="gc-lbl">of new apps will be built with <strong>low-code</strong> by 2026</div>
                </div>
              </div>
              <div className="app-trajectory">
                <div className="traj-card">
                  <div className="traj-yr">2020</div>
                  <div className="traj-num">110</div>
                  <div className="traj-lbl">apps</div>
                </div>
                <div className="traj-arrow">→</div>
                <div className="traj-card">
                  <div className="traj-yr">2023</div>
                  <div className="traj-num">254</div>
                  <div className="traj-lbl">apps</div>
                </div>
                <div className="traj-arrow">→</div>
                <div className="traj-card">
                  <div className="traj-yr">2026</div>
                  <div className="traj-num">291</div>
                  <div className="traj-lbl">apps</div>
                </div>
                <div className="traj-arrow">→</div>
                <div className="traj-card future">
                  <div className="traj-yr">Soon</div>
                  <div className="traj-num">?</div>
                  <div className="traj-lbl">+ AI agents</div>
                </div>
              </div>
              <div className="growth-note">
                Each new agent = <em>another data source, another integration point</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== II. CFO EVOLUTION =================== */}
      <section id="s2">
        <div className="sn">Section II</div>
        <div className="st">The CFO Must Evolve</div>
        <div className="ss">
          Three stages of evolution — and a barrier most organizations never cross
        </div>
        <div className="card cp">
          <div className="evo-track">
            <div className="evo-stage">
              <div className="evo-iw">🧮</div>
              <h3>Score Keeper</h3>
              <p>Maintain · Provide</p>
            </div>
            <span className="evo-arr">→</span>
            <div className="evo-stage">
              <div className="evo-iw">🛡️</div>
              <h3>Financial Steward</h3>
              <p>Align · Manage</p>
            </div>
            <span className="evo-arr">→</span>
            <div className="evo-stage">
              <div className="evo-iw">🧭</div>
              <h3>Strategic Partner</h3>
              <p>Steer · Prioritize</p>
            </div>
            <div className="evo-barrier">
              <div className="evo-bl"></div>
              <div className="evo-blbl">The Gap</div>
            </div>
            <div className="evo-stage final">
              <div className="evo-iw">✨</div>
              <h3>Intelligent Finance</h3>
              <p>Organizational transformation</p>
            </div>
          </div>
          <div className="evo-note">
            The leap requires a new operating model — a learning engine at the core.
          </div>
        </div>
      </section>

      {/* Flywheel */}
      <section style={{ paddingTop: 0 }}>
        <div className="card cp" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gray-line)', marginBottom: '32px' }}>
            The Finance Operating Model
          </div>
          <div className="fw-ctr">
            <svg viewBox="0 0 480 480">
              <defs>
                <marker id="am" markerWidth="6" markerHeight="4.5" refX="3" refY="2.25" orient="auto">
                  <path d="M0,0 L6,2.25 L0,4.5Z" className="fw-ah" />
                </marker>
              </defs>
              <text className="fw-o" x="240" y="62">Faster close cycles</text>
              <text className="fw-o" x="420" y="244">Better forecasts</text>
              <text className="fw-o" x="240" y="432">Fewer errors</text>
              <text className="fw-o" x="58" y="244">Stronger compliance</text>

              <path d="M268,100 C310,90 340,108 354,132" className="fw-a" markerEnd="url(#am)" />
              <path d="M374,168 C392,210 392,298 374,330" className="fw-a" markerEnd="url(#am)" />
              <path d="M354,348 C335,370 290,385 258,385" className="fw-a" markerEnd="url(#am)" />
              <path d="M222,385 C186,382 148,368 128,348" className="fw-a" markerEnd="url(#am)" />
              <path d="M106,330 C88,295 88,204 106,168" className="fw-a" markerEnd="url(#am)" />
              <path d="M128,132 C148,110 195,92 222,96" className="fw-a" markerEnd="url(#am)" />

              <circle cx="240" cy="240" r="56" fill="var(--surface-alt)" stroke="var(--accent-orange)" strokeWidth="1" />
              <text x="240" y="230" fontSize="12" fill="var(--ink-navy)" textAnchor="middle" fontWeight="600">Corporate</text>
              <text x="240" y="245" fontSize="12" fill="var(--ink-navy)" textAnchor="middle" fontWeight="600">Memory</text>
              <text x="240" y="260" fontSize="7" fill="var(--dark-neutral)" textAnchor="middle">Continuously updated</text>

              <g transform="translate(240,95)">
                <circle r="27" className="fw-nb" />
                <text className="fw-i" y="-4">📥</text>
                <text className="fw-l" y="12">Data Flows In</text>
              </g>
              <g transform="translate(365,148)">
                <circle r="27" className="fw-nb" />
                <text className="fw-i" y="-6">🔗</text>
                <text className="fw-l" y="8" fontSize="8">Meaning Forms</text>
                <text className="fw-sl" y="18">from Data</text>
              </g>
              <g transform="translate(365,332)">
                <circle r="27" className="fw-nb" />
                <text className="fw-i" y="-4">⚙️</text>
                <text className="fw-l" y="12">Agents Act</text>
              </g>
              <g transform="translate(240,385)">
                <circle r="27" className="fw-nb" />
                <text className="fw-i" y="-4">📊</text>
                <text className="fw-l" y="12">Outputs</text>
              </g>
              <g transform="translate(115,332)">
                <circle r="27" className="fw-nb" />
                <text className="fw-i" y="-6">🔁</text>
                <text className="fw-l" y="9" fontSize="8.5">Outcomes</text>
                <text className="fw-sl" y="19">Feed Back</text>
              </g>
              <g transform="translate(115,148)">
                <circle r="27" className="fw-nb" />
                <text className="fw-i" y="-6">🧠</text>
                <text className="fw-l" y="9" fontSize="8.5">System</text>
                <text className="fw-sl" y="19">Learns</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* =================== III. WHY TRADITIONAL APPROACHES FAIL =================== */}
      <section id="s3">
        <div className="sn">Section III</div>
        <div className="st">Why Traditional Approaches Fail</div>
        <div className="ss">The reality of enterprise financial data flows</div>

        <div className="tagline-hero" style={{ marginBottom: '32px' }}>
          <div className="tl-main">Data movement is solved.</div>
          <div className="tl-em">Data meaning is not.</div>
          <div className="tl-quest">...but is movement really solved? Even that is only partially true.</div>
        </div>

        <div className="card cp">
          <svg className="sp-svg" viewBox="0 0 1000 460">
            <defs>
              <marker id="aok" markerWidth="5" markerHeight="3.5" refX="4" refY="1.75" orient="auto">
                <path d="M0,0 L5,1.75 L0,3.5" fill="none" stroke="#2864dc" strokeWidth=".7" />
              </marker>
              <marker id="agr" markerWidth="5" markerHeight="3.5" refX="4" refY="1.75" orient="auto">
                <path d="M0,0 L5,1.75 L0,3.5" fill="none" stroke="#a4aaa8" strokeWidth=".7" />
              </marker>
            </defs>
            <path d="M200,75 Q350,38 435,115" className="fok" markerEnd="url(#aok)" />
            <path d="M495,170 Q495,242 495,272" className="fok" markerEnd="url(#aok)" />
            <path d="M555,140 Q640,125 705,150" className="fok" markerEnd="url(#aok)" />
            <path d="M255,95 Q315,195 415,140" className="fint" markerEnd="url(#agr)" />
            <path d="M765,180 Q810,245 775,308" className="fint" />
            <path d="M168,108 Q128,215 168,272" className="fint" markerEnd="url(#agr)" />
            <path d="M495,315 Q395,362 325,358" className="fint" />
            <path d="M585,305 Q645,345 675,372" className="fint" markerEnd="url(#agr)" />
            <path d="M218,315 Q315,345 415,335" className="fint" />
            <path d="M825,170 Q895,245 855,335" className="fint" markerEnd="url(#agr)" />
            <path d="M545,76 Q615,48 705,65" className="fbrk" />
            <path d="M755,100 Q645,195 565,150" className="fbrk" />
            <path d="M435,315 Q345,275 255,290" className="fbrk" />
            <path d="M315,374 Q445,422 555,392" className="fbrk" />

            <g transform="translate(108,48)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">📜</text>
              <text className="nl" x="73" y="23">Ironclad</text>
              <text className="nsl" x="73" y="37">Contracts</text>
            </g>
            <g transform="translate(395,48)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">☁️</text>
              <text className="nl" x="73" y="23">Salesforce</text>
              <text className="nsl" x="73" y="37">CRM / Deals</text>
            </g>
            <g transform="translate(695,48)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">🛒</text>
              <text className="nl" x="73" y="23">Coupa</text>
              <text className="nsl" x="73" y="37">Procurement</text>
            </g>
            <g transform="translate(78,262)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">💲</text>
              <text className="nl" x="73" y="23">CPQ</text>
              <text className="nsl" x="73" y="37">Pricing</text>
            </g>
            <g transform="translate(415,120)">
              <rect className="nr hub" width="145" height="62" />
              <text className="ni" x="28" y="31">🏢</text>
              <text className="nl" x="86" y="25" style={{ fontSize: '12px' }}>NetSuite</text>
              <text className="nsl" x="86" y="40">Accounting / ERP</text>
            </g>
            <g transform="translate(735,135)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">⚙️</text>
              <text className="nl" x="73" y="23">Internal Apps</text>
              <text className="nsl" x="73" y="37">Custom Tools</text>
            </g>
            <g transform="translate(138,345)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">📊</text>
              <text className="nl" x="73" y="23">Mixpanel</text>
              <text className="nsl" x="73" y="37">Analytics</text>
            </g>
            <g transform="translate(415,278)">
              <rect className="nr" width="128" height="54" />
              <text className="ni" x="24" y="27">📒</text>
              <text className="nl" x="78" y="23">General Ledger</text>
              <text className="nsl" x="78" y="37">Accounting</text>
            </g>
            <g transform="translate(555,365)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">🔧</text>
              <text className="nl" x="73" y="23">Jira</text>
              <text className="nsl" x="73" y="37">Engineering</text>
            </g>
            <g transform="translate(765,305)">
              <rect className="nr" width="118" height="54" />
              <text className="ni" x="24" y="27">🚚</text>
              <text className="nl" x="73" y="23">Logistics</text>
              <text className="nsl" x="73" y="37">Supply Chain</text>
            </g>

            <g transform="translate(365,105)">
              <rect className="bw" width="96" height="18" x="-48" y="-9" />
              <text className="btw">⚠ Schema mismatch</text>
            </g>
            <g transform="translate(625,44)">
              <rect className="be" width="96" height="18" x="-48" y="-9" />
              <text className="bte">✕ Validation failed</text>
            </g>
            <g transform="translate(825,288)">
              <rect className="bs" width="104" height="18" x="-52" y="-9" />
              <text className="bts">⟳ Stale data — 72h lag</text>
            </g>
            <g transform="translate(335,225)">
              <rect className="bw" width="86" height="18" x="-43" y="-9" />
              <text className="btw">? Unreconciled</text>
            </g>
          </svg>
        </div>
      </section>

      <div className="divider"></div>

      {/* =================== IV. BEFORE / AFTER =================== */}
      <section id="s4">
        <div className="sn">Section IV</div>
        <div className="st">The Before / After Moment</div>
        <div className="ss">Pick the scenario that hits hardest — same architecture solves all three</div>

        <div className="tabs">
          <div className={`tab ${activeTab === 'close' ? 'active' : ''}`} onClick={() => setActiveTab('close')}>Month-End Close</div>
          <div className={`tab ${activeTab === 'revenue' ? 'active' : ''}`} onClick={() => setActiveTab('revenue')}>Revenue Recognition</div>
          <div className={`tab ${activeTab === 'budget' ? 'active' : ''}`} onClick={() => setActiveTab('budget')}>Budget vs. Actuals</div>
        </div>

        <div className={`scenario ${activeTab === 'close' ? 'active' : ''}`} id="close">
          <div className="comparison">
            <div className="before">
              <div className="sl">Before</div>
              <div className="s-title">The 12-Day Close</div>
              <div className="tl">
                <div className="tli">
                  <div className="tlm">1-3</div>
                  <div>
                    <div className="tld">Days 1–3: Data Extraction</div>
                    <div className="tlp">Pull data from 7 systems. Manual exports, copy-paste, format conversion.</div>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">4-6</div>
                  <div>
                    <div className="tld">Days 4–6: Reconciliation</div>
                    <div className="tlp">Revenue doesn't match billing. Three deals never made it to NetSuite. $400K invoice has wrong terms.</div>
                    <span className="bdg br">3 unresolved discrepancies</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">7-9</div>
                  <div>
                    <div className="tld">Days 7–9: Investigation</div>
                    <div className="tlp">Track down amendments. Find duplicate journal entries. Discover cost center mismatches.</div>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">12</div>
                  <div>
                    <div className="tld">Day 12: Close</div>
                    <div className="tlp">Board asks about segment profitability — answer takes a week.</div>
                    <span className="bdg br">60% confidence</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="after">
              <div className="sl">After</div>
              <div className="s-title">The 3-Day Close</div>
              <div className="tl">
                <div className="tli">
                  <div className="tlm">∞</div>
                  <div>
                    <div className="tld">Continuous: Context Graph Running</div>
                    <div className="tlp">Data flows from all systems in real-time. Every entity linked. Discrepancies flagged instantly.</div>
                    <span className="bdg bb">Real-time reconciliation</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">1</div>
                  <div>
                    <div className="tld">Day 1: Auto-Resolution</div>
                    <div className="tlp">Reconciliation Agent resolved 94% of discrepancies. Remaining 6% flagged with audit trails.</div>
                    <span className="bdg bg">94% auto-resolved</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">2</div>
                  <div>
                    <div className="tld">Day 2: Human Review</div>
                    <div className="tlp">Team reviews exceptions. Budget Drift Agent surfaces 12% marketing overspend with root cause.</div>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">3</div>
                  <div>
                    <div className="tld">Day 3: Close with Confidence</div>
                    <div className="tlp">Board question answered in 30 seconds from context graph.</div>
                    <span className="bdg bg">98% confidence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="diff">
            <h4>The Difference</h4>
            <p>Not faster spreadsheets. A different operating model where <em>reconciliation is continuous</em> and the system gets better every cycle.</p>
          </div>
        </div>

        <div className={`scenario ${activeTab === 'revenue' ? 'active' : ''}`} id="revenue">
          <div className="comparison">
            <div className="before">
              <div className="sl">Before</div>
              <div className="s-title">The ASC 606 Scramble</div>
              <div className="tl">
                <div className="tli">
                  <div className="tlm">1</div>
                  <div>
                    <div className="tld">Manual Contract Review</div>
                    <div className="tlp">2,000+ active contracts. Hundreds reviewed per quarter.</div>
                    <span className="bdg br">2,000+ contracts</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">2</div>
                  <div>
                    <div className="tld">Amendments in the Wild</div>
                    <div className="tlp">Amendments in email threads. Side letters in PDFs. No system tracks them.</div>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">3</div>
                  <div>
                    <div className="tld">Audit Documentation</div>
                    <div className="tlp">6 weeks assembling docs. Single question requires 5 systems to answer.</div>
                    <span className="bdg br">2 days per question</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="after">
              <div className="sl">After</div>
              <div className="s-title">Continuous Revenue Intelligence</div>
              <div className="tl">
                <div className="tli">
                  <div className="tlm">1</div>
                  <div>
                    <div className="tld">Auto-Parsed Contracts</div>
                    <div className="tlp">Performance obligations identified, matched to pricing, linked to revenue schedule.</div>
                    <span className="bdg bg">Continuous parsing</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">2</div>
                  <div>
                    <div className="tld">Amendment Impact Analysis</div>
                    <div className="tlp">Context graph flags downstream impact instantly — schedules, invoices, ASC 606 triggers.</div>
                    <span className="bdg bb">Instant impact</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">3</div>
                  <div>
                    <div className="tld">Living Audit Trail</div>
                    <div className="tlp">Auditor questions answered in seconds — every source linked, every calculation traceable.</div>
                    <span className="bdg bg">30 seconds per question</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="diff">
            <h4>The Difference</h4>
            <p>Revenue recognition becomes a <em>continuous process</em>, not a quarterly crisis.</p>
          </div>
        </div>

        <div className={`scenario ${activeTab === 'budget' ? 'active' : ''}`} id="budget">
          <div className="comparison">
            <div className="before">
              <div className="sl">Before</div>
              <div className="s-title">The Monthly Surprise</div>
              <div className="tl">
                <div className="tli">
                  <div className="tlm">1</div>
                  <div>
                    <div className="tld">Stale Data</div>
                    <div className="tlp">Spend fragmented across Coupa, Concur, Workday, Jira. Report data is 3 weeks old.</div>
                    <span className="bdg br">3-week data lag</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">2</div>
                  <div>
                    <div className="tld">Naming Chaos</div>
                    <div className="tlp">Is "cloud infrastructure" the same as "AWS hosting"? 1 week/month normalizing categories.</div>
                    <span className="bdg br">1 week/month normalizing</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">3</div>
                  <div>
                    <div className="tld">Painful Reforecasting</div>
                    <div className="tlp">Mid-year reforecast: 4 weeks. Every department uses different assumptions.</div>
                    <span className="bdg br">4 weeks to reforecast</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="after">
              <div className="sl">After</div>
              <div className="s-title">Living Budget Intelligence</div>
              <div className="tl">
                <div className="tli">
                  <div className="tlm">1</div>
                  <div>
                    <div className="tld">Unified Categories</div>
                    <div className="tlp">Business Glossary maps all naming variations to unified categories — automatically.</div>
                    <span className="bdg bg">Auto-harmonized</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">2</div>
                  <div>
                    <div className="tld">Real-Time Variance Alerts</div>
                    <div className="tlp">Marketing 12% over plan? Alert with context: campaigns, vendors, approvals.</div>
                    <span className="bdg bb">Real-time visibility</span>
                  </div>
                </div>
                <div className="tli">
                  <div className="tlm">3</div>
                  <div>
                    <div className="tld">Self-Adjusting Forecast</div>
                    <div className="tlp">Forecast Variance Agent adjusts rolling forecast. Flags where assumptions no longer hold.</div>
                    <span className="bdg bg">Continuous forecast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="diff">
            <h4>The Difference</h4>
            <p>From monthly rearview-mirror reporting to <em>continuous forward-looking intelligence</em>.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* =================== V. HOW KEBOOLA VERITY WORKS =================== */}
      <section id="s5">
        <div className="sn">Section V</div>
        <div className="st">How Keboola Verity Works</div>
        <div className="ss">Data flows through three transformation layers — from scattered fragments to connected meaning</div>

        <div className="march-canvas card">
          <div className="march-top">
            <div className="m-src-col">
              <div className="si">Salesforce<span className="ar">→</span></div>
              <div className="si">Coupa<span className="ar">→</span></div>
              <div className="si">CPQ<span className="ar">→</span></div>
              <div className="si">Ironclad<span className="ar">→</span></div>
              <div className="si">NetSuite<span className="ar">→</span></div>
              <div className="si">Mixpanel<span className="ar">→</span></div>
              <div className="si">Jira<span className="ar">→</span></div>
            </div>

            <div className="panes-area">
              <div className="panes-bg-line"></div>

              <div className="pane">
                <div className="flow-node fn-1"></div>
                <h4>Data Harmonization</h4>
                <p>Unified vocabulary across all systems</p>
                <div className="pane-vis">
                  <svg viewBox="0 0 100 180" width="80">
                    <rect x="10" y="10" width="12" height="8" rx="2" fill="#8c503c" opacity=".6" />
                    <rect x="30" y="20" width="14" height="6" rx="2" fill="#783cdc" opacity=".6" />
                    <rect x="15" y="35" width="10" height="10" rx="2" fill="#2864dc" opacity=".6" />
                    <rect x="45" y="12" width="8" height="12" rx="2" fill="#147864" opacity=".6" />
                    <text x="50" y="70" fontSize="14" textAnchor="middle" fill="#a4aaa8">↓</text>
                    <rect x="20" y="90" width="14" height="10" rx="2" fill="#8c503c" opacity=".9" />
                    <rect x="20" y="106" width="14" height="10" rx="2" fill="#783cdc" opacity=".9" />
                    <rect x="20" y="122" width="14" height="10" rx="2" fill="#2864dc" opacity=".9" />
                    <rect x="20" y="138" width="14" height="10" rx="2" fill="#147864" opacity=".9" />
                    <text x="50" y="115" fontSize="7" fill="#333542" fontWeight="500" textAnchor="middle">Same shape</text>
                    <text x="50" y="124" fontSize="7" fill="#333542" fontWeight="500" textAnchor="middle">Different colors</text>
                  </svg>
                </div>
                <div className="flow-node fn-2"></div>
              </div>

              <div className="pane">
                <div className="flow-node fn-1"></div>
                <h4>Data Quality</h4>
                <p>Validated, scored, and reconciled</p>
                <div className="pane-vis">
                  <svg viewBox="0 0 100 180" width="80">
                    <rect x="20" y="20" width="14" height="10" rx="2" fill="#2864dc" opacity=".7" />
                    <text x="40" y="28" fontSize="8" fill="#147864" fontWeight="600">✓</text>
                    <rect x="20" y="40" width="14" height="10" rx="2" fill="#8c503c" opacity=".7" />
                    <text x="40" y="48" fontSize="8" fill="#8c503c" fontWeight="600">⚠</text>
                    <rect x="20" y="60" width="14" height="10" rx="2" fill="#147864" opacity=".7" />
                    <text x="40" y="68" fontSize="8" fill="#147864" fontWeight="600">✓</text>
                    <rect x="20" y="80" width="14" height="10" rx="2" fill="#783cdc" opacity=".7" />
                    <text x="40" y="88" fontSize="8" fill="#147864" fontWeight="600">✓</text>
                    <text x="50" y="115" fontSize="14" textAnchor="middle" fill="#a4aaa8">↓</text>
                    <rect x="25" y="130" width="14" height="10" rx="2" fill="#2864dc" opacity="1" />
                    <rect x="25" y="146" width="14" height="10" rx="2" fill="#147864" opacity="1" />
                    <rect x="25" y="162" width="14" height="10" rx="2" fill="#783cdc" opacity="1" />
                    <text x="55" y="150" fontSize="7" fill="#333542" fontWeight="500" textAnchor="middle">Clean &</text>
                    <text x="55" y="159" fontSize="7" fill="#333542" fontWeight="500" textAnchor="middle">validated</text>
                  </svg>
                </div>
                <div className="flow-node fn-2"></div>
              </div>

              <div className="pane">
                <div className="flow-node fn-1"></div>
                <h4>Context</h4>
                <p>Your rules & relationships applied</p>
                <div className="pane-vis">
                  <svg viewBox="0 0 100 180" width="80">
                    <circle cx="25" cy="25" r="4" fill="#2864dc" opacity=".6" />
                    <circle cx="55" cy="20" r="4" fill="#147864" opacity=".6" />
                    <circle cx="40" cy="45" r="4" fill="#8c503c" opacity=".6" />
                    <circle cx="70" cy="40" r="4" fill="#783cdc" opacity=".6" />
                    <text x="50" y="75" fontSize="14" textAnchor="middle" fill="#a4aaa8">↓</text>
                    <line x1="25" y1="105" x2="55" y2="100" stroke="#a4aaa8" strokeWidth="1" opacity=".8" />
                    <line x1="55" y1="100" x2="70" y2="120" stroke="#a4aaa8" strokeWidth="1" opacity=".8" />
                    <line x1="25" y1="105" x2="40" y2="125" stroke="#a4aaa8" strokeWidth="1" opacity=".8" />
                    <line x1="40" y1="125" x2="70" y2="120" stroke="#a4aaa8" strokeWidth="1" opacity=".8" />
                    <line x1="55" y1="100" x2="40" y2="125" stroke="#a4aaa8" strokeWidth="1" opacity=".8" />
                    <circle cx="25" cy="105" r="4" fill="#2864dc" />
                    <circle cx="55" cy="100" r="4" fill="#147864" />
                    <circle cx="40" cy="125" r="4" fill="#8c503c" />
                    <circle cx="70" cy="120" r="4" fill="#783cdc" />
                    <text x="50" y="150" fontSize="7" fill="#333542" fontWeight="500" textAnchor="middle">Connected</text>
                    <text x="50" y="159" fontSize="7" fill="#333542" fontWeight="500" textAnchor="middle">meaning</text>
                  </svg>
                </div>
                <div className="flow-node fn-2"></div>
              </div>
            </div>

            <div className="m-graph-col">
              <div className="gov">
                <div className="gov-l">Context Graph</div>
                <svg className="gsvg" viewBox="0 0 200 180">
                  <line x1="100" y1="35" x2="55" y2="65" className="ges" />
                  <line x1="100" y1="35" x2="145" y2="60" className="ges" />
                  <line x1="55" y1="65" x2="40" y2="110" className="ge" />
                  <line x1="55" y1="65" x2="100" y2="90" className="ges" />
                  <line x1="145" y1="60" x2="160" y2="105" className="ge" />
                  <line x1="145" y1="60" x2="100" y2="90" className="ges" />
                  <line x1="100" y1="90" x2="40" y2="110" className="ge" />
                  <line x1="100" y1="90" x2="160" y2="105" className="ge" />
                  <line x1="40" y1="110" x2="70" y2="148" className="ge" />
                  <line x1="160" y1="105" x2="130" y2="148" className="ge" />
                  <line x1="70" y1="148" x2="130" y2="148" className="ge" />
                  <line x1="100" y1="90" x2="70" y2="148" className="ge" />
                  <line x1="100" y1="90" x2="130" y2="148" className="ge" />
                  <g className="gn" transform="translate(100,35)"><circle r="14" /><text className="gni" y="-2">👤</text><text y="8">Customer</text></g>
                  <g className="gn" transform="translate(55,65)"><circle r="12" /><text className="gni" y="-2">📜</text><text y="7" fontSize="5.5">Contract</text></g>
                  <g className="gn" transform="translate(145,60)"><circle r="12" /><text className="gni" y="-2">📦</text><text y="7" fontSize="5.5">Order</text></g>
                  <g className="gn" transform="translate(100,90)"><circle r="14" /><text className="gni" y="-2">🧾</text><text y="8">Invoice</text></g>
                  <g className="gn" transform="translate(40,110)"><circle r="11" /><text className="gni" y="-2">💰</text><text y="7" fontSize="5">Payment</text></g>
                  <g className="gn" transform="translate(160,105)"><circle r="11" /><text className="gni" y="-2">📒</text><text y="7" fontSize="5">Journal</text></g>
                  <g className="gn" transform="translate(70,148)"><circle r="10" /><text className="gni" y="-2">👥</text><text y="7" fontSize="5">Users</text></g>
                  <g className="gn" transform="translate(130,148)"><circle r="10" /><text className="gni" y="-2">📈</text><text y="7" fontSize="5">Metrics</text></g>
                </svg>
              </div>
              <div className="cm-b"><strong>Corporate Memory</strong>Learning continuously</div>
            </div>
          </div>

          <div className="march-bottom">
            <div className="pipeline-title">Two Pipelines, One Architecture</div>
            <div className="pipe-row">
              <div className="pipe-row-label fin">Finance<br />Pipeline</div>
              <div className="pipe-cells">
                <div className="pipe-cell std"><div className="pc-id">T0</div><div className="pc-name">Core Load</div></div>
                <div className="pipe-cell std"><div className="pc-id">T1</div><div className="pc-name">COA Build</div></div>
                <div className="pipe-cell cust"><div className="pc-id">T2</div><div className="pc-name">Journal Entries</div></div>
                <div className="pipe-cell std"><div className="pc-id">T3</div><div className="pc-name">Processing</div></div>
                <div className="pipe-cell std"><div className="pc-id">T4</div><div className="pc-name">Validation</div></div>
                <div className="pipe-cell std"><div className="pc-id">T5</div><div className="pc-name">COA Consol.</div></div>
                <div className="pipe-cell std"><div className="pc-id">T6</div><div className="pc-name">KPI Metrics</div></div>
              </div>
            </div>
            <div className="pipe-connect">
              <div className="pipe-connect-inner">
                <span className="pc-arrow">↕</span><span className="pc-arrow">↕</span><span className="pc-arrow">↕</span><span className="pc-arrow">↕</span><span className="pc-arrow">↕</span><span className="pc-arrow">↕</span><span className="pc-arrow">↕</span>
              </div>
            </div>
            <div className="pipe-row">
              <div className="pipe-row-label biz">Business<br />Process</div>
              <div className="pipe-cells">
                <div className="pipe-cell biz-cell"><div className="pc-name">Marketing</div></div>
                <div className="pipe-cell biz-cell"><div className="pc-name">POC</div></div>
                <div className="pipe-cell biz-cell"><div className="pc-name">Contract</div></div>
                <div className="pipe-cell biz-cell"><div className="pc-name">Invoice</div></div>
                <div className="pipe-cell biz-cell"><div className="pc-name">Collection</div></div>
                <div className="pipe-cell biz-cell"><div className="pc-name">Accounting</div></div>
                <div className="pipe-cell biz-cell"><div className="pc-name">Service</div></div>
              </div>
            </div>
            <div className="pipe-legend">
              <span><div className="pl-dot" style={{ background: 'var(--accent-teal)' }}></div>Standardized (reusable)</span>
              <span><div className="pl-dot" style={{ background: 'var(--accent-orange)' }}></div>Per-ERP customization</span>
              <span style={{ fontStyle: 'italic' }}>All SQL · All Snowflake · All parameterized</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* =================== VI. GUARDRAILS =================== */}
      <section id="s6">
        <div className="sn">Section VI</div>
        <div className="st">Why Guardrails Matter</div>
        <div className="ss">Deploying AI in the most regulated function of your business</div>
        <div className="card cp">
          <div className="gr-row">
            <div className="gr-ch">
              <h3>Top Compliance Requirements (CFO Survey)</h3>
              <div className="br-row"><div className="br-lbl">Cybersecurity & Info Protection</div><div className="br-tk"><div className="br-fl bf-cy" style={{ width: '92%' }}><span>92%</span></div></div></div>
              <div className="br-row"><div className="br-lbl" style={{ fontWeight: '600', color: 'var(--ink-navy)' }}>Trusted / Responsible AI</div><div className="br-tk"><div className="br-fl bf-hl" style={{ width: '75%' }}><span>75%</span></div></div></div>
              <div className="br-row"><div className="br-lbl">ESG & Sustainability</div><div className="br-tk"><div className="br-fl bf-df" style={{ width: '68%' }}><span>68%</span></div></div></div>
              <div className="br-row"><div className="br-lbl">International Trade</div><div className="br-tk"><div className="br-fl bf-df" style={{ width: '58%' }}><span>58%</span></div></div></div>
              <div className="br-row"><div className="br-lbl">Data Privacy (GDPR, etc.)</div><div className="br-tk"><div className="br-fl bf-df" style={{ width: '54%' }}><span>54%</span></div></div></div>
            </div>
            <div className="gr-br"><p>How do you deploy AI agents in finance <strong>safely?</strong></p><div className="arr">→</div></div>
            <div className="gr-d">
              <div className="gr-bx">
                <div className="gr-ags">
                  <div className="gr-ag-icon">🔍</div><div className="gr-ag-icon">🔄</div><div className="gr-ag-icon">📊</div><div className="gr-ag-icon">📈</div><div className="gr-ag-icon">⚙️</div>
                </div>
                <div className="gr-lb">AI Agents</div>
                <div className="gr-aw">↓ ↓ ↓ ↓ ↓</div>
                <div className="gr-ap">
                  <h4>Agentic Process APIs</h4>
                  <div className="gr-tg"><span className="gr-t">Scoped access</span><span className="gr-t">Audit trails</span><span className="gr-t">Human-in-the-loop</span><span className="gr-t">Task permissions</span></div>
                </div>
                <div className="gr-aw">↓ ↓ ↓ ↓ ↓</div>
                <div className="gr-mn">
                  <h4>Context Graph</h4>
                  <p>Your financial data — protected & structured</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gr-nt"><strong>Guardrails aren't bolted on — they're the architecture.</strong></div>
        </div>
      </section>

      <div className="divider"></div>

      {/* =================== VII. ARCHITECTURE =================== */}
      <section id="s7">
        <div className="sn">Section VII</div>
        <div className="st">The Architecture</div>
        <div className="ss">Five layers. One learning system.</div>
        <div className="arch-card">
          <div className="arch-title">The Stack</div>
          <div className="arch-h">Intelligent Finance Architecture</div>
          <div className="arch-wrap">
            <div className="arch-cm">
              <div className="cm-bar"><div className="cm-t">Corporate Memory</div></div>
            </div>
            <div className="arch-layers">
              <div className="al al1">
                <div className="al-info"><h4>Integrations</h4><p>This is solved</p></div>
                <div className="al-c">
                  <span className="it">Salesforce</span><span className="it">NetSuite</span><span className="it">Coupa</span><span className="it">Ironclad</span><span className="it">CPQ</span><span className="it">Mixpanel</span><span className="it">Jira</span><span className="it">Workday</span><span className="it">Concur</span><span className="it" style={{ border: 'none', background: 'transparent' }}>+ more</span>
                </div>
              </div>
              <div className="al al2">
                <div className="al-info"><h4>Context Graph</h4><p>Connected intelligence</p></div>
                <div className="al-c">
                  <svg width="100%" height="20" viewBox="0 0 600 20" preserveAspectRatio="xMidYMid meet">
                    <g>
                      <line x1="40" y1="10" x2="90" y2="5" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="90" y1="5" x2="140" y2="15" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="140" y1="15" x2="200" y2="8" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="200" y1="8" x2="250" y2="12" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="250" y1="12" x2="300" y2="5" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="300" y1="5" x2="350" y2="10" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="350" y1="10" x2="400" y2="15" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="400" y1="15" x2="450" y2="8" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="450" y1="8" x2="500" y2="12" stroke="#2864dc" strokeWidth="1.5" />
                      <line x1="500" y1="12" x2="550" y2="10" stroke="#2864dc" strokeWidth="1.5" />
                    </g>
                    <g>
                      <circle cx="40" cy="10" r="3.5" fill="#2864dc" />
                      <circle cx="90" cy="5" r="3.5" fill="#2864dc" />
                      <circle cx="140" cy="15" r="3.5" fill="#2864dc" />
                      <circle cx="200" cy="8" r="3.5" fill="#2864dc" />
                      <circle cx="250" cy="12" r="3.5" fill="#2864dc" />
                      <circle cx="300" cy="5" r="3.5" fill="#2864dc" />
                      <circle cx="350" cy="10" r="3.5" fill="#2864dc" />
                      <circle cx="400" cy="15" r="3.5" fill="#2864dc" />
                      <circle cx="450" cy="8" r="3.5" fill="#2864dc" />
                      <circle cx="500" cy="12" r="3.5" fill="#2864dc" />
                      <circle cx="550" cy="10" r="3.5" fill="#2864dc" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="al al3">
                <div className="al-info"><h4>Agentic Process APIs</h4><p>Guardrailed interfaces</p></div>
                <div className="al-c">
                  <span className="ac">reconcile_invoices()</span><span className="ac">check_budget_variance()</span><span className="ac">match_contract_terms()</span><span className="ac">generate_forecast()</span><span className="ac">validate_revenue()</span><span className="ac">flag_risk()</span>
                </div>
              </div>
              <div className="al al4">
                <div className="al-info"><h4>Intelligent Agents</h4><p>Full context space</p></div>
                <div className="al-c">
                  <span className="ag">🔍 Data Quality</span><span className="ag">🔄 Reconciliation</span><span className="ag">📊 Budget Drift</span><span className="ag">📈 Forecast Variance</span><span className="ag">💰 Cash Flow Sentinel</span><span className="ag">✅ Audit Readiness</span><span className="ag">🏢 Vendor Risk</span><span className="ag" style={{ borderStyle: 'dashed', color: 'var(--gray-line)', borderColor: 'var(--gray-line)' }}>⚙️ Your Own Agent</span>
                </div>
              </div>
              <div className="al al5">
                <div className="al-info"><h4>Outputs</h4><p>Results & feedback</p></div>
                <div className="al-c">
                  <span className="oi">📄 Reports</span><span className="oi">📊 Excel / Analytics</span><span className="oi">📱 Apps & Dashboards</span><span className="oi">⟲ Write-Back to Systems</span>
                </div>
              </div>
            </div>
            <div className="arch-fw">
              <div className="fw-text">Self-Learning Cycle</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* =================== VIII. DRIFT SECTION =================== */}
      <section id="s8">
        <div className="sn">Section VIII</div>
        <div className="st">Contract-to-Cash Drift</div>
        <div className="ss">Why invoices are wrong & cash is delayed</div>
        <div className="card cp">
          <div className="drift-layout">
            {/* Left: Contract Mockup */}
            <div className="drift-contract">
              <div className="dc-head">
                📁 CONTRACT
                <span className="dc-head-sub">Signed agreement</span>
              </div>
              <div className="dc-text-line"></div>
              <div className="dc-text-line med"></div>
              <div className="dc-text-line short"></div>
              <div className="dc-highlight" style={{ marginTop: '16px' }}>
                <div className="dc-hl-label">Contract Value</div>
                <div className="dc-hl-val">$784,000</div>
              </div>
              <div className="dc-text-line med" style={{ marginTop: '16px' }}></div>
              <div className="dc-text-line"></div>
              <div className="dc-highlight" style={{ marginLeft: '24px' }}>
                <div className="dc-hl-label">SKU 1</div>
                <div className="dc-hl-val">$348,000</div>
              </div>
              <div className="dc-text-line short" style={{ marginTop: '16px' }}></div>
              <div className="dc-highlight" style={{ width: '80%' }}>
                <div className="dc-hl-label">Payment Date</div>
                <div className="dc-hl-val">Net 30</div>
              </div>
              <div className="dc-text-line" style={{ marginTop: '16px' }}></div>
              <div className="dc-source">⭐ source of truth</div>
            </div>

            {/* Middle: Flow Arrow */}
            <div className="drift-flow">
              <div className="df-text">flows into</div>
              <div className="df-arrow">↓</div>
            </div>

            {/* Right: Drift Table & Footer */}
            <div className="drift-table-area">
              <div className="dt-grid">
                <div className="dt-cell dt-head"></div>
                <div className="dt-cell dt-head" style={{ color: 'var(--accent-orange)' }}>Contract</div>
                <div className="dt-cell dt-head">CRM</div>
                <div className="dt-cell dt-head">Coupa</div>
                <div className="dt-cell dt-head">ERP</div>
                <div className="dt-cell dt-head">Invoice</div>

                {/* Row 1 */}
                <div className="dt-cell dt-row-head">Contract<br />Value</div>
                <div className="dt-cell"><div className="dt-val truth">$784,000</div></div>
                <div className="dt-cell"><div className="dt-val">$784k</div><div className="dt-badge match">✓ match</div></div>
                <div className="dt-cell"><div className="dt-val">$761k</div><div className="dt-badge drift">✗ drift/wrong</div></div>
                <div className="dt-cell"><div className="dt-val">$784k</div><div className="dt-badge match">✓ match</div></div>
                <div className="dt-cell"><div className="dt-val">$761k</div><div className="dt-badge flag">⚡ flagged</div></div>

                {/* Row 2 */}
                <div className="dt-cell dt-row-head">SKU 1</div>
                <div className="dt-cell"><div className="dt-val truth">$348k</div></div>
                <div className="dt-cell"><div className="dt-val">$312k</div><div className="dt-badge flag">⚡ flagged</div></div>
                <div className="dt-cell"><div className="dt-val">$348k</div><div className="dt-badge flag">⚡ flagged</div></div>
                <div className="dt-cell"><div className="dt-val">$348k</div><div className="dt-badge match">✓ match</div></div>
                <div className="dt-cell"><div className="dt-val">$312k</div><div className="dt-badge flag">⚡ flagged</div></div>

                {/* Row 3 */}
                <div className="dt-cell dt-row-head">Payment<br />Date</div>
                <div className="dt-cell"><div className="dt-val truth">Net 30</div></div>
                <div className="dt-cell"><div className="dt-val">Net 30</div><div className="dt-badge match">✓ match</div></div>
                <div className="dt-cell"><div className="dt-val">Net 45</div><div className="dt-badge drift">✗ drift/wrong</div></div>
                <div className="dt-cell"><div className="dt-val">Net 30</div><div className="dt-badge match">✓ match</div></div>
                <div className="dt-cell"><div className="dt-val">Net 45</div><div className="dt-badge drift">✗ drift/wrong</div></div>
              </div>

              {/* Legend */}
              <div className="drift-legend-row">
                <div className="drift-legend" style={{ flex: '0 0 auto', minWidth: '140px', alignItems: 'center' }}>
                  <div className="dt-badge flag" style={{ fontSize: '11px' }}>⚡ Agent 0.56rem</div>
                </div>
                <div className="drift-legend">
                  <div className="dl-item"><span style={{ color: 'var(--accent-teal)', fontWeight: '700' }}>✓ match</span> — matches contract</div>
                  <div className="dl-item"><span style={{ color: 'var(--accent-orange)', fontWeight: '700' }}>✗ drift</span> — differs, agent flagged</div>
                  <div className="dl-item"><span style={{ color: 'var(--accent-orange)', fontWeight: '700' }}>✗ wrong</span> — invoice reflects drift → rebilling</div>
                </div>
              </div>

              {/* Consequences Footer */}
              <div className="drift-consequences">
                <div className="dc-label">A/B</div>
                <div className="dc-card">
                  <div className="dc-card-title">Card A: Manual Reconciliation</div>
                  <div className="dc-card-desc">Finance cross-references contract vs every system — every deal, every period.</div>
                </div>
                <div className="dc-card" style={{ borderLeft: '1px solid var(--gray-line)', paddingLeft: '16px' }}>
                  <div className="dc-card-title">Card B: Cash Delayed</div>
                  <div className="dc-card-desc">Wrong invoices get voided & reissued. Payment clock resets. Revenue sits in transit.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* =================== IX. THREE STEPS TO AI-READY FINANCE =================== */}
      <section id="s9">
        <div className="sn">Section IX</div>
        <div className="st">Three Steps to AI-Ready Finance</div>
        <div className="ss">The moat is no longer the model — it's the infrastructure beneath it.</div>
        <div className="s9-grid">
          
          {/* COL 1: Foundation */}
          <div className="s9-col">
            <div className="s9-header">
              <div className="s9-num">01</div>
              <div className="s9-info">
                <div className="s9-pill s9-p1">Foundation</div>
                <div className="s9-title">Data Infrastructure & Integration</div>
              </div>
            </div>
            {/* Pillar 1: Integrate */}
            <div className="s9-card">
              <div className="s9-card-title">Integrate Financial & Non-Financial Data</div>
              <div>
                <div className="s9-src-label">Financial Systems</div>
                <div className="s9-src-row" style={{ marginBottom: '16px' }}>
                  <span className="s9-src-chip">NetSuite ERP</span>
                  <span className="s9-src-chip">Salesforce</span>
                  <span className="s9-src-chip">Coupa</span>
                  <span className="s9-src-chip">Ironclad</span>
                </div>
                <div className="s9-src-label">Non-Financial Data</div>
                <div className="s9-src-row">
                  <span className="s9-src-chip">Mixpanel</span>
                  <span className="s9-src-chip">Databricks</span>
                  <span className="s9-src-chip">Jira</span>
                  <span className="s9-src-chip">HRIS</span>
                </div>
              </div>
            </div>
            {/* Pillar 2: Reconcile */}
            <div className="s9-card">
              <div className="s9-card-title">Reconcile Across Systems</div>
              <div className="s9-recon-box">
                <div className="s9-recon-head">★ Signed Contract = Truth</div>
                <div className="s9-recon-row" style={{ color: 'var(--gray-line)' }}>
                  <div className="s9-recon-col-1"></div>
                  <div className="s9-recon-col-val" style={{ border: 'none', background: 'transparent' }}>Contract</div>
                  <div className="s9-recon-col-val" style={{ border: 'none', background: 'transparent' }}>Invoice</div>
                  <div className="s9-recon-col-icon"></div>
                </div>
                <div className="s9-recon-row">
                  <div className="s9-recon-col-1">Value</div>
                  <div className="s9-recon-col-val">$784K</div>
                  <div className="s9-recon-col-val s9-recon-col-err">$761K</div>
                  <div className="s9-recon-col-err">⚡ Drift</div>
                </div>
                <div className="s9-recon-row">
                  <div className="s9-recon-col-1">SKU 1</div>
                  <div className="s9-recon-col-val">$348K</div>
                  <div className="s9-recon-col-val s9-recon-col-err">$312K</div>
                  <div className="s9-recon-col-err">⚡ Drift</div>
                </div>
                <div className="s9-recon-row">
                  <div className="s9-recon-col-1">Payment</div>
                  <div className="s9-recon-col-val">Net 30</div>
                  <div className="s9-recon-col-val s9-recon-col-err">Net 45</div>
                  <div className="s9-recon-col-err">⚡ Drift</div>
                </div>
              </div>
            </div>
            {/* Pillar 3: Context */}
            <div className="s9-card">
              <div className="s9-card-title">Add Context & Meaning</div>
              <div className="s9-pillar">
                <div className="s9-pillar-icon">🔗</div>
                <div>
                  <div className="s9-pillar-title">Unified Pipeline</div>
                  <div className="s9-pillar-desc">Finance + business process tracks mapped in one governed architecture.</div>
                </div>
              </div>
              <div className="s9-pillar">
                <div className="s9-pillar-icon">📐</div>
                <div>
                  <div className="s9-pillar-title">Semantic Layer</div>
                  <div className="s9-pillar-desc">Shared definitions & hierarchies. Every term means the same thing everywhere.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow 1 to 2 */}
          <div className="s9-arrow">→</div>

          {/* COL 2: Intelligence */}
          <div className="s9-col">
            <div className="s9-header">
              <div className="s9-num">02</div>
              <div className="s9-info">
                <div className="s9-pill s9-p2">Intelligence</div>
                <div className="s9-title">Financial Intelligence & Agents</div>
              </div>
            </div>
            {/* DQ Score */}
            <div className="s9-card">
              <div className="s9-card-title">Data Quality Score</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div className="s9-score-big">87<span style={{ fontSize: '24px', color: 'var(--gray-line)' }}>/100</span></div>
                <div style={{ flex: 1 }}>
                  <div className="s9-score-cats">
                    <div className="s9-score-cat"><span className="s9-sc-v" style={{ color: 'var(--accent-teal)' }}>30/30</span><span className="s9-sc-n">Mapping</span></div>
                    <div className="s9-score-cat"><span className="s9-sc-v" style={{ color: 'var(--accent-orange)' }}>12/20</span><span className="s9-sc-n">Cash Flow</span></div>
                    <div className="s9-score-cat"><span className="s9-sc-v" style={{ color: 'var(--accent-teal)' }}>20/20</span><span className="s9-sc-n">Entity</span></div>
                  </div>
                  <div className="s9-score-bar-wrap"><div className="s9-score-bar-fill"></div></div>
                </div>
              </div>
              <div className="s9-alert">
                <div className="s9-alert-title">⚠ 1 Issue · $130.5M Impact</div>
                <div className="s9-alert-body">HIGH · Balance Sheet Imbalances detected. Assets ≠ Liabilities + Equity.</div>
              </div>
            </div>
            {/* AI Assistant */}
            <div className="s9-card">
              <div className="s9-card-title">Financial Assistant Interface</div>
              <div className="s9-chat-q">Compare profit margins across all regions for Q4</div>
              <div className="s9-chat-a">
                <div className="s9-chat-a-head">Regional NPM — <strong>2025 YTD</strong></div>
                <div className="s9-ct-row"><span className="s9-ct-r">NS_APAC</span><span className="s9-ct-v">$21.7M</span><span className="s9-ct-pct">19.3%</span></div>
                <div className="s9-ct-row"><span className="s9-ct-r">NS_GRP (Consol.)</span><span className="s9-ct-v">$110.3M</span><span className="s9-ct-pct">18.7%</span></div>
                <div className="s9-ct-row"><span className="s9-ct-r">NS_US</span><span className="s9-ct-v">$54.8M</span><span className="s9-ct-pct">18.6%</span></div>
                <div className="s9-ct-row"><span className="s9-ct-r">NS_EU</span><span className="s9-ct-v">$33.8M</span><span className="s9-ct-pct">18.6%</span></div>
              </div>
            </div>
            {/* Glossary */}
            <div className="s9-card">
              <div className="s9-card-title">Standardized Business Glossary</div>
              <div>
                <div className="s9-gl-row s9-gl-hd">
                  <span className="s9-gl-id">ID</span><span className="s9-gl-ab">Abbr</span><span className="s9-gl-nm">Name</span><span className="s9-gl-type" style={{ background: 'transparent', border: 'none' }}>Type</span>
                </div>
                <div className="s9-gl-row">
                  <span className="s9-gl-id">MET_01</span><span className="s9-gl-ab">REV</span><span className="s9-gl-nm">Total Revenue</span><span className="s9-gl-type">Currency</span>
                </div>
                <div className="s9-gl-row">
                  <span className="s9-gl-id">MET_03</span><span className="s9-gl-ab">GPM</span><span className="s9-gl-nm">Gross Margin</span><span className="s9-gl-type">Rate</span>
                </div>
                <div className="s9-gl-row">
                  <span className="s9-gl-id">MET_04</span><span className="s9-gl-ab" style={{ color: 'var(--accent-teal)' }}>EBITDA</span><span className="s9-gl-nm">EBITDA</span><span className="s9-gl-type">Currency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow 2 to 3 */}
          <div className="s9-arrow">→</div>

          {/* COL 3: Extend */}
          <div className="s9-col">
            <div className="s9-header">
              <div className="s9-num">03</div>
              <div className="s9-info">
                <div className="s9-pill s9-p3">Extend</div>
                <div className="s9-title">Build & Automate with AI</div>
              </div>
            </div>
            {/* Process API */}
            <div className="s9-card">
              <div className="s9-card-title">Agentic Process APIs</div>
              <div>
                <div className="s9-pa-fn"><span className="fn">reconcile_invoices</span>(entity, period)</div>
                <div className="s9-pa-fn"><span className="fn">check_budget_variance</span>(dept, limit)</div>
                <div className="s9-pa-fn"><span className="fn">match_contract_terms</span>(contract_id)</div>
                <div className="s9-pa-fn"><span className="fn">generate_forecast</span>(scenario)</div>
              </div>
            </div>
            {/* Terminal */}
            <div className="s9-card">
              <div className="s9-card-title">Code Interface (Python)</div>
              <div className="s9-terminal">
                <span className="s9-term-c"># connect to governed finance layer</span><br />
                <span className="s9-term-k">from</span> keboola.fi <span className="s9-term-k">import</span> <span className="s9-term-f">FinanceOS</span><br />
                fi = <span className="s9-term-f">FinanceOS</span>.<span className="s9-term-f">connect</span>(<span className="s9-term-s">"prod"</span>)<br /><br />
                
                <span className="s9-term-c"># build FP&A prediction agent</span><br />
                agent = fi.<span className="s9-term-f">create_agent</span>(<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="s9-term-s">"fpna_pricing_optimizer"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;model=<span className="s9-term-s">"claude-sonnet-4"</span><br />
                )<br /><br />
                
                <span className="s9-term-ok">✓ Registered to Financial Intelligence</span>
              </div>
            </div>
            {/* Outputs */}
            <div className="s9-card">
              <div className="s9-card-title">Active Agents & Outputs</div>
              <div>
                <div className="s9-agent-row">
                  <span>FP&A Prediction Agent</span>
                  <span className="s9-agent-status">Running</span>
                </div>
                <div className="s9-agent-row" style={{ borderColor: 'var(--gray-line)', color: 'var(--dark-neutral)' }}>
                  <span>Scenario Planner</span>
                  <span className="s9-agent-status" style={{ color: 'var(--dark-neutral)' }}>Scheduled</span>
                </div>
              </div>
              <div className="s9-out-chips">
                <div className="s9-out-chip"><span className="oc-ico">📄</span>Reports</div>
                <div className="s9-out-chip"><span className="oc-ico">📊</span>Dashboards</div>
                <div className="s9-out-chip"><span className="oc-ico">⟲</span>Write-back</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer>
        <strong>Keboola Financial Intelligence Suite</strong><br />
        The architecture for intelligent finance.
      </footer>
    </>
  );
}

export default App;