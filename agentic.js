const MODULES = [
  {id:1,name:"Python",emoji:"🐍",priority:"critical",day:"Tier 1",timeAllocated:180,color:"#3b82f6",glow:"rgba(59,130,246,0.25)",description:"Foundation of everything. OOP, APIs, async — must be solid.",
   topics:[
    {id:"a1.1",name:"Fundamentals",time:20,subtopics:["Variables","Data Types","Operators","Input/Output"]},
    {id:"a1.2",name:"Control Flow",time:15,subtopics:["if/else","loops","break","continue"]},
    {id:"a1.3",name:"Functions",time:20,subtopics:["arguments","return","lambda","recursion basics"]},
    {id:"a1.4",name:"OOP",time:30,subtopics:["Class & Object","Constructor","Inheritance","Polymorphism","Encapsulation"]},
    {id:"a1.5",name:"Error Handling",time:15,subtopics:["try/except","custom exceptions"]},
    {id:"a1.6",name:"File Handling",time:10,subtopics:["txt","json","csv"]},
    {id:"a1.7",name:"APIs with Python",time:20,subtopics:["requests library","REST APIs","GET/POST","Authentication"]},
    {id:"a1.8",name:"Async Programming",time:25,subtopics:["async/await","asyncio","parallel execution"]},
    {id:"a1.9",name:"Important Libraries",time:15,subtopics:["pandas","numpy","requests","fastapi"]},
    {id:"a1.10",name:"Python Interview Q&A",time:20,subtopics:["list vs tuple","set vs list","dict internals","shallow vs deep copy","*args **kwargs","generator vs iterator","multithreading vs multiprocessing","async vs sync","decorators","context managers"]}
  ]},
  {id:2,name:"DSA for Interviews",emoji:"🧮",priority:"low",day:"Tier 3",timeAllocated:120,color:"#64748b",glow:"rgba(100,116,139,0.25)",description:"No deep level needed. Arrays, strings, hashing — just enough to pass.",
   topics:[
    {id:"a2.1",name:"Arrays",time:20,subtopics:["Two Sum","Sliding Window","Prefix Sum"]},
    {id:"a2.2",name:"Strings",time:15,subtopics:["Reverse String","Anagrams","Palindrome"]},
    {id:"a2.3",name:"Searching",time:10,subtopics:["Linear Search","Binary Search"]},
    {id:"a2.4",name:"Sorting",time:20,subtopics:["Bubble","Selection","Insertion","Merge Sort","Quick Sort"]},
    {id:"a2.5",name:"Stack & Queue",time:20,subtopics:["Stack Implementation","Valid Parenthesis","Queue","Deque"]},
    {id:"a2.6",name:"Hashing",time:15,subtopics:["HashMap","Frequency Counting"]},
    {id:"a2.7",name:"Complexity Analysis",time:20,subtopics:["Big O Notation","Time Complexity","Space Complexity"]}
  ]},
  {id:3,name:"SQL",emoji:"🗄️",priority:"high",day:"Tier 1",timeAllocated:120,color:"#6366f1",glow:"rgba(99,102,241,0.25)",description:"SQL is tested everywhere. Joins, Window Functions, CTEs — must know.",
   topics:[
    {id:"a3.1",name:"Fundamentals",time:20,subtopics:["SELECT","WHERE","GROUP BY","HAVING","ORDER BY"]},
    {id:"a3.2",name:"Joins",time:25,subtopics:["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN"]},
    {id:"a3.3",name:"Subqueries & CTE",time:20,subtopics:["Single Row Subquery","Correlated Subquery","WITH Clause","CTE vs Subquery"]},
    {id:"a3.4",name:"Window Functions",time:25,subtopics:["ROW_NUMBER()","RANK()","DENSE_RANK()","PARTITION BY","Running Total"]},
    {id:"a3.5",name:"SQL Interview Problems",time:30,subtopics:["Top N","Duplicate Records","Highest Salary","Second Highest Salary","Running Totals","Month-wise Sales"]}
  ]},
  {id:4,name:"Machine Learning",emoji:"🤖",priority:"medium",day:"Tier 2",timeAllocated:90,color:"#10b981",glow:"rgba(16,185,129,0.25)",description:"Interview level only. Algorithms, metrics, overfitting — be ready to explain.",
   topics:[
    {id:"a4.1",name:"ML Workflow",time:15,subtopics:["Data Collection","Cleaning","Training","Evaluation"]},
    {id:"a4.2",name:"Supervised Learning",time:15,subtopics:["Regression","Classification"]},
    {id:"a4.3",name:"Unsupervised Learning",time:10,subtopics:["Clustering","Dimensionality Reduction"]},
    {id:"a4.4",name:"Algorithms",time:20,subtopics:["Linear Regression","Logistic Regression","KNN","SVM","Decision Tree","Random Forest","XGBoost"]},
    {id:"a4.5",name:"Metrics & Concepts",time:30,subtopics:["Accuracy","Precision","Recall","F1","Overfitting","Underfitting","Cross Validation","Bias-Variance Tradeoff"]}
  ]},
  {id:5,name:"Deep Learning",emoji:"🧬",priority:"medium",day:"Tier 2",timeAllocated:90,color:"#8b5cf6",glow:"rgba(139,92,246,0.25)",description:"ANN to Transformers. Fine-tuning, LoRA, Quantization basics.",
   topics:[
    {id:"a5.1",name:"ANN Basics",time:20,subtopics:["Perceptron","Forward Propagation","Backpropagation"]},
    {id:"a5.2",name:"Activation Functions",time:10,subtopics:["ReLU","Sigmoid","Tanh"]},
    {id:"a5.3",name:"CNN",time:15,subtopics:["Convolution","Pooling"]},
    {id:"a5.4",name:"Sequence Models",time:15,subtopics:["RNN","LSTM","GRU"]},
    {id:"a5.5",name:"Transformers & Fine Tuning",time:30,subtopics:["Transformer Architecture Intro","Fine Tuning Basics","LoRA","Quantization"]}
  ]},
  {id:6,name:"Generative AI",emoji:"✨",priority:"high",day:"Tier 1",timeAllocated:120,color:"#f97316",glow:"rgba(249,115,22,0.25)",description:"LLMs, embeddings, prompt engineering, function calling — core interview territory.",
   topics:[
    {id:"a6.1",name:"LLM Fundamentals",time:20,subtopics:["What is an LLM?","Tokenization","Embeddings","Context Window"]},
    {id:"a6.2",name:"LLM Behavior",time:20,subtopics:["Hallucination","Temperature","Top K","Top P","Structured Output"]},
    {id:"a6.3",name:"Prompt Engineering",time:20,subtopics:["Zero Shot","Few Shot","Chain of Thought","System Prompts"]},
    {id:"a6.4",name:"Advanced LLM Features",time:20,subtopics:["Function Calling","Tool Use","MCP Basics","Structured JSON output"]},
    {id:"a6.5",name:"Vector Databases Intro",time:20,subtopics:["Why vector DB?","Similarity Search","Cosine Similarity","Embeddings in practice"]},
    {id:"a6.6",name:"GenAI Interview Q&A",time:20,subtopics:["How does ChatGPT work?","What are embeddings?","Why vector DB?","What is semantic search?","Hallucination?","Temperature explained?"]}
  ]},
  {id:7,name:"RAG",emoji:"📡",priority:"critical",day:"Tier 1",timeAllocated:180,color:"#ec4899",glow:"rgba(236,72,153,0.25)",description:"MOST IMPORTANT. Every AI interview will go deep into RAG. Know every component.",
   topics:[
    {id:"a7.1",name:"Why RAG",time:15,subtopics:["Why not train LLM?","RAG vs Fine Tuning","When to use RAG?"]},
    {id:"a7.2",name:"RAG Pipeline",time:25,subtopics:["Query → Embedding → Vector Search → Retrieved Context → LLM → Answer","End-to-end flow explanation"]},
    {id:"a7.3",name:"Chunking",time:20,subtopics:["Why chunking?","Fixed size chunking","Semantic chunking","Best chunk size?","Chunk overlap"]},
    {id:"a7.4",name:"Retrieval Techniques",time:25,subtopics:["Dense Retrieval","Sparse Retrieval (BM25)","Hybrid Search","Reranking","Metadata Filtering"]},
    {id:"a7.5",name:"Advanced RAG",time:30,subtopics:["Query Rewriting","HyDE (Hypothetical Document Embeddings)","CRAG (Corrective RAG)","Multi-Query Retrieval","Self RAG"]},
    {id:"a7.6",name:"RAG Evaluation",time:20,subtopics:["Faithfulness","Answer Relevance","Context Precision","Context Recall","RAGAS framework"]},
    {id:"a7.7",name:"RAG Interview Q&A",time:25,subtopics:["Why not just use LLM alone?","Why vector DB?","Why chunking?","Best chunk size?","What is reranking?","Hybrid search vs dense?"]}
  ]}
];

const MODULES_PART2 = [
  {id:8,name:"Agentic AI",emoji:"🤖",priority:"critical",day:"Tier 1",timeAllocated:240,color:"#f59e0b",glow:"rgba(245,158,11,0.25)",description:"MOST IMPORTANT. Explain exactly how your agents worked internally.",
   topics:[
    {id:"a8.1",name:"Agent Basics",time:20,subtopics:["What is an Agent?","Agent vs Chatbot","Why Agents?","Agent loop"]},
    {id:"a8.2",name:"Agent Components",time:25,subtopics:["LLM (brain)","Memory","Tools","Reasoning","Planning"]},
    {id:"a8.3",name:"ReAct Framework",time:25,subtopics:["Reason + Act cycle","Thought-Action-Observation","When ReAct fails"]},
    {id:"a8.4",name:"Tool Calling",time:25,subtopics:["Function calling","Tool definition","Tool selection by LLM","Parallel tool calls"]},
    {id:"a8.5",name:"Memory Types",time:20,subtopics:["Short term memory","Long term memory","Episodic memory","Semantic memory","External memory"]},
    {id:"a8.6",name:"Advanced Agent Patterns",time:30,subtopics:["Multi-step Reasoning","Reflection","Self Correction","Human in the Loop","Planning agents"]},
    {id:"a8.7",name:"LangChain",time:30,subtopics:["Chains","Agents","Tools","Memory","LangChain Expression Language (LCEL)"]},
    {id:"a8.8",name:"LangGraph",time:30,subtopics:["Nodes","Edges","State Management","Conditional edges","Cycles in graphs"]},
    {id:"a8.9",name:"Other Frameworks",time:20,subtopics:["AutoGen � Assistant Agent + User Proxy","CrewAI � Agents + Tasks + Crews","When to use which?"]}
  ]},
  {id:9,name:"Vector Databases",emoji:"🗃️",priority:"high",day:"Tier 1",timeAllocated:90,color:"#06b6d4",glow:"rgba(6,182,212,0.25)",description:"Core infrastructure for RAG. Know FAISS, ChromaDB, Pinecone differences.",
   topics:[
    {id:"a9.1",name:"Concepts",time:20,subtopics:["What is vector search?","Cosine Similarity","Euclidean Distance","Dot Product","HNSW indexing"]},
    {id:"a9.2",name:"FAISS",time:20,subtopics:["What is FAISS?","IndexFlatL2","IndexIVFFlat","When to use FAISS?"]},
    {id:"a9.3",name:"ChromaDB",time:15,subtopics:["What is ChromaDB?","Collections","Metadata filtering","Local vs server"]},
    {id:"a9.4",name:"Cloud Vector DBs",time:20,subtopics:["Pinecone � managed cloud","Weaviate � hybrid search","Qdrant","When cloud vs local?"]},
    {id:"a9.5",name:"Vector DB Interview Q&A",time:15,subtopics:["FAISS vs ChromaDB vs Pinecone","What is HNSW?","Metadata filtering?","Indexing strategies?","Scaling vector search?"]}
  ]},
  {id:10,name:"FastAPI & Deployment",emoji:"🚀",priority:"medium",day:"Tier 2",timeAllocated:90,color:"#34d399",glow:"rgba(52,211,153,0.25)",description:"Build APIs for your agents. FastAPI, Docker, JWT � production basics.",
   topics:[
    {id:"a10.1",name:"FastAPI Core",time:25,subtopics:["GET/POST routes","Request/Response Models","Path params","Query params","Async endpoints"]},
    {id:"a10.2",name:"Pydantic & Validation",time:15,subtopics:["BaseModel","Field validation","Custom validators"]},
    {id:"a10.3",name:"Auth & Middleware",time:20,subtopics:["JWT Authentication","OAuth2","Middleware","CORS"]},
    {id:"a10.4",name:"Docker & Deployment",time:30,subtopics:["Dockerfile basics","docker-compose","Environment variables","Deploy to cloud"]}
  ]},
  {id:11,name:"Automation & Workflows",emoji:"⚙️",priority:"medium",day:"Tier 3",timeAllocated:60,color:"#a78bfa",glow:"rgba(167,139,250,0.25)",description:"JD specifically mentions this. n8n, CRM/ATS integration, webhooks.",
   topics:[
    {id:"a11.1",name:"n8n",time:20,subtopics:["What is n8n?","Workflow nodes","Triggers","HTTP Request node","Webhook node"]},
    {id:"a11.2",name:"Integrations",time:20,subtopics:["CRM Integration","ATS Integration","Email Automation","Scheduling"]},
    {id:"a11.3",name:"Zapier Basics",time:20,subtopics:["Zaps","Triggers","Actions","Webhooks in Zapier"]}
  ]},
  {id:12,name:"AI Voice Agents",emoji:"🎙️",priority:"low",day:"Tier 3",timeAllocated:60,color:"#f472b6",glow:"rgba(244,114,182,0.25)",description:"JD preferred skill. STT, TTS, ElevenLabs, real-time voice pipelines.",
   topics:[
    {id:"a12.1",name:"Voice Pipeline Basics",time:20,subtopics:["STT (Speech to Text)","TTS (Text to Speech)","Real-time pipeline","Latency challenges"]},
    {id:"a12.2",name:"Tools & Services",time:20,subtopics:["ElevenLabs","Deepgram","Whisper","VAPI"]},
    {id:"a12.3",name:"Advanced Voice",time:20,subtopics:["Real Time Agents","Interrupt Handling","Voice + Agent integration","Live call agents"]}
  ]},
  {id:13,name:"System Design for AI",emoji:"🏗️",priority:"medium",day:"Tier 2",timeAllocated:90,color:"#94a3b8",glow:"rgba(148,163,184,0.25)",description:"Production AI systems. How to architect at scale. Caching, monitoring, cost.",
   topics:[
    {id:"a13.1",name:"Agent Architectures",time:25,subtopics:["Single Agent Architecture","Multi Agent Architecture","Supervisor + Worker pattern","Agent communication"]},
    {id:"a13.2",name:"Production RAG Design",time:25,subtopics:["Ingestion pipeline","Query pipeline","Caching strategies","Rate limiting"]},
    {id:"a13.3",name:"Observability & Cost",time:20,subtopics:["Logging AI calls","Monitoring agent behavior","LangSmith / LangFuse","Cost optimization","Token management"]},
    {id:"a13.4",name:"System Design Q&A",time:20,subtopics:["Design a production RAG system","Design a multi-agent customer support bot","How to handle LLM failures?","Scaling vector search?"]}
  ]},
  {id:14,name:"Project Defense",emoji:"🛡️",priority:"critical",day:"Tier 1",timeAllocated:120,color:"#ef4444",glow:"rgba(239,68,68,0.25)",description:"60% of your interview will be here. Know every project inside out.",
   topics:[
    {id:"a14.1",name:"Veersa � Recruitment Platform",time:30,subtopics:["Recruitment Agent � how it worked","Assessment Agent � architecture","Voice Interview Agent � pipeline","HR Portal � tech stack","How agents communicated?","What LLMs used and why?"]},
    {id:"a14.2",name:"EduRAG",time:30,subtopics:["ReAct implementation � explain step by step","HyDE � what it is and why used","CRAG � corrective retrieval flow","Multi Tool Retrieval � how tools selected","Chunking strategy used","Embedding model chosen � why?"]},
    {id:"a14.3",name:"Healthcare Assistant",time:30,subtopics:["Fine Tuning process � explain","LoRA � what it is, why LoRA not full FT","Unsloth � why used for efficiency","Dataset preparation","Evaluation metrics used"]},
    {id:"a14.4",name:"Stock Chatbot",time:30,subtopics:["FAISS setup � IndexType used","FinBERT embeddings � why FinBERT?","RAG pipeline for financial data","How semantic search worked","What data was indexed?","Accuracy/results?"]}
  ]}
];

MODULES.push(...MODULES_PART2);

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
const STATE_COLLECTION = 'studyforge_agentic_state';

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

