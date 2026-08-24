# Jharkhand Societal Innovation Collaboration Portal

> **Tagline:** "From Community Problems to Collaborative Innovation and Real-World Impact."

The **Jharkhand Societal Innovation Collaboration Portal** is a production-grade, state-level, multi-page AI-powered societal innovation platform designed to bridge ground-level community challenges across Jharkhand with university R&D, industry CSR funding, and government verification.

---

## 🌟 Key Architecture Features

1. **Strict REST API Contract Matrix (18 Endpoints)**:
   - Full JWT session management (register, login, refresh, logout).
   - Citizen ground challenge submission with multipart photo, Web Speech API speech-to-text, and auto GPS capture.
   - Internal AI service hooks: Auto-classification, speech-to-text transcription, spatial duplicate detection (Haversine 200m radius), and priority scoring (0-100).
   - University project conversion and milestone tracking.
   - GIS endpoints with coordinate privacy fuzzing (~500m displacement for non-privileged public roles).

2. **Citizen-First UX & Visible 5-Language System**:
   - Header selector: `🌐 भाषा: हिन्दी ▼` (Visible in global header).
   - Languages: **हिन्दी (Hindi), English, বাংলা (Bengali), ଓଡ଼ିଆ (Odia), मराठी (Marathi)**.
   - Low-Literacy Support: Touch targets min 48px, visual category cards (💧 Water, 🌾 Farming, 🏥 Health, 📚 School, ⚡ Energy, 🐘 Wildlife), inline TTS (`🔊`) triggers for Web Speech Synthesis.

3. **Responsive Multi-Persona Routing**:
   - **Public Routes**: `/`, `/about`, `/how-it-works`, `/challenges`, `/solutions`, `/map`, `/success-stories`
   - **Citizen**: `/citizen/dashboard`, `/citizen/report`, `/citizen/nearby`, `/citizen/notifications`
   - **University**: `/university/dashboard`, `/university/challenges`, `/university/projects`, `/university/teams`
   - **Student**: `/student/dashboard`, `/student/projects`, `/student/tasks`
   - **Industry**: `/industry/dashboard`, `/industry/funding`, `/industry/collaborations`
   - **Government**: `/government/dashboard`, `/government/analytics`, `/government/map`, `/government/verification`
   - **Admin**: `/admin/dashboard`, `/admin/users`, `/admin/verification`, `/admin/ai`

4. **Interactive Leaflet GIS Engine**:
   - GeoJSON FeatureCollection rendering with marker clustering and category icons.
   - Privacy coordinate fuzzing (~500m) for public views.
   - Spatial Before/After evidence comparison slider.

---

## 📁 Directory Structure

```
jharkhand-innovation-portal/
├── index.html                    # SPA Shell with visible language selector & role switcher
├── css/
│   ├── main.css                  # High-contrast CSS design system & responsive layout
│   └── leaflet.css               # Leaflet map markers and popup styling
├── js/
│   ├── app.js                    # SPA Router, Global Orchestrator & Toast Manager
│   ├── i18n.js                   # 5-Language Translation Engine & TTS synthesis
│   ├── api-client.js             # Client-side REST API matrix handler & mock store
│   ├── gis-engine.js             # Leaflet GIS layer manager & 500m spatial fuzzing
│   ├── ai-service.js             # AI speech-to-text, 200m Haversine deduplication
│   └── views/                    # View render modules for all personas
│       ├── public-views.js
│       ├── citizen-views.js
│       ├── university-views.js
│       ├── student-views.js
│       ├── industry-views.js
│       ├── government-views.js
│       └── admin-views.js
├── server/
│   ├── server.js                 # Express.js REST API server entrypoint
│   ├── routes/                   # Node/Express API Controllers for all 18 endpoints
│   └── db/
│       ├── schema.sql            # PostgreSQL DDL with PostGIS & JSONB columns
│       └── seed.sql              # Seed SQL dataset for Jharkhand districts & institutions
└── README.md
```

---

## 🚀 How to Run

### Method 1: Instant Browser Execution (Zero Dependencies Required)
Simply open `index.html` directly in any modern browser! The built-in client-side API Interceptor engine handles all endpoints, Leaflet maps, 5-language DOM translation, AI classification, and multi-role dashboard switching seamlessly.

### Method 2: Node.js / Express Live Backend Server
If Node.js is installed on your system:
```bash
npm install express cors
node server/server.js
```
Then navigate to `http://localhost:5000` in your browser.

---

## 🏛️ Seeded Jharkhand Dataset
- **Districts**: Palamu, Hazaribagh, West Singhbhum, East Singhbhum, Ranchi, Dhanbad, Dumka, Bokaro.
- **Academic Institutions**: BIT Mesra, IIT (ISM) Dhanbad, Birsa Agricultural University, NIT Jamshedpur, Ranchi University.
- **CSR Partners & Funding**: Tata Steel CSR, BCCL Innovation Fund, JSLPS.
