// ===== MODULE DATA =====
const MODULES = [
  {
    id:1, name:"SQL", emoji:"🗄️", priority:"critical", day:"Day 1",
    timeAllocated:480, color:"#6366f1", glow:"rgba(99,102,241,0.25)",
    description:"Foundation of data analysis. Your biggest interview filter.",
    topics:[
      {id:"1.1",name:"SQL Fundamentals",time:30,subtopics:["What is SQL?","Database vs Table vs Row vs Column","Primary Key","Foreign Key","Constraints","NULL Values","Data Types"]},
      {id:"1.2",name:"Basic Queries",time:20,subtopics:["SELECT","WHERE","ORDER BY","DISTINCT","LIMIT/TOP","ALIAS"]},
      {id:"1.3",name:"Aggregate Functions",time:20,subtopics:["COUNT()","SUM()","AVG()","MIN()","MAX()"]},
      {id:"1.4",name:"GROUP BY & HAVING",time:25,subtopics:["GROUP BY","HAVING","WHERE vs HAVING","GROUP BY vs DISTINCT"]},
      {id:"1.5",name:"Joins",time:60,subtopics:["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN","SELF JOIN","CROSS JOIN"]},
      {id:"1.6",name:"Set Operators",time:20,subtopics:["UNION","UNION ALL","INTERSECT","EXCEPT/MINUS"]},
      {id:"1.7",name:"Subqueries",time:30,subtopics:["Single Row Subquery","Multiple Row Subquery","Correlated Subquery"]},
      {id:"1.8",name:"CTE",time:25,subtopics:["WITH Clause","Multiple CTEs","CTE vs Subquery"]},
      {id:"1.9",name:"Window Functions",time:45,subtopics:["OVER()","PARTITION BY","ORDER BY in Window"]},
      {id:"1.10",name:"Ranking Functions",time:30,subtopics:["ROW_NUMBER()","RANK()","DENSE_RANK()","RANK vs DENSE_RANK"]},
      {id:"1.11",name:"Analytical SQL",time:40,subtopics:["Running Total","Cumulative Sum","Moving Average","Month-on-Month Growth"]},
      {id:"1.12",name:"SQL Optimization",time:20,subtopics:["Indexes","Query Optimization","Why Queries Slow Down"]},
      {id:"1.13",name:"Interview Problems — Easy",time:30,subtopics:["Highest salary employee","Total employees per dept","Avg salary by dept","Employees above avg salary","Count employees by city"]},
      {id:"1.14",name:"Interview Problems — Medium",time:45,subtopics:["Second highest salary","Third highest salary","Duplicate records","Remove duplicates","Top 3 salaries"]},
      {id:"1.15",name:"Interview Problems — Advanced",time:60,subtopics:["Top N per department","Running total","Month-wise sales trend","Customer retention","Consecutive days login"]},
      {id:"1.16",name:"Real Interview Q&A",time:30,subtopics:["WHERE vs HAVING","DELETE vs TRUNCATE vs DROP","UNION vs UNION ALL","Primary vs Foreign Key","Clustered vs Non-Clustered Index","CTE vs Subquery","ROW_NUMBER vs RANK","Why Index?","What causes slow queries?","Query execution flow"]}
    ]
  },
  {
    id:2, name:"Power BI", emoji:"📊", priority:"critical", day:"Day 2",
    timeAllocated:180, color:"#f59e0b", glow:"rgba(245,158,11,0.25)",
    description:"It's in the job title. Second most critical module.",
    topics:[
      {id:"2.1",name:"Power BI Architecture",time:20,subtopics:["Data Sources → Power Query → Data Model → DAX → Dashboard","How Power BI works end to end"]},
      {id:"2.2",name:"Power BI Components",time:15,subtopics:["Power BI Desktop","Power BI Service","Power BI Gateway","Power BI Report Server"]},
      {id:"2.3",name:"Data Import Methods",time:15,subtopics:["Import Mode","Direct Query","Live Connection","When to use which?"]},
      {id:"2.4",name:"Power Query",time:25,subtopics:["Data Cleaning","Merge Queries","Append Queries","Remove Duplicates","Split Columns","Replace Values","Null Handling"]},
      {id:"2.5",name:"Data Modeling",time:20,subtopics:["Fact Table","Dimension Table","Star Schema","Snowflake Schema","Star vs Snowflake difference"]},
      {id:"2.6",name:"Relationships",time:15,subtopics:["One-to-One","One-to-Many","Many-to-Many","Active Relationship","Inactive Relationship"]},
      {id:"2.7",name:"DAX Basics",time:20,subtopics:["Calculated Column","Measure","Calculated Table","Measure vs Calculated Column (KEY DIFFERENCE)"]},
      {id:"2.8",name:"Important DAX Functions",time:25,subtopics:["SUM, COUNT, COUNTROWS, AVERAGE","IF, FILTER","RELATED","CALCULATE (Most Important)","CALCULATE example with filter"]},
      {id:"2.9",name:"Time Intelligence",time:20,subtopics:["TOTALYTD — Year to Date","MTD — Month to Date","QTD — Quarter to Date","Previous Month","Previous Year"]},
      {id:"2.10",name:"Visualizations",time:15,subtopics:["Bar Chart — when to use","Line Chart — when to use","Pie Chart — when NOT to use","Matrix","Scatter Plot","Map"]},
      {id:"2.11",name:"Dashboard Design",time:15,subtopics:["KPI Cards","Drill Down","Drill Through","Slicers","Filters","Less clutter principle"]},
      {id:"2.12",name:"Power BI Interview Q&A",time:15,subtopics:["Explain Power BI architecture","Import vs Direct Query","What is Power Query?","What is DAX?","Measure vs Calculated Column","Fact vs Dimension Table","Star vs Snowflake Schema","Active vs Inactive Relationship","What is CALCULATE?","What is Drill Down?"]}
    ]
  },
  {
    id:3, name:"Excel", emoji:"📋", priority:"medium", day:"Day 2",
    timeAllocated:60, color:"#10b981", glow:"rgba(16,185,129,0.25)",
    description:"Many freshers get rejected here. Don't ignore this.",
    topics:[
      {id:"3.1",name:"Lookup Functions",time:20,subtopics:["VLOOKUP","XLOOKUP","HLOOKUP","INDEX MATCH","VLOOKUP vs XLOOKUP vs INDEX MATCH"]},
      {id:"3.2",name:"Data Analysis",time:20,subtopics:["Pivot Tables","Pivot Charts","Sorting","Filtering"]},
      {id:"3.3",name:"Data Cleaning",time:10,subtopics:["Remove Duplicates","Text to Columns","Conditional Formatting","Data Validation"]},
      {id:"3.4",name:"Excel Interview Q&A",time:10,subtopics:["VLOOKUP vs XLOOKUP","INDEX MATCH vs VLOOKUP","What is a Pivot Table?","Remove duplicates in Excel?","Conditional formatting use cases?"]}
    ]
  },
  {
    id:4, name:"ETL", emoji:"⚙️", priority:"high", day:"Day 2",
    timeAllocated:90, color:"#8b5cf6", glow:"rgba(139,92,246,0.25)",
    description:"JD explicitly mentions backend ETL. Prepare carefully.",
    topics:[
      {id:"4.1",name:"ETL Fundamentals",time:20,subtopics:["Extract — from source","Transform — clean and shape","Load — to destination","Full ETL pipeline example"]},
      {id:"4.2",name:"Transform Stage",time:20,subtopics:["Data Cleaning","Null Handling","Deduplication","Standardization","Data Validation"]},
      {id:"4.3",name:"ETL Concepts",time:20,subtopics:["Batch Processing","Real Time Processing","Incremental Load","Full Load","Why Incremental Load?"]},
      {id:"4.4",name:"ETL Tools",time:10,subtopics:["SSIS","Azure Data Factory","Talend","Informatica"]},
      {id:"4.5",name:"ETL Interview Q&A",time:20,subtopics:["What is ETL?","Explain ETL pipeline","Full Load vs Incremental Load","Transform stage details","Why ETL?","ETL vs ELT","Data Validation","Data Quality Checks"]}
    ]
  },
  {
    id:5, name:"Azure", emoji:"☁️", priority:"low", day:"Day 2",
    timeAllocated:60, color:"#06b6d4", glow:"rgba(6,182,212,0.25)",
    description:"Basics only. JD mentions Azure — know the key services.",
    topics:[
      {id:"5.1",name:"Azure Basics",time:15,subtopics:["What is Azure?","Cloud Computing Basics","IaaS vs PaaS vs SaaS"]},
      {id:"5.2",name:"Azure Data Services",time:25,subtopics:["Azure Data Factory (ADF)","Azure SQL Database","Azure Blob Storage","Azure Data Lake","Azure Synapse Analytics"]},
      {id:"5.3",name:"Key Concepts",time:10,subtopics:["Data Warehouse vs Data Lake","Cloud Storage basics","When to use ADF?"]},
      {id:"5.4",name:"Azure Interview Q&A",time:10,subtopics:["What is Azure Data Factory?","What is Azure SQL Database?","What is Blob Storage?","What is Data Lake?","Data Lake vs Data Warehouse?","Why use cloud databases?"]}
    ]
  },
  {
    id:6, name:"Data Analytics", emoji:"📈", priority:"high", day:"Day 2",
    timeAllocated:60, color:"#f97316", glow:"rgba(249,115,22,0.25)",
    description:"Think like an analyst. Business metrics and EDA.",
    topics:[
      {id:"6.1",name:"Statistics Basics",time:15,subtopics:["Mean","Median","Mode","Mean vs Median difference","Variance","Standard Deviation","What does high SD mean?"]},
      {id:"6.2",name:"Data Cleaning",time:10,subtopics:["Missing Values — how to handle","Outliers — detection and treatment","Duplicate Records"]},
      {id:"6.3",name:"Metrics & KPIs",time:15,subtopics:["Revenue","Profit","Growth Rate","Retention Rate","Conversion Rate","What KPIs to show CEO vs Manager?"]},
      {id:"6.4",name:"EDA",time:10,subtopics:["Trends","Distribution","Correlation","What to check first in EDA?"]},
      {id:"6.5",name:"Analytics Interview Q&A",time:10,subtopics:["What is KPI?","Mean vs Median?","What are outliers?","Missing value handling?","Correlation?","Why EDA?","How do you clean data?","E-commerce metrics?"]}
    ]
  },
  {
    id:7, name:"Case Studies", emoji:"🧩", priority:"critical", day:"Day 2-3",
    timeAllocated:90, color:"#ec4899", glow:"rgba(236,72,153,0.25)",
    description:"Most people FAIL here. This is where Round 2 is won or lost.",
    topics:[
      {id:"7.1",name:"Sales Analysis Cases",time:20,subtopics:["Sales dropped 20% — full investigation approach","Revenue increased but profit decreased — why?"]},
      {id:"7.2",name:"Customer Analysis Cases",time:15,subtopics:["Customer churn increased — what to analyze","Retention decreased — root cause framework"]},
      {id:"7.3",name:"Product Analysis Cases",time:15,subtopics:["Product sales dropped — investigation steps","One region performing badly — how to find cause"]},
      {id:"7.4",name:"Dashboard Debugging",time:15,subtopics:["Dashboard showing wrong numbers — debug process","KPI mismatch — how to resolve"]},
      {id:"7.5",name:"Business Thinking Framework",time:15,subtopics:["What to analyze first?","How to find root cause?","How to structure recommendations?","Structured vs Unstructured approach"]},
      {id:"7.6",name:"Case Study Q&A",time:10,subtopics:["Sales dropped 20% — full answer","Revenue up profit down — full answer","Dashboard wrong — full answer","Retention dropped — full answer","Traffic up conversions down — full answer","KPIs for CEO","KPIs for Sales Manager","Design a sales dashboard","Identify top customers","Improve reporting automation"]}
    ]
  }
];

// ===== QUOTES =====
const QUOTES = [
  {text:"O Arjuna, you have the right to perform your duty, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",author:"Krishna to Arjuna — Bhagavad Gita 2.47"},
  {text:"The soul is never born, nor does it die. It is not slain when the body is slain. The soul is eternal, indestructible, and ancient.",author:"Krishna — Bhagavad Gita 2.20"},
  {text:"Better is one's own dharma, though imperfectly performed, than the dharma of another well performed. It is better to die in one's own dharma; the dharma of another is fraught with peril.",author:"Krishna — Bhagavad Gita 3.35"},
  {text:"Set thy heart upon thy work, but never on its reward. Work not for a reward; but never cease to do thy work.",author:"Krishna — Bhagavad Gita 2.47"},
  {text:"When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place.",author:"Krishna — Bhagavad Gita 6.19"},
  {text:"You came here empty-handed, and you will leave empty-handed. What is yours today belonged to someone else yesterday and will belong to someone else tomorrow. Do not be deluded by the thought of 'mine' and 'not mine'.",author:"Krishna — Bhagavad Gita 2.28"},
  {text:"The man who sees inaction in action, and action in inaction — he is wise among men. He is a yogi and accomplished in everything.",author:"Krishna — Bhagavad Gita 4.18"},
  {text:"Neither in this world nor elsewhere is there any happiness in store for him who always doubts.",author:"Krishna — Bhagavad Gita 4.40"},
  {text:"Do not yield to unmanliness, O Arjuna. It does not become you. Shake off your faint-heartedness and arise.",author:"Krishna to Arjuna — Bhagavad Gita 2.3"},
  {text:"On this path effort never goes to waste, and there is no failure. Even a little effort toward spiritual awareness will protect you from the greatest fear.",author:"Krishna — Bhagavad Gita 2.40"},
  {text:"The wise grieve neither for the living nor for the dead. There was never a time when I did not exist, nor you, nor all these beings. Nor will there be any time when we shall cease to exist.",author:"Krishna — Bhagavad Gita 2.11-12"},
  {text:"Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.",author:"Krishna — Bhagavad Gita"},
  {text:"Hell has three gateways: lust, anger, and greed. These destroy the soul. Therefore one should abandon all three.",author:"Krishna — Bhagavad Gita 16.21"},
  {text:"A person can rise through the efforts of his own mind; or draw himself down, in the same manner. Because each person is his own friend and his own enemy.",author:"Krishna — Bhagavad Gita 6.5"},
  {text:"Those who see the Self in all beings and all beings in the Self, see the truth. They will not be deluded.",author:"Yaksha to Yudhishthira — Mahabharata"},
  {text:"Arise, awake, and stop not till the goal is reached. The greatest sin is to think yourself weak.",author:"Bhishma — Mahabharata, Shanti Parva"},
  {text:"One who has learned the dharma of the warrior knows that death in battle is not defeat — it is a gateway to glory.",author:"Bhishma — Mahabharata"},
  {text:"Even if you are one man against a thousand, if your cause is righteous, fight. The universe will stand with you.",author:"Draupadi — Mahabharata"},
  {text:"It is better to conquer yourself than to win a thousand battles. Then the victory is yours. It cannot be taken from you.",author:"Vidura Niti — Mahabharata"},
  {text:"Fear not. For the one who has mastered himself, what enemy can there be? And for the one who has not, what friend can help?",author:"Vidura — Mahabharata, Udyoga Parva"}
];

// ===== STATE MANAGEMENT =====
let state = {
  interviewDate: null,
  quoteIndex: 0,
  topics: {},      // topicId -> { completed, timeSpent, notes, pdfName, subtopics:{name->bool} }
  lastStudied: null,
  streak: 0
};

const IS_LOCAL = window.location.protocol === 'file:';
const STATE_COLLECTION = 'studyforge_state';

async function loadState() {
  try {
    const saved = localStorage.getItem(STATE_COLLECTION);
    if (saved) state = { ...state, ...JSON.parse(saved) };
  } catch(e) {}

  if (!IS_LOCAL) {
    try {
      const res = await fetch(`/api/sync?collection=${STATE_COLLECTION}`);
      const data = await res.json();
      if (data && Object.keys(data).length > 0) state = { ...state, ...data };
    } catch(e) { console.error("MongoDB load error:", e); }
  }
}

function saveState() {
  try {
    state.lastStudied = new Date().toDateString();
    localStorage.setItem(STATE_COLLECTION, JSON.stringify(state));
  } catch(e) {}
  
  if (!IS_LOCAL) {
    fetch(`/api/sync?collection=${STATE_COLLECTION}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: state })
    }).catch(e => console.error("MongoDB save error:", e));
  }
}

function getTopicState(topicId) {
  if (!state.topics[topicId]) {
    state.topics[topicId] = { completed: false, timeSpent: 0, notes: '', pdfName: '', pdfData: '', subtopics: {} };
  }
  return state.topics[topicId];
}

// ===== STATS HELPERS =====
function getAllTopics() {
  return MODULES.flatMap(m => m.topics);
}

function getCompletedTopics() {
  return getAllTopics().filter(t => getTopicState(t.id).completed);
}

function getTotalTimeSpent() {
  return getAllTopics().reduce((sum, t) => sum + (getTopicState(t.id).timeSpent || 0), 0);
}

function getModuleProgress(mod) {
  const done = mod.topics.filter(t => getTopicState(t.id).completed).length;
  return { done, total: mod.topics.length, pct: mod.topics.length ? Math.round(done / mod.topics.length * 100) : 0 };
}

function getModuleTimeSpent(mod) {
  return mod.topics.reduce((sum, t) => sum + (getTopicState(t.id).timeSpent || 0), 0);
}

function getPdfCount() {
  return getAllTopics().filter(t => getTopicState(t.id).pdfData).length;
}

// ===== STREAK =====
function updateStreak() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastStudied === yesterday) {
    state.streak = (state.streak || 0) + 1;
  } else if (state.lastStudied !== today) {
    state.streak = 1;
  }
}

// ===== QUOTE =====
function renderQuote() {
  const q = QUOTES[state.quoteIndex % QUOTES.length];
  document.getElementById('quoteText').textContent = q.text;
  document.getElementById('quoteAuthor').textContent = '— ' + q.author;
}

// ===== COUNTDOWN =====
function updateCountdown() {
  if (!state.interviewDate) return;
  const diff = new Date(state.interviewDate) - new Date();
  if (diff <= 0) {
    ['cdDays','cdHours','cdMins'].forEach(id => document.getElementById(id).textContent = '0');
    return;
  }
  document.getElementById('cdDays').textContent = Math.floor(diff/86400000);
  document.getElementById('cdHours').textContent = Math.floor((diff%86400000)/3600000);
  document.getElementById('cdMins').textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
}

// ===== DASHBOARD =====
function renderDashboard() {
  const all = getAllTopics(), done = getCompletedTopics();
  const pct = all.length ? Math.round(done.length/all.length*100) : 0;
  const timeSpent = getTotalTimeSpent();
  const timeTotal = MODULES.reduce((s,m) => s+m.timeAllocated, 0);
  document.getElementById('overallPct').textContent = pct+'%';
  const c = 2*Math.PI*46;
  const ring = document.getElementById('overallRing');
  ring.setAttribute('stroke-dasharray', c);
  ring.setAttribute('stroke-dashoffset', c-(c*pct/100));
  document.getElementById('statTopicsDone').textContent = done.length;
  document.getElementById('statTopicsTotal').textContent = 'of '+all.length;
  document.getElementById('statTimeSpent').textContent = timeSpent>=60 ? Math.floor(timeSpent/60)+'h '+(timeSpent%60?timeSpent%60+'m':'') : timeSpent+'m';
  document.getElementById('statTimeTotal').textContent = 'of '+Math.round(timeTotal/60)+'h target';
  document.getElementById('statStreak').textContent = state.streak||0;
  document.getElementById('statPdfs').textContent = getPdfCount();
}

// ===== MODULES GRID =====
function renderModulesGrid() {
  const grid = document.getElementById('modulesGrid');
  grid.innerHTML = '';
  MODULES.forEach(mod => {
    const prog = getModuleProgress(mod);
    const timeSpent = getModuleTimeSpent(mod);
    const timePct = Math.min(100, Math.round(timeSpent/mod.timeAllocated*100));
    const card = document.createElement('div');
    card.className = 'module-card';
    card.style.setProperty('--mod-color', mod.color);
    card.style.setProperty('--mod-glow', mod.glow);
    card.innerHTML = `
      <div class="card-top">
        <span class="card-emoji">${mod.emoji}</span>
        <div class="card-badges">
          <span class="badge badge-${mod.priority}">${mod.priority.toUpperCase()}</span>
          <span class="badge badge-day">${mod.day}</span>
        </div>
      </div>
      <div class="card-name">${mod.name}</div>
      <div class="card-desc">${mod.description}</div>
      <div class="card-progress-label"><span>Topics: ${prog.done}/${prog.total}</span><span>${prog.pct}%</span></div>
      <div class="card-progress-bar"><div class="card-progress-fill" style="width:${prog.pct}%"></div></div>
      <div class="card-time-info"><span>⏱ ${timeSpent}min spent</span><span>${mod.timeAllocated}min target</span></div>
      <div class="card-time-bar"><div class="card-time-fill" style="width:${timePct}%"></div></div>
      <div class="card-footer">
        <span class="card-topics-count">${mod.topics.length} topics</span>
        <button class="btn-open-module">Open →</button>
      </div>`;
    card.addEventListener('click', () => openPanel(mod.id));
    grid.appendChild(card);
  });
}

// ===== PANEL =====
let currentModuleId = null;

function openPanel(modId) {
  const mod = MODULES.find(m => m.id===modId);
  if (!mod) return;
  currentModuleId = modId;
  document.getElementById('panelEmoji').textContent = mod.emoji;
  document.getElementById('panelTitle').textContent = mod.name;
  document.getElementById('panelDesc').textContent = mod.description;
  document.getElementById('panelDay').textContent = mod.day;
  const pb = document.getElementById('panelPriority');
  pb.textContent = mod.priority.toUpperCase();
  pb.className = 'panel-badge badge badge-'+mod.priority;
  document.getElementById('modulePanel').style.setProperty('--mod-color', mod.color);
  updatePanelHeader(mod);
  renderTopics(mod);
  document.getElementById('modulePanel').classList.add('open');
  document.getElementById('panelOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updatePanelHeader(mod) {
  const prog = getModuleProgress(mod);
  const ts = getModuleTimeSpent(mod);
  const tp = Math.min(100, Math.round(ts/mod.timeAllocated*100));
  document.getElementById('panelProgressLabel').textContent = `${prog.done} / ${prog.total} topics`;
  document.getElementById('panelProgressPct').textContent = prog.pct+'%';
  document.getElementById('panelProgressFill').style.width = prog.pct+'%';
  document.getElementById('panelTimeSpent').textContent = ts+' min';
  document.getElementById('panelTimeTarget').textContent = mod.timeAllocated+' min';
  document.getElementById('panelTimeFill').style.width = tp+'%';
}

function closePanel() {
  document.getElementById('modulePanel').classList.remove('open');
  document.getElementById('panelOverlay').classList.remove('active');
  document.body.style.overflow = '';
  currentModuleId = null;
  renderModulesGrid();
  renderDashboard();
}

// ===== RENDER TOPICS =====
function renderTopics(mod) {
  const body = document.getElementById('panelBody');
  body.innerHTML = '';
  mod.topics.forEach(topic => {
    const ts = getTopicState(topic.id);
    const item = document.createElement('div');
    item.className = 'topic-item'+(ts.completed?' completed':'');
    item.id = 'topic-'+topic.id;
    const subsHtml = topic.subtopics.map((sub,i) => {
      const key = topic.id+'_sub_'+i;
      const chk = ts.subtopics && ts.subtopics[key];
      return `<li class="subtopic-item${chk?' done':''}">
        <input type="checkbox" class="subtopic-check" id="${key}" data-topic="${topic.id}" data-sub="${key}" ${chk?'checked':''}>
        <label for="${key}">${sub}</label></li>`;
    }).join('');
    item.innerHTML = `
      <div class="topic-header" data-topic="${topic.id}">
        <input type="checkbox" class="topic-checkbox" id="tc-${topic.id}" data-topic="${topic.id}" ${ts.completed?'checked':''}>
        <label class="topic-name" for="tc-${topic.id}">${topic.name}</label>
        <span class="topic-time-badge">⏱ ${topic.time}min</span>
        <span class="topic-toggle">▼</span>
      </div>
      <div class="topic-body"><div class="topic-body-inner">
        <ul class="subtopics-list">${subsHtml}</ul>
        <div class="topic-controls">
          <div class="topic-control-group">
            <span class="ctrl-label">Time Spent (min)</span>
            <div class="time-input-wrap">
              <input type="number" class="time-input" data-topic="${topic.id}" value="${ts.timeSpent||0}" min="0" max="999">
              <span class="time-unit">/ ${topic.time}min</span>
            </div>
          </div>
          <div class="topic-control-group">
            <span class="ctrl-label">Status</span>
            <span style="font-size:0.85rem;color:${ts.completed?'#10b981':'#64748b'}">${ts.completed?'✅ Done':'⬜ Pending'}</span>
          </div>
        </div>
        <div class="topic-actions">
          <button class="btn-action btn-upload-pdf" data-topic="${topic.id}">📎 ${ts.pdfData?'Replace':'Upload'} PDF</button>
          ${ts.pdfData?`<button class="btn-action btn-view-pdf" data-topic="${topic.id}">👁 View PDF</button><button class="btn-action btn-remove-pdf" data-topic="${topic.id}" style="color:#f87171;border-color:rgba(248,113,113,0.3)">🗑️ Remove</button><span class="pdf-indicator">📄 ${ts.pdfName||'PDF'}</span>`:''}
        </div>
        <div class="notes-label" style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#475569;margin-top:0.75rem;margin-bottom:0.3rem;">✏️ Notes (auto-saved)</div>
        <textarea class="notes-area" data-topic="${topic.id}" placeholder="Write your notes here... they are auto-saved.">${ts.notes||''}</textarea>
        <input type="file" accept="application/pdf" class="hidden-input pdf-file-input" data-topic="${topic.id}">
      </div></div>`;
    body.appendChild(item);
  });
  attachTopicEvents(mod);
}

function attachTopicEvents(mod) {
  const body = document.getElementById('panelBody');

  body.querySelectorAll('.topic-header').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.classList.contains('topic-checkbox') || e.target.tagName==='LABEL') return;
      header.closest('.topic-item').classList.toggle('expanded');
    });
  });

  body.querySelectorAll('.topic-checkbox').forEach(cb => {
    cb.addEventListener('change', e => {
      e.stopPropagation();
      const ts = getTopicState(cb.dataset.topic);
      ts.completed = cb.checked;
      const item = document.getElementById('topic-'+cb.dataset.topic);
      item.classList.toggle('completed', cb.checked);
      item.classList.add('just-completed');
      setTimeout(() => item.classList.remove('just-completed'), 400);
      saveState(); updatePanelHeader(mod); renderDashboard();
    });
  });

  body.querySelectorAll('.subtopic-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const ts = getTopicState(cb.dataset.topic);
      if (!ts.subtopics) ts.subtopics = {};
      ts.subtopics[cb.dataset.sub] = cb.checked;
      cb.closest('.subtopic-item').classList.toggle('done', cb.checked);
      saveState();
    });
  });

  body.querySelectorAll('.time-input').forEach(inp => {
    inp.addEventListener('change', () => {
      getTopicState(inp.dataset.topic).timeSpent = parseInt(inp.value)||0;
      saveState(); updatePanelHeader(mod); renderDashboard();
    });
  });

  body.querySelectorAll('.btn-upload-pdf').forEach(btn => {
    btn.addEventListener('click', () => document.querySelector(`.pdf-file-input[data-topic="${btn.dataset.topic}"]`).click());
  });

  body.querySelectorAll('.pdf-file-input').forEach(inp => {
    inp.addEventListener('change', () => {
      const file = inp.files[0]; if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        const ts = getTopicState(inp.dataset.topic);
        ts.pdfData = e.target.result; ts.pdfName = file.name;
        saveState(); renderTopics(mod);
      };
      reader.readAsDataURL(file);
    });
  });

  body.querySelectorAll('.btn-view-pdf').forEach(btn => {
    btn.addEventListener('click', () => {
      const ts = getTopicState(btn.dataset.topic);
      if (!ts.pdfData) return;
      const topic = mod.topics.find(t => t.id===btn.dataset.topic);
      document.getElementById('pdfModalTitle').textContent = (topic?topic.name:'Notes')+' — '+(ts.pdfName||'PDF');
      document.getElementById('pdfIframe').src = ts.pdfData;
      document.getElementById('pdfModalOverlay').classList.add('open');
    });
  });

  // Remove PDF
  body.querySelectorAll('.btn-remove-pdf').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!confirm('Remove this PDF?')) return;
      const ts = getTopicState(btn.dataset.topic);
      ts.pdfData = ''; ts.pdfName = '';
      saveState(); renderTopics(mod);
    });
  });

  // Notes — always visible textarea, auto-save on input
  body.querySelectorAll('.notes-area').forEach(ta => {
    ta.addEventListener('input', () => {
      getTopicState(ta.dataset.topic).notes = ta.value;
      saveState();
    });
  });
}

// ===== SVG GRADIENT =====
function injectSvgDefs() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.classList.add('svg-defs');
  svg.innerHTML = `<defs>
    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a78bfa"/>
      <stop offset="100%" style="stop-color:#06b6d4"/>
    </linearGradient></defs>`;
  document.body.prepend(svg);
}

// ===== EVENT LISTENERS =====
function initEvents() {
  document.getElementById('btnClosePanel').addEventListener('click', closePanel);
  document.getElementById('panelOverlay').addEventListener('click', closePanel);

  document.getElementById('btnNextQuote').addEventListener('click', () => {
    state.quoteIndex = (state.quoteIndex+1) % QUOTES.length;
    renderQuote(); saveState();
  });

  document.getElementById('btnSetDate').addEventListener('click', () => {
    if (state.interviewDate) document.getElementById('interviewDateInput').value = state.interviewDate;
    document.getElementById('dateModalOverlay').classList.add('open');
  });
  document.getElementById('btnCloseDateModal').addEventListener('click', () => {
    document.getElementById('dateModalOverlay').classList.remove('open');
  });
  document.getElementById('btnSaveDate').addEventListener('click', () => {
    const val = document.getElementById('interviewDateInput').value;
    if (!val) return;
    state.interviewDate = val;
    saveState(); updateCountdown();
    document.getElementById('dateModalOverlay').classList.remove('open');
  });
  document.getElementById('dateModalOverlay').addEventListener('click', e => {
    if (e.target===document.getElementById('dateModalOverlay')) document.getElementById('dateModalOverlay').classList.remove('open');
  });

  document.getElementById('btnClosePdf').addEventListener('click', () => {
    document.getElementById('pdfModalOverlay').classList.remove('open');
    document.getElementById('pdfIframe').src = '';
  });
  document.getElementById('pdfModalOverlay').addEventListener('click', e => {
    if (e.target===document.getElementById('pdfModalOverlay')) {
      document.getElementById('pdfModalOverlay').classList.remove('open');
      document.getElementById('pdfIframe').src = '';
    }
  });
}

// ===== INIT =====
async function init() {
  await loadState();
  updateStreak();
  injectSvgDefs();
  renderQuote();
  renderDashboard();
  renderModulesGrid();
  updateCountdown();
  initEvents();
  setInterval(updateCountdown, 30000);
  // Auto daily quote rotation
  const today = new Date().toDateString();
  if (state.quoteDate !== today) {
    state.quoteDate = today;
    state.quoteIndex = Math.floor(Math.random()*QUOTES.length);
    saveState();
    renderQuote();
  }
}

document.addEventListener('DOMContentLoaded', init);
