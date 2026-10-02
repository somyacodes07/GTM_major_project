# Farm Produce Photo Catalogue — Go-to-Market & Customer Operations
### Case Study No. 51 | AgriBusiness – Digital Marketing
**Academic Institution:** ITM Skills University — School of Future Tech  
**Program:** B.Tech Computer Science & Engineering (2026–30)  
**Curriculum Module:** Go-to-Market & Customer Operations (Semester III: Sprint I)  
**Target Organization:** Farmer Producer Organization (FPO) representing 180 Smallholders | 40 Weekly Harvest Lots  

---

## 📌 Project Overview

This repository provides the complete Go-to-Market strategy, customer operations architecture, and working digital prototype for Case Study No. 51.

By replacing traditional "sight-unseen" distress sales at local APMC mandis with a **pre-harvest verified photo catalogue**, the FPO bridges the information gap between 180 smallholder farmers and institutional B2B buyers (modern retail, quick commerce, HoReCa, and agro-processors).

### Key Metrics:
* **Farmer Payout Realization:** **+25.8% net cash increase (+₹451.75 per Quintal)** over APMC mandi middlemen.
* **Annual Economic Value Injected:** **₹1.64 Crores** distributed directly across 180 member households.
* **Monthly Operating Volume:** **₹66.52 Lakhs GMV (~302.4 MT)** across 40 weekly lots.
* **FPO Financial Sustainability:** **₹3.07 Lakhs monthly gross revenue** against ₹1.02 Lakhs OPEX $\rightarrow$ **₹2.05 Lakhs monthly net operational surplus** (₹24.61 Lakhs/year) for member dividends and cold-chain investments.
* **Information Quality SLA:** **> 96% catalogue accuracy** using a standardized 3-photo physical calibration protocol.

---

## 📂 Repository Structure

Both websites are completely static with zero build steps or dependencies, ready to be served immediately by GitHub Pages:

```
GTM_major_project/
├── index.html                    # 🚀 Master Launchpad Hub (connects Demo & Research)
├── README.md                     # 📖 Complete documentation & presentation guide
├── BUSINESS_REPORT.md            # 📄 Formal 4–5 page academic business report
├── BUSINESS_MODEL_CANVAS.md      # 📊 Complete 9-box Business Model Canvas analysis
├── SUPPLY_CHAIN_FLOW.md          # 🚚 End-to-end supply chain protocol & RACI matrix
├── PRESENTATION_6_SLIDES.md      # 🎙️ 6-slide executive deck & speaker talking points
├── demo/                         # 📱 Standalone Prototype Website
│   ├── index.html                # Buyer catalogue, farmer submission & QC audit portal
│   ├── styles.css                # Clean, responsive minimalist styling
│   └── app.js                    # 40-lot database, filtering, booking & WhatsApp RFQ
└── research/                     # 🔬 Standalone Research & Documentation Portal
    ├── index.html                # Executive analytics portal, interactive 6-slide deck & BMC
    ├── styles.css                # Modern dashboard styling & print stylesheet
    └── app.js                    # Chart.js visualizations, financial ROI calculator & timer
```

---

## 🌐 The Two Independent Portals

### 1. Prototype Web Application ([`demo/index.html`](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/demo/index.html))
Tailored for a crisp **5-to-15 minute live presentation**:
* **Buyer Produce Catalogue:** Browse and filter all **40 weekly listings** across categories (Vegetables, Bulbs & Tubers, Fruits, Spices), quality grades (Grade A, B, C), and harvest countdowns (Today, 24h, 48-72h).
* **Calibrated Quality Spec Sheet:** Inspects cross-section photos, AGMARK tolerance limits, Brix/moisture measurements, and size calibrations.
* **Advance Pre-Booking & Escrow:** Buyers can pre-book lots 72h prior to harvest, locking farmgate rates and issuing digital Purchase Orders.
* **WhatsApp RFQ Generator:** Pre-formats instant quotation messages for the Meta WhatsApp Cloud API.
* **Farmer Photo Submission Portal:** Standardized 3-photo upload workflow with visual reference scale checklist.
* **FPO Quality Audit Desk:** Agronomist verification gate to approve, reject, or request photo re-shoots, guaranteeing >96% data accuracy.
* **Orders & T+24h Settlement Ledger:** Real-time tracking of Purchase Orders, digital Goods Received Notes (GRN), and automated UPI payouts.
* **Presenter Cues Drawer:** Slide-out presenter helper providing instant talking cues during viva examinations.

### 2. GTM Research & Documentation Portal ([`research/index.html`](file:///Users/somyajeet/Git/college%20projects/GTM_major_project/research/index.html))
The dedicated external research website containing all empirical research, analytics, and academic deliverables:
* **Interactive 6-Slide Executive Presentation Deck:** Built-in presentation mode with keyboard arrow navigation, slide indicator, full speaker notes toggle, and presentation stopwatch timer.
* **Interactive Financial Model & ROI Calculator:** Dynamic sliders for weekly entries, batch size, benchmark prices, and FPO commission percentage, calculating GMV, FPO monthly surplus, and member income uplift in real time.
* **Interactive Chart.js Visualizations:**
  1. *Farmer Realization Waterfall:* Mandi deductions (20.4%) vs. FPO Net Payout (93.7%).
  2. *B2B Customer Segment Volume Mix:* Modern Retail (45%), HoReCa (35%), Agro-Processors (20%).
  3. *90-Day Pilot Scaling Trajectory:* Volume (MT) and active farmer adoption across 3 phases.
  4. *Quality Grade Distribution:* AGMARK Grade A, B, and C categorization.
* **Full 4–5 Page Business Report:** Tabbed chapters with printable PDF export.
* **Interactive 9-Box Business Model Canvas (BMC).**
* **End-to-End Supply Chain Flow:** 6 interactive operational stages with RACI matrix.
* **SWOT Matrix & 5 Critical Risks:** With detailed, practical mitigation protocols.

---

## 🎙️ 5-to-15 Minute Presentation Walkthrough Guide

| Time | View | Key Actions & Talking Points |
| :---: | :---: | :--- |
| **0:00 – 2:30** | `research/index.html` *(Slide 1)* | **The Mandi Squeeze:** Introduce 180 farmers harvesting blind. Middlemen extract 20%+ in cuts; explain why pre-harvest visual cataloguing solves "sight-unseen" risk. |
| **2:30 – 5:00** | `research/index.html` *(Slides 2 & 3)* | **Customer Targeting & Operating Flow:** Show the 3 buyer tiers (Retail 45%, HoReCa 35%, Processors 20%). Walk through the 5-stage operating flow. |
| **5:00 – 9:30** | `demo/index.html` *(Live Prototype)* | **Live Demonstration:**<br>1. Filter 40 lots by *Grade A* and *24h harvest*.<br>2. Click *Specs* on `LOT-TOM-01` to show calibrated cross-section and AGMARK specs.<br>3. Click *Pre-Book* and show *WhatsApp RFQ*.<br>4. Switch to *Farmer Submission*, click *Auto-Fill Sample Lot*, and submit.<br>5. Switch to *Quality Desk* and click *Approve & Publish* to watch the lot go live. |
| **9:30 – 12:00** | `research/index.html` *(Calculator)* | **Unit Economics:** Move the sliders on the Financial Calculator to prove financial viability (₹66.5L monthly GMV, ₹2.05L net surplus, +₹451/Qtl farmer uplift). |
| **12:00 – 15:00** | `research/index.html` *(SWOT & Risks)* | **Risk Mitigation & Conclusion:** Address the 5 practical mitigations (calibrated strips against photo drift, HDPE crates against transit bruising, escrow against buyer defaults). |

---

## 🚀 1-Click Deployment to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

2. Enable **GitHub Pages**:
   - In your GitHub repo, go to **Settings** ➔ **Pages**.
   - Under **Build and deployment** ➔ **Source**, select **Deploy from a branch**.
   - Select Branch: `main` and Folder: `/(root)`.
   - Click **Save**.

Your project will be live in ~60 seconds at:  
`https://<your-username>.github.io/<repo-name>/`

---
*Created for ITM Skills University — School of Future Tech | Go-to-Market & Customer Operations.*
