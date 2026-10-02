# Farm Produce Photo Catalogue — Go-to-Market & Customer Operations
### Case Study No. 51 | AgriBusiness – Digital Marketing
**Academic Institution:** ITM Skills University — School of Future Tech  
**Program:** B.Tech Computer Science & Engineering (2026–30)  
**Curriculum Module:** Go-to-Market & Customer Operations (Semester III: Sprint I)  
**Target Organization:** Farmer Producer Organization (FPO) representing 180 Smallholders | 40 Weekly Harvest Batches  

---

## 📌 Executive Summary

This project delivers a complete Go-to-Market (GTM) strategy, customer operations blueprint, and working digital prototype for an FPO representing **180 smallholder farmers** in Nashik/Maharashtra, handling **40 weekly catalogue lots (~72 Metric Tonnes / ₹15.84 Lakhs GMV per week)**.

By replacing traditional "sight-unseen" distress sales at local APMC mandis with a **pre-harvest verified photo catalogue**, the FPO bridges the information gap between farm gates and institutional B2B buyers (modern retail, quick commerce, HoReCa, and agro-processors).

### Key Empirical Results:
* **Farmer Payout Realization:** Increases by **+25.8% net cash (+₹451.75 per Quintal)** over APMC mandi middlemen.
* **Annual Economic Value Injected:** **₹1.64 Crores** distributed directly into 180 member households.
* **Monthly Operating Volume:** **₹66.52 Lakhs GMV (~302.4 MT)**.
* **FPO Financial Sustainability:** **₹3.07 Lakhs monthly gross revenue** against ₹1.02 Lakhs OPEX, generating **₹2.05 Lakhs monthly net operational surplus** (₹24.61 Lakhs/year) for member dividends and cold storage CapEx.
* **Information Quality SLA:** **> 96% catalogue accuracy** using a standardized 3-photo physical calibration protocol.

---

## 🌐 Architecture & Live Portals

The project is structured into **two separate, independent web applications** connected via a master launchpad:

```
GTM_major_project/
├── index.html                    # 🚀 Master Project Launchpad (connects Demo & Research)
├── README.md                     # 📖 Complete documentation & presentation guide
├── BUSINESS_REPORT.md            # 📄 Formal 4-5 page academic business report
├── BUSINESS_MODEL_CANVAS.md      # 📊 Complete 9-box Business Model Canvas analysis
├── SUPPLY_CHAIN_FLOW.md          # 🚚 End-to-end supply chain protocol & RACI matrix
├── PRESENTATION_6_SLIDES.md      # 🎙️ 6-slide presentation deck & speaker talking points
├── demo/                         # 📱 Standalone Prototype Website
│   ├── index.html                # Buyer catalogue, farmer submission & QC audit portal
│   ├── styles.css                # Polished responsive styling, badges & modals
│   └── app.js                    # 40-lot database, filtering, booking & WhatsApp RFQ
└── research/                     # 🔬 Standalone Research & Documentation Portal
    ├── index.html                # Executive analytics portal, interactive BMC & charts
    ├── styles.css                # Modern dashboard styling, slide deck UI & print stylesheet
    └── app.js                    # Chart.js visualizations, financial ROI calculator & timers
```

---

## 🚀 Live Portals & Features

### 1. Master Launchpad (`index.html`)
The central gateway welcoming evaluators and recruiters with high-level metrics, direct access to both portals, presentation walkthrough steps, and markdown deliverable links.

### 2. Farm Produce Photo Catalogue Prototype (`demo/index.html`)
Designed specifically for a **5-to-15 minute live presentation demo**:
* **Buyer Produce Catalogue:** Browse and filter all **40 weekly listings** across categories (Vegetables, Bulbs & Tubers, Fruits, Spices), quality grades (Grade A, B, C), and harvest countdowns (Today, 24h, 48-72h).
* **Produce Quality Spec Modal:** Displays calibrated multi-angle field photos, AGMARK tolerance limits, Brix/moisture measurements, and size calibrations.
* **Advance Pre-Booking & Escrow:** Buyers can pre-book lots 72h prior to harvest, locking farmgate rates and issuing digital Purchase Orders.
* **WhatsApp RFQ Generator:** Generates formatted WhatsApp messages ready for instant procurement communication via the Meta WhatsApp Cloud API.
* **Farmer Photo Submission Portal:** Standardized 3-photo upload workflow with visual reference scale checklist.
* **FPO Quality Audit Desk:** Agronomist verification gate to approve, reject, or request photo re-shoots, guaranteeing >96% data accuracy.
* **Orders & T+24h Settlement Ledger:** Real-time tracking of Purchase Orders, digital Goods Received Notes (GRN), and automated UPI payouts.
* **Presenter Guide Drawer:** Floating slide-out helper providing instant talking cues during viva examinations.

### 3. GTM Research & Documentation Portal (`research/index.html`)
The dedicated external research website containing all empirical research, analytics, and academic deliverables:
* **Interactive Financial Model & ROI Calculator:** Dynamic sliders for weekly entries, batch size, benchmark prices, and FPO commission percentage, calculating GMV, FPO monthly surplus, and member income uplift in real time.
* **Interactive Chart.js Visualizations:**
  1. *Farmer Realization Waterfall:* Breakdown of Mandi deductions (20.4%) vs. FPO Net Payout (93.7%).
  2. *B2B Customer Segment Volume Mix:* Modern Retail (45%), HoReCa (35%), Agro-Processors (20%).
  3. *90-Day Pilot Scaling Trajectory:* Volume (MT) and active farmer adoption across 3 phases.
  4. *Quality Grade Distribution:* AGMARK Grade A, B, and C categorization.
* **Full 4–5 Page Business Report:** Tabbed chapters with printable PDF export.
* **Interactive 9-Box Business Model Canvas (BMC).**
* **End-to-End Supply Chain Flow:** 6 interactive operational stages with RACI matrix.
* **SWOT Matrix & 5 Critical Risks:** With detailed, practical mitigation protocols.
* **Interactive 6-Slide Presentation Deck:** Built-in presentation mode with keyboard arrow navigation, slide indicator, full speaker notes toggle, and presentation stopwatch timer.
* **Data Sources & Citations:** Validated references from NABARD, SFAC, AGMARK, APEDA, e-NAM, and Agmarknet.

---

## 🎙️ 5-to-15 Minute Presentation Walkthrough Guide

Use this battle-tested presentation sequence during evaluation:

| Timing | Portal View | Key Talking Points & Actions |
| :---: | :---: | :--- |
| **0:00 – 2:30** | `research/index.html`<br>*(Slide 1 & Overview)* | **The Mandi Squeeze:** Introduce the 180 smallholder members and the problem of harvesting blind. Explain how commission agents extract 20%+ in cuts and why pre-harvest visual cataloguing solves "sight-unseen" risk. |
| **2:30 – 5:00** | `research/index.html`<br>*(Slides 2 & 3)* | **Customer Targeting & Operating Flow:** Show the 3 buyer tiers (Modern Retail 45%, HoReCa 35%, Processors 20%). Walk through the 5-stage operating flow from field photo to T+24h UPI settlement. |
| **5:00 – 9:30** | `demo/index.html`<br>*(Live Prototype)* | **Live Prototype Demonstration:**<br>1. *Buyer Catalogue:* Filter 40 lots by "Grade A" and "Harvesting in 24 Hours".<br>2. *Inspect Lot:* Click "View Specs" on `LOT-TOM-01` to show the calibrated cross-section photo and AGMARK card.<br>3. *Pre-Book:* Click "Pre-Book Batch", demonstrate the landed price breakdown, and click "Generate WhatsApp RFQ".<br>4. *Farmer Upload:* Switch to "Farmer Submission", click "Auto-Populate Standard Photos & Data", and submit.<br>5. *Quality Desk:* Switch to "FPO Quality Verification" and click "Approve & Publish" to show how the lot instantly appears in the live catalogue. |
| **9:30 – 12:00** | `research/index.html`<br>*(Financial Calculator)* | **Unit Economics & Financial Sustainability:** Move sliders on the Financial Calculator to demonstrate how 40 weekly lots generate ₹66.5L monthly GMV, ₹2.05L net FPO operational surplus, and +25.8% higher realization for farmers. |
| **12:00 – 15:00** | `research/index.html`<br>*(SWOT & 5 Risks)* | **Risk Engineering & Conclusion:** Address the 5 practical mitigations (calibrated reference strips against photo fraud, HDPE crates against transit bruising, escrow against buyer default). Conclude with the 90-day pilot roadmap. |

---

## 💻 Local Execution & Testing

Both websites are built with pure, modern HTML5, CSS3, and JavaScript (ES6). **Zero compilation or build steps are required.**

### Option 1: Double-Click (Direct Browser Open)
Open `index.html`, `demo/index.html`, or `research/index.html` directly in any modern browser (Chrome, Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Python / Node / VS Code)
Using Python 3:
```bash
cd "GTM_major_project"
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

Using Node.js `npx serve`:
```bash
npx serve .
```

---

## ☁️ Deployment Instructions

### Deploy to GitHub Pages:
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat(gtm): complete Case Study 51 Farm Produce Photo Catalogue research portal and interactive prototype"
   ```
2. Create a GitHub repository and push:
   ```bash
   git remote add origin https://github.com/<your-username>/gtm-farm-catalogue.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** ➔ **Pages**.
   - Under **Build and deployment** ➔ **Source**, select **Deploy from a branch**.
   - Set Branch to `main` and folder to `/(root)`.
   - Click **Save**. Your site will be live at `https://<your-username>.github.io/gtm-farm-catalogue/`.

### Deploy to Vercel (Static Web Hosting):
1. Push your repository to GitHub as described above.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Leave Framework Preset as **Other** (Root directory `./`).
5. Click **Deploy**. Vercel will instantly generate a global CDN URL (e.g. `https://gtm-farm-catalogue.vercel.app`).
   - Both `/demo/` and `/research/` will function automatically.

---

## 📚 Deliverables Summary Checklist

- [x] **4–5 Page Business Report:** [BUSINESS_REPORT.md](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/BUSINESS_REPORT.md) & [Research Portal Tab](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/research/index.html)
- [x] **Business Model Canvas:** [BUSINESS_MODEL_CANVAS.md](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/BUSINESS_MODEL_CANVAS.md) & [Interactive 9-Box Grid](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/research/index.html)
- [x] **Supply Chain Architecture & RACI:** [SUPPLY_CHAIN_FLOW.md](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/SUPPLY_CHAIN_FLOW.md)
- [x] **6-Slide Executive Presentation:** [PRESENTATION_6_SLIDES.md](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/PRESENTATION_6_SLIDES.md) & [Interactive Slide Deck](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/research/index.html)
- [x] **Interactive Prototype Demo:** [demo/index.html](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/demo/index.html)
- [x] **Master Launchpad Hub:** [index.html](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/index.html)

---
*Created for ITM Skills University — School of Future Tech | Go-to-Market & Customer Operations.*
