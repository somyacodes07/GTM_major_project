/**
 * GTM Research & Presentation Deck Controller
 * Case Study No. 51: Farm Produce Photo Catalogue
 * Features: Fullscreen Keynote Mode, Dark Mode Persistence, Charts & Calculator
 */

let chartInstances = {};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupSectionNav();
  setupSlideDeck();
  setupCharts();
  setupCalculator();
  setupReportChapters();
  setupPrint();
});

// ================= THEME (DARK / LIGHT MODE) =================
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("gtm_theme") || "light";

  setTheme(currentTheme);

  toggleBtn?.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("gtm_theme", nextTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    if (theme === "dark") {
      toggleBtn.innerHTML = `<i class="fa-solid fa-sun text-emerald"></i> <span class="theme-label">Light</span>`;
    } else {
      toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i> <span class="theme-label">Dark</span>`;
    }
  }

  // Update chart axes colors if charts exist
  updateChartsTheme(theme);
}

function updateChartsTheme(theme) {
  const isDark = theme === "dark";
  const gridColor = isDark ? "#1e293b" : "#f1f5f9";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  Object.values(chartInstances).forEach(chart => {
    if (chart.options.scales) {
      if (chart.options.scales.x) {
        chart.options.scales.x.ticks.color = textColor;
        if (chart.options.scales.x.grid) chart.options.scales.x.grid.color = gridColor;
      }
      if (chart.options.scales.y) {
        chart.options.scales.y.ticks.color = textColor;
        if (chart.options.scales.y.grid) chart.options.scales.y.grid.color = gridColor;
      }
    }
    chart.update();
  });
}

// ================= SECTION NAVIGATION =================
function setupSectionNav() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const secId = `sec-${tab.dataset.sec}`;
      document.querySelectorAll(".sec-pane").forEach(p => p.classList.remove("active"));
      const targetPane = document.getElementById(secId);
      if (targetPane) {
        targetPane.classList.add("active");
        window.scrollTo({ top: targetPane.offsetTop - 60, behavior: "smooth" });
      }
    });
  });
}

// ================= 6-SLIDE PRESENTATION DECK CONTROLLER =================
function setupSlideDeck() {
  let cur = 1;
  const total = 6;

  const prevBtn = document.getElementById("prevSlideBtn");
  const nextBtn = document.getElementById("nextSlideBtn");
  const countDisplay = document.getElementById("currentSlideNum");
  const notesBtn = document.getElementById("toggleNotesBtn");
  const chipBtns = document.querySelectorAll(".chip-slide");
  const deckContainer = document.getElementById("presentationDeckContainer");
  const btnFullscreen = document.getElementById("btnFullscreenDeck");
  const fsExitBtn = document.getElementById("fsExitBtn");
  const fsPrevBtn = document.getElementById("fsPrevBtn");
  const fsNextBtn = document.getElementById("fsNextBtn");
  const fsDotsContainer = document.getElementById("fsDotsContainer");

  // Create Fullscreen Dots
  if (fsDotsContainer) {
    fsDotsContainer.innerHTML = Array.from({ length: total }, (_, i) => 
      `<div class="fs-dot ${i === 0 ? 'active' : ''}" data-target="${i + 1}" title="Slide ${i + 1}"></div>`
    ).join("");

    fsDotsContainer.querySelectorAll(".fs-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.dataset.target, 10));
      });
    });
  }

  function goToSlide(n) {
    if (n < 1 || n > total) return;
    cur = n;

    document.querySelectorAll(".slide-view").forEach(s => s.classList.remove("active"));
    document.querySelector(`.slide-view[data-slide="${cur}"]`)?.classList.add("active");

    chipBtns.forEach(c => {
      c.classList.toggle("active", parseInt(c.dataset.sl, 10) === cur);
    });

    if (countDisplay) countDisplay.textContent = cur;
    if (prevBtn) prevBtn.disabled = cur === 1;
    if (nextBtn) nextBtn.disabled = cur === total;

    // Sync fullscreen dots
    document.querySelectorAll(".fs-dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx + 1 === cur);
    });
  }

  prevBtn?.addEventListener("click", () => goToSlide(cur - 1));
  nextBtn?.addEventListener("click", () => goToSlide(cur + 1));
  fsPrevBtn?.addEventListener("click", () => goToSlide(cur - 1));
  fsNextBtn?.addEventListener("click", () => goToSlide(cur + 1));

  chipBtns.forEach(c => {
    c.addEventListener("click", () => {
      goToSlide(parseInt(c.dataset.sl, 10));
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Check if deck is active or fullscreen
    const isFullscreen = deckContainer?.classList.contains("fullscreen-active");
    const isDeckTab = document.getElementById("sec-presentation-deck")?.classList.contains("active");

    if (!isFullscreen && !isDeckTab) return;

    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      goToSlide(cur - 1);
    } else if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      goToSlide(cur + 1);
    } else if (e.key === "f" || e.key === "F") {
      toggleFullscreen();
    } else if (e.key === "Escape" && isFullscreen) {
      exitFullscreen();
    }
  });

  // Fullscreen Logic
  function toggleFullscreen() {
    if (!deckContainer) return;
    if (deckContainer.classList.contains("fullscreen-active")) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  function enterFullscreen() {
    if (!deckContainer) return;
    deckContainer.classList.add("fullscreen-active");
    if (btnFullscreen) {
      btnFullscreen.innerHTML = `<i class="fa-solid fa-compress"></i> Exit (Esc)`;
    }
    if (deckContainer.requestFullscreen) {
      deckContainer.requestFullscreen().catch(() => {});
    }
  }

  function exitFullscreen() {
    if (!deckContainer) return;
    deckContainer.classList.remove("fullscreen-active");
    if (btnFullscreen) {
      btnFullscreen.innerHTML = `<i class="fa-solid fa-expand"></i> Fullscreen`;
    }
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  btnFullscreen?.addEventListener("click", toggleFullscreen);
  fsExitBtn?.addEventListener("click", exitFullscreen);

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && deckContainer?.classList.contains("fullscreen-active")) {
      exitFullscreen();
    }
  });

  // Toggle speaker notes
  notesBtn?.addEventListener("click", () => {
    notesBtn.classList.toggle("active");
    document.querySelectorAll(".speaker-notes-box").forEach(b => b.classList.toggle("open"));
  });

  // Stopwatch Timer
  let timerInterval = null;
  let seconds = 0;
  let running = false;
  const timerDisplay = document.getElementById("presentationTimer");
  const toggleTimerBtn = document.getElementById("timerToggleBtn");
  const resetTimerBtn = document.getElementById("timerResetBtn");

  function updateTimer() {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    timerDisplay.textContent = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  }

  toggleTimerBtn?.addEventListener("click", () => {
    if (!running) {
      running = true;
      toggleTimerBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
      timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
      }, 1000);
    } else {
      running = false;
      toggleTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
      clearInterval(timerInterval);
    }
  });

  resetTimerBtn?.addEventListener("click", () => {
    clearInterval(timerInterval);
    running = false;
    seconds = 0;
    updateTimer();
    if (toggleTimerBtn) toggleTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
  });

  goToSlide(1);
}

// ================= CHARTS =================
function setupCharts() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const gridColor = isDark ? "#1e293b" : "#f1f5f9";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  // Chart 1: Realization
  const c1 = document.getElementById("farmerRealizationChart");
  if (c1) {
    chartInstances.realization = new Chart(c1, {
      type: "bar",
      data: {
        labels: ["Mandi Gross", "Mandi Cuts (-20.4%)", "MANDI NET", "FPO Contract", "FPO Fee (-6.3%)", "FPO NET"],
        datasets: [{
          data: [2200, -449, 1751, 2350, -147.25, 2202.75],
          backgroundColor: ["#94a3b8", "#f87171", "#ef4444", "#34d399", "#fbbf24", "#059669"],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: gridColor }, ticks: { color: textColor, callback: v => `₹${v}` } },
          x: { grid: { display: false }, ticks: { color: textColor } }
        }
      }
    });
  }

  // Chart 2: Buyer Mix
  const c2 = document.getElementById("buyerSegmentChart");
  if (c2) {
    chartInstances.buyer = new Chart(c2, {
      type: "doughnut",
      data: {
        labels: ["Modern Retail / Q-Com (45%)", "HoReCa (35%)", "Agro-Processors (20%)"],
        datasets: [{
          data: [45, 35, 20],
          backgroundColor: ["#059669", "#2563eb", "#d97706"],
          borderWidth: 2,
          borderColor: isDark ? "#0f172a" : "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { color: textColor, font: { size: 11 } } } },
        cutout: "65%"
      }
    });
  }

  // Chart 3: Scaling
  const c3 = document.getElementById("scalingTrajectoryChart");
  if (c3) {
    chartInstances.scaling = new Chart(c3, {
      type: "line",
      data: {
        labels: ["D1", "D15", "D30 (M1)", "D45", "D60 (M2)", "D75", "D90 (M3)"],
        datasets: [
          {
            type: "bar",
            label: "Weekly Volume (MT)",
            data: [0, 8, 18, 32, 50, 62, 72],
            backgroundColor: "rgba(16, 185, 129, 0.4)",
            borderColor: "#10b981",
            borderWidth: 1,
            borderRadius: 4,
            yAxisID: "y"
          },
          {
            type: "line",
            label: "Active Farmers",
            data: [15, 30, 45, 80, 110, 150, 180],
            borderColor: "#2563eb",
            tension: 0.3,
            yAxisID: "y1"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { color: textColor } } },
        scales: {
          y: { type: "linear", position: "left", grid: { color: gridColor }, ticks: { color: textColor } },
          y1: { type: "linear", position: "right", grid: { drawOnChartArea: false }, ticks: { color: textColor } }
        }
      }
    });
  }

  // Chart 4: Quality Grading
  const c4 = document.getElementById("gradingDistributionChart");
  if (c4) {
    chartInstances.grading = new Chart(c4, {
      type: "pie",
      data: {
        labels: ["Grade A (Supermarket - 60%)", "Grade B (HoReCa - 30%)", "Grade C (Processing - 10%)"],
        datasets: [{
          data: [60, 30, 10],
          backgroundColor: ["#10b981", "#f59e0b", "#6366f1"],
          borderWidth: 2,
          borderColor: isDark ? "#0f172a" : "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { color: textColor, font: { size: 11 } } } }
      }
    });
  }
}

// ================= FINANCIAL CALCULATOR =================
function setupCalculator() {
  const iLots = document.getElementById("inputLots");
  const iBatch = document.getElementById("inputBatchSize");
  const iPrice = document.getElementById("inputPrice");
  const iComm = document.getElementById("inputCommission");

  function calc() {
    const lots = parseInt(iLots.value, 10);
    const batch = parseInt(iBatch.value, 10);
    const price = parseInt(iPrice.value, 10);
    const comm = parseFloat(iComm.value);

    document.getElementById("valLots").textContent = `${lots} Lots / Wk`;
    document.getElementById("valBatchSize").textContent = `${batch} Quintals`;
    document.getElementById("valPrice").textContent = `₹${price.toLocaleString()} / Qtl`;
    document.getElementById("valCommission").textContent = `${comm.toFixed(1)}%`;

    const weeklyQtl = lots * batch;
    const weeklyMT = (weeklyQtl * 0.1).toFixed(1);
    const weeklyGMV = weeklyQtl * price;
    const monthlyGMV = Math.round(weeklyGMV * 4.2);

    const fpoRev = Math.round((monthlyGMV * (comm / 100)) + (lots * 4.2 * 50) + (monthlyGMV * 0.01));
    const opex = Math.round(86000 + (monthlyGMV * 0.0025));
    const surplus = fpoRev - opex;

    const mandiPayout = Math.round(price * 0.796);
    const fpoPayout = Math.round((price * 1.068) - ((price * 1.068 * (comm / 100)) + 65));
    const delta = fpoPayout - mandiPayout;
    const deltaPct = ((delta / mandiPayout) * 100).toFixed(1);
    const annualCollectiveGain = (delta * weeklyQtl * 4.2 * 12 / 10000000).toFixed(2);

    document.getElementById("resWeeklyVol").textContent = `${weeklyMT} MT`;
    document.getElementById("resMonthlyGMV").textContent = `₹${monthlyGMV.toLocaleString()}`;
    document.getElementById("resFpoGross").textContent = `₹${fpoRev.toLocaleString()}`;
    document.getElementById("resNetSurplus").textContent = `₹${surplus.toLocaleString()}`;
    document.getElementById("resMandiPayout").textContent = `₹${mandiPayout.toLocaleString()} / Qtl`;
    document.getElementById("resFpoPayout").textContent = `₹${fpoPayout.toLocaleString()} / Qtl`;

    document.getElementById("resDeltaTag").innerHTML = `🎉 <strong>+₹${delta} / Qtl (+${deltaPct}% Net Increase)</strong> • Annual Member Uplift: <strong>₹${annualCollectiveGain} Crores</strong>`;
  }

  [iLots, iBatch, iPrice, iComm].forEach(el => el?.addEventListener("input", calc));
  calc();
}

// ================= REPORT CHAPTERS =================
function setupReportChapters() {
  const chBtns = document.querySelectorAll(".ch-btn");
  chBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      chBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const id = btn.dataset.ch;
      document.querySelectorAll(".ch-content").forEach(c => c.classList.remove("active"));
      document.getElementById(id)?.classList.add("active");
    });
  });
}

function setupPrint() {
  document.getElementById("printReportBtn")?.addEventListener("click", () => {
    document.querySelectorAll(".ch-content").forEach(c => c.classList.add("active"));
    window.print();
    const curCh = document.querySelector(".ch-btn.active")?.dataset.ch || "ch1";
    document.querySelectorAll(".ch-content").forEach(c => {
      if (c.id !== curCh) c.classList.remove("active");
    });
  });
}
