/**
 * GTM Research & Documentation Portal Application Engine
 * Case Study No. 51: Farm Produce Photo Catalogue
 * Charts, Interactive Financial Calculator, 6-Slide Deck, Tab Navigation
 */

document.addEventListener("DOMContentLoaded", () => {
  initPortalNavigation();
  initReportTabs();
  initCharts();
  initFinancialCalculator();
  initPresentationDeck();
  initPrintButton();
});

// ================= 1. PORTAL SECTION NAVIGATION =================
function initPortalNavigation() {
  const navBtns = document.querySelectorAll(".nav-tab-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const targetSectionId = `sec-${btn.dataset.section}`;
      document.querySelectorAll(".doc-section").forEach(sec => {
        sec.classList.remove("active");
      });

      const activeSec = document.getElementById(targetSectionId);
      if (activeSec) {
        activeSec.classList.add("active");
        window.scrollTo({ top: activeSec.offsetTop - 70, behavior: "smooth" });
      }
    });
  });
}

// ================= 2. BUSINESS REPORT SUB-TABS =================
function initReportTabs() {
  const repTabs = document.querySelectorAll(".rep-tab");
  repTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      repTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const chId = tab.dataset.ch;
      document.querySelectorAll(".report-chapter").forEach(ch => {
        ch.classList.remove("active");
      });

      const activeCh = document.getElementById(chId);
      if (activeCh) activeCh.classList.add("active");
    });
  });
}

// ================= 3. CHART.JS VISUALIZATIONS =================
function initCharts() {
  // Chart 1: Farmer Realization Comparison (Bar Chart)
  const ctxRealization = document.getElementById("farmerRealizationChart");
  if (ctxRealization) {
    new Chart(ctxRealization, {
      type: "bar",
      data: {
        labels: [
          "Mandi Gross",
          "Mandi Comm (8%)",
          "Mandi Cuts (4%)",
          "Mandi Freight",
          "MANDI NET PAYOUT",
          "FPO Contract Rate",
          "FPO Service Fee",
          "FPO NET PAYOUT"
        ],
        datasets: [{
          label: "Value per Quintal (₹)",
          data: [2200, -176, -88, -185, 1751, 2350, -147.25, 2202.75],
          backgroundColor: [
            "#94a3b8",
            "#f87171",
            "#f87171",
            "#f87171",
            "#ef4444",
            "#34d399",
            "#fbbf24",
            "#059669"
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => ` ₹${Math.abs(context.raw).toLocaleString()} / Quintal`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: { color: "#f1f5f9" },
            ticks: {
              callback: (val) => `₹${val}`
            }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 } }
          }
        }
      }
    });
  }

  // Chart 2: Buyer Segment Absorption Mix (Donut Chart)
  const ctxBuyer = document.getElementById("buyerSegmentChart");
  if (ctxBuyer) {
    new Chart(ctxBuyer, {
      type: "doughnut",
      data: {
        labels: [
          "Modern Retail & Q-Commerce (45%)",
          "HoReCa & Cloud Kitchens (35%)",
          "Agro-Processors & Puree (20%)"
        ],
        datasets: [{
          data: [45, 35, 20],
          backgroundColor: ["#059669", "#2563eb", "#d97706"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { font: { size: 11 }, padding: 14 }
          }
        },
        cutout: "68%"
      }
    });
  }

  // Chart 3: 90-Day Scaling Trajectory (Mixed Chart)
  const ctxScaling = document.getElementById("scalingTrajectoryChart");
  if (ctxScaling) {
    new Chart(ctxScaling, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 15", "Day 30 (M1)", "Day 45", "Day 60 (M2)", "Day 75", "Day 90 (M3)"],
        datasets: [
          {
            type: "bar",
            label: "Weekly Volume (Metric Tonnes)",
            data: [0, 8, 18, 32, 50, 62, 72],
            backgroundColor: "rgba(16, 185, 129, 0.4)",
            borderColor: "#10b981",
            borderWidth: 1,
            borderRadius: 4,
            yAxisID: "y"
          },
          {
            type: "line",
            label: "Active Member Farmers",
            data: [15, 30, 45, 80, 110, 150, 180],
            borderColor: "#7c3aed",
            backgroundColor: "#7c3aed",
            tension: 0.35,
            pointRadius: 4,
            yAxisID: "y1"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { position: "bottom", labels: { font: { size: 11 } } }
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: { display: true, text: "Volume (MT)", font: { size: 10 } },
            grid: { color: "#f1f5f9" }
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            title: { display: true, text: "Farmers", font: { size: 10 } },
            grid: { drawOnChartArea: false }
          }
        }
      }
    });
  }

  // Chart 4: Quality Grading Distribution (Pie Chart)
  const ctxGrading = document.getElementById("gradingDistributionChart");
  if (ctxGrading) {
    new Chart(ctxGrading, {
      type: "pie",
      data: {
        labels: [
          "Grade A (Supermarket Premium - 60%)",
          "Grade B (HoReCa / Culinary - 30%)",
          "Grade C (Agro-Processing - 10%)"
        ],
        datasets: [{
          data: [60, 30, 10],
          backgroundColor: ["#10b981", "#f59e0b", "#6366f1"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { font: { size: 11 }, padding: 14 }
          }
        }
      }
    });
  }
}

// ================= 4. INTERACTIVE FINANCIAL CALCULATOR =================
function initFinancialCalculator() {
  const inputLots = document.getElementById("inputLots");
  const inputBatchSize = document.getElementById("inputBatchSize");
  const inputPrice = document.getElementById("inputPrice");
  const inputCommission = document.getElementById("inputCommission");

  const valLots = document.getElementById("valLots");
  const valBatchSize = document.getElementById("valBatchSize");
  const valPrice = document.getElementById("valPrice");
  const valCommission = document.getElementById("valCommission");

  // Output fields
  const resWeeklyVol = document.getElementById("resWeeklyVol");
  const resWeeklyGMV = document.getElementById("resWeeklyGMV");
  const resMonthlyGMV = document.getElementById("resMonthlyGMV");
  const resFpoGross = document.getElementById("resFpoGross");
  const resFpoOpex = document.getElementById("resFpoOpex");
  const resNetSurplus = document.getElementById("resNetSurplus");
  const resMandiPayout = document.getElementById("resMandiPayout");
  const resFpoPayout = document.getElementById("resFpoPayout");
  const resDeltaTag = document.getElementById("resDeltaTag");

  function recalculate() {
    const lots = parseInt(inputLots.value, 10);
    const batchSizeQtl = parseInt(inputBatchSize.value, 10);
    const benchmarkPrice = parseInt(inputPrice.value, 10);
    const commissionPct = parseFloat(inputCommission.value);

    // Update labels
    valLots.textContent = `${lots} Lots / Week`;
    valBatchSize.textContent = `${batchSizeQtl} Quintals (${(batchSizeQtl * 0.1).toFixed(1)} MT)`;
    valPrice.textContent = `₹${benchmarkPrice.toLocaleString()} / Quintal`;
    valCommission.textContent = `${commissionPct.toFixed(2)}%`;

    // 1. Volumes
    const weeklyQtl = lots * batchSizeQtl;
    const weeklyMT = (weeklyQtl * 0.1).toFixed(1);
    const monthlyQtl = weeklyQtl * 4.2;

    // 2. Gross Merchandise Value (GMV)
    const weeklyGMV = weeklyQtl * benchmarkPrice;
    const monthlyGMV = Math.round(weeklyGMV * 4.2);

    // 3. FPO Gross Revenues
    const facilitationRev = monthlyGMV * (commissionPct / 100);
    const listingRev = lots * 4.2 * 50; // ₹50/listing
    const logisticsMargin = monthlyGMV * 0.01; // 1.0%
    const totalFpoGross = Math.round(facilitationRev + listingRev + logisticsMargin);

    // 4. Fixed + Variable OPEX
    // Baseline ₹86,000 + 0.25% GMV spoilage contingency
    const opex = Math.round(86000 + (monthlyGMV * 0.0025));
    const netSurplus = Math.round(totalFpoGross - opex);

    // 5. Per Quintal Farmer Economics
    const mandiCommissionDeduction = benchmarkPrice * 0.08;
    const mandiKataChhoot = benchmarkPrice * 0.04;
    const mandiFreight = 185;
    const mandiNetPayout = benchmarkPrice - mandiCommissionDeduction - mandiKataChhoot - mandiFreight;

    // FPO Model: direct premium +6.8% from institutional buyer
    const directContractPrice = benchmarkPrice * 1.068;
    const fpoDeduction = (directContractPrice * (commissionPct / 100)) + 65; // commission + ₹65 local crating
    const fpoNetPayout = directContractPrice - fpoDeduction;

    const deltaPerQtl = fpoNetPayout - mandiNetPayout;
    const deltaPct = ((deltaPerQtl / mandiNetPayout) * 100).toFixed(1);
    const annualCollectiveGain = Math.round(deltaPerQtl * monthlyQtl * 12);

    // Render Outputs
    resWeeklyVol.textContent = `${weeklyMT} MT`;
    resWeeklyGMV.textContent = `₹${weeklyGMV.toLocaleString()}`;
    resMonthlyGMV.textContent = `₹${monthlyGMV.toLocaleString()}`;
    resFpoGross.textContent = `₹${totalFpoGross.toLocaleString()}`;
    resFpoOpex.textContent = `₹${opex.toLocaleString()}`;
    resNetSurplus.textContent = `₹${netSurplus.toLocaleString()}`;

    resMandiPayout.textContent = `₹${Math.round(mandiNetPayout).toLocaleString()} / Qtl`;
    resFpoPayout.textContent = `₹${Math.round(fpoNetPayout).toLocaleString()} / Qtl`;

    resDeltaTag.innerHTML = `🎉 <strong>+₹${deltaPerQtl.toFixed(2)} per Quintal (+${deltaPct}% Net Increase)</strong> • Total Annual Member Gain: <strong>₹${(annualCollectiveGain / 10000000).toFixed(2)} Crores</strong>`;
  }

  [inputLots, inputBatchSize, inputPrice, inputCommission].forEach(el => {
    el.addEventListener("input", recalculate);
  });

  recalculate();
}

// ================= 5. 6-SLIDE PRESENTATION DECK CONTROLLER =================
function initPresentationDeck() {
  let currentSlide = 1;
  const totalSlides = 6;

  const prevBtn = document.getElementById("prevSlideBtn");
  const nextBtn = document.getElementById("nextSlideBtn");
  const currentSlideNum = document.getElementById("currentSlideNum");
  const toggleNotesBtn = document.getElementById("toggleNotesBtn");

  function showSlide(index) {
    if (index < 1 || index > totalSlides) return;
    currentSlide = index;

    document.querySelectorAll(".slide-card").forEach(card => {
      card.classList.remove("active");
    });

    const targetSlide = document.querySelector(`.slide-card[data-slide="${currentSlide}"]`);
    if (targetSlide) targetSlide.classList.add("active");

    if (currentSlideNum) currentSlideNum.textContent = currentSlide;

    if (prevBtn) prevBtn.disabled = currentSlide === 1;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides;
  }

  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

  // Keyboard navigation (ArrowLeft, ArrowRight)
  document.addEventListener("keydown", (e) => {
    // Only handle if deck section is active
    const deckSec = document.getElementById("sec-presentation-deck");
    if (!deckSec || !deckSec.classList.contains("active")) return;

    if (e.key === "ArrowLeft") {
      showSlide(currentSlide - 1);
    } else if (e.key === "ArrowRight") {
      showSlide(currentSlide + 1);
    }
  });

  // Toggle speaker notes
  if (toggleNotesBtn) {
    toggleNotesBtn.addEventListener("click", () => {
      toggleNotesBtn.classList.toggle("active");
      document.querySelectorAll(".speaker-notes").forEach(notes => {
        notes.classList.toggle("open");
      });
    });
  }

  // Presentation Timer (Stopwatch)
  let timerInterval = null;
  let elapsedSeconds = 0;
  let isTimerRunning = false;
  const timerDisplay = document.getElementById("presentationTimer");
  const timerToggleBtn = document.getElementById("timerToggleBtn");
  const timerResetBtn = document.getElementById("timerResetBtn");

  function updateTimerDisplay() {
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    timerDisplay.textContent = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    if (elapsedSeconds >= 900) { // 15 minutes limit
      timerDisplay.style.color = "#ef4444";
    }
  }

  if (timerToggleBtn) {
    timerToggleBtn.addEventListener("click", () => {
      if (!isTimerRunning) {
        isTimerRunning = true;
        timerToggleBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
        timerInterval = setInterval(() => {
          elapsedSeconds++;
          updateTimerDisplay();
        }, 1000);
      } else {
        isTimerRunning = false;
        timerToggleBtn.innerHTML = `<i class="fa-solid fa-play"></i> Resume`;
        clearInterval(timerInterval);
      }
    });
  }

  if (timerResetBtn) {
    timerResetBtn.addEventListener("click", () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      elapsedSeconds = 0;
      updateTimerDisplay();
      if (timerToggleBtn) timerToggleBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
      timerDisplay.style.color = "inherit";
    });
  }

  showSlide(1);
}

// ================= 6. PRINT HANDLER =================
function initPrintButton() {
  const printBtn = document.getElementById("printReportBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      // Make all chapters active for print
      document.querySelectorAll(".report-chapter").forEach(ch => ch.classList.add("active"));
      window.print();
      // Re-activate only the selected one
      const currentCh = document.querySelector(".rep-tab.active")?.dataset.ch || "ch1";
      document.querySelectorAll(".report-chapter").forEach(ch => {
        if (ch.id !== currentCh) ch.classList.remove("active");
      });
    });
  }
}
