/**
 * KISAN-SEVA FPO • Clean Prototype Engine
 * Case Study No. 51: Farm Produce Photo Catalogue
 */

const PRODUCE_DATABASE = [
  {
    id: "LOT-TOM-01",
    crop: "Tomato (Abhinav)",
    category: "Vegetable",
    farmer: "Ramesh Patil",
    village: "Shirasgaon Hub",
    quantity: 22,
    grade: "Grade A",
    price: 2350,
    harvestTime: "Next 24h",
    harvestWindow: "24h",
    harvestDate: "Tomorrow 6:00 AM",
    brix: "4.8° Brix",
    diameter: "55-65 mm",
    defectRate: "0.8% (<2% AGMARK)",
    crateImg: "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-ONN-02",
    crop: "Red Onion (Nashik)",
    category: "Bulb & Root",
    farmer: "Sunita Bai Deshmukh",
    village: "Pimpalgaon Hub",
    quantity: 35,
    grade: "Grade A",
    price: 1980,
    harvestTime: "Today",
    harvestWindow: "today",
    harvestDate: "Today 10:00 AM",
    brix: "11.2° Brix",
    diameter: "50-60 mm",
    defectRate: "1.1%",
    crateImg: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-CAP-03",
    crop: "Green Capsicum",
    category: "Vegetable",
    farmer: "Balasaheb Shinde",
    village: "Dindori Hub",
    quantity: 16,
    grade: "Grade A",
    price: 3400,
    harvestTime: "48–72h",
    harvestWindow: "48h",
    harvestDate: "In 2 Days",
    brix: "5.1° Brix",
    diameter: "70-85 mm blocky",
    defectRate: "0.5%",
    crateImg: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-CHL-04",
    crop: "Green Chilli (G-4)",
    category: "Commercial",
    farmer: "Kisanrao More",
    village: "Ozar Hub",
    quantity: 12,
    grade: "Grade B",
    price: 4200,
    harvestTime: "Next 24h",
    harvestWindow: "24h",
    harvestDate: "Tomorrow 7:30 AM",
    brix: "65k SHU",
    diameter: "8-11 cm slender",
    defectRate: "3.2%",
    crateImg: "https://images.unsplash.com/photo-1526346698789-224a79ed7b83?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-POM-05",
    crop: "Pomegranate (Bhagwa)",
    category: "Fruit",
    farmer: "Anand Thorat",
    village: "Chandwad Hub",
    quantity: 28,
    grade: "Grade A",
    price: 7800,
    harvestTime: "48–72h",
    harvestWindow: "48h",
    harvestDate: "In 3 Days",
    brix: "16.4° Brix",
    diameter: "280g / fruit",
    defectRate: "1.4%",
    crateImg: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-POT-06",
    crop: "Potato (Kufri Pukhraj)",
    category: "Bulb & Root",
    farmer: "Pooja Gavit",
    village: "Niphad Hub",
    quantity: 45,
    grade: "Grade B",
    price: 1450,
    harvestTime: "Today",
    harvestWindow: "today",
    harvestDate: "Today 2:00 PM",
    brix: "18.5% Dry Matter",
    diameter: "45-65 mm oval",
    defectRate: "4.0%",
    crateImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
  }
];

// Generate additional 34 lots to reach full 40 weekly listings
const CROPS_POOL = [
  { name: "Tomato (Abhinav)", cat: "Vegetable", p: 2300, g: "Grade A", img: "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=600&q=80" },
  { name: "Red Onion (Nashik)", cat: "Bulb & Root", p: 1950, g: "Grade A", img: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=600&q=80" },
  { name: "Green Capsicum", cat: "Vegetable", p: 3350, g: "Grade A", img: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=600&q=80" },
  { name: "Green Chilli (G-4)", cat: "Commercial", p: 4100, g: "Grade B", img: "https://images.unsplash.com/photo-1526346698789-224a79ed7b83?auto=format&fit=crop&w=600&q=80" },
  { name: "Pomegranate (Bhagwa)", cat: "Fruit", p: 7600, g: "Grade A", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80" },
  { name: "Potato (Kufri Pukhraj)", cat: "Bulb & Root", p: 1400, g: "Grade B", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80" }
];

const FARMERS_POOL = ["Pandurang Kadam", "Sanjay Wagh", "Santosh Dhikale", "Manoj Pingle", "Yogesh Aher", "Shivaji Sonawane", "Gopal Gunjal"];
const VILLAGES_POOL = ["Shirasgaon Hub", "Pimpalgaon Hub", "Dindori Hub", "Chandwad Hub", "Ozar Hub"];
const HARVEST_MAP = [
  { t: "Today", w: "today", d: "Today 3:00 PM" },
  { t: "Next 24h", w: "24h", d: "Tomorrow 6:30 AM" },
  { t: "48–72h", w: "48h", d: "In 2 Days" }
];

for (let i = 7; i <= 40; i++) {
  const cropMeta = CROPS_POOL[(i - 7) % CROPS_POOL.length];
  const farmerName = FARMERS_POOL[(i - 7) % FARMERS_POOL.length];
  const village = VILLAGES_POOL[(i - 7) % VILLAGES_POOL.length];
  const hWin = HARVEST_MAP[(i - 7) % HARVEST_MAP.length];
  const lotCode = `LOT-${cropMeta.cat.substring(0,3).toUpperCase()}-${i < 10 ? '0' + i : i}`;

  PRODUCE_DATABASE.push({
    id: lotCode,
    crop: cropMeta.name,
    category: cropMeta.cat,
    farmer: farmerName,
    village: village,
    quantity: Math.floor(Math.random() * 16) + 12,
    grade: i % 6 === 0 ? "Grade C" : (i % 3 === 0 ? "Grade B" : "Grade A"),
    price: cropMeta.p + (Math.floor(Math.random() * 5) - 2) * 50,
    harvestTime: hWin.t,
    harvestWindow: hWin.w,
    harvestDate: hWin.d,
    brix: "Calibrated",
    diameter: "Uniform Band",
    defectRate: i % 6 === 0 ? "6.8%" : (i % 3 === 0 ? "3.0%" : "0.9%"),
    crateImg: cropMeta.img,
    crossSectionImg: cropMeta.img
  });
}

// Pending Lots for QC
let PENDING_SUBMISSIONS = [
  {
    id: "PENDING-041",
    farmer: "Kisanrao More",
    village: "Ozar Hub",
    crop: "Green Capsicum",
    quantity: 18,
    gradeClaim: "Grade A",
    priceFloor: 3300,
    harvestDate: "In 48h",
    photos: [
      "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "PENDING-042",
    farmer: "Sunita Bai Deshmukh",
    village: "Pimpalgaon Hub",
    crop: "Red Onion (Nashik)",
    quantity: 25,
    gradeClaim: "Grade A",
    priceFloor: 2000,
    harvestDate: "Tomorrow",
    photos: [
      "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "PENDING-043",
    farmer: "Balasaheb Shinde",
    village: "Dindori Hub",
    crop: "Tomato (Abhinav)",
    quantity: 20,
    gradeClaim: "Grade B",
    priceFloor: 1900,
    harvestDate: "In 3 Days",
    photos: [
      "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

// Orders Ledger
let ORDERS_LEDGER = [
  {
    orderId: "PO-8821",
    lotId: "LOT-TOM-01",
    buyer: "FreshMart Hypermarkets",
    crop: "Tomato",
    grade: "Grade A",
    qty: 22,
    price: 2350,
    total: 51700,
    status: "Confirmed",
    code: "status-locked",
    settlement: "Escrow Held"
  },
  {
    orderId: "PO-8822",
    lotId: "LOT-ONN-02",
    buyer: "Zepto Dark Store Hub #4",
    crop: "Red Onion",
    grade: "Grade A",
    qty: 35,
    price: 1980,
    total: 69300,
    status: "In Transit",
    code: "status-transit",
    settlement: "Escrow Funded"
  },
  {
    orderId: "PO-8823",
    lotId: "LOT-POM-05",
    buyer: "Nature's Basket DC",
    crop: "Pomegranate",
    grade: "Grade A",
    qty: 28,
    price: 7800,
    total: 218400,
    status: "Delivered",
    code: "status-delivered",
    settlement: "UPI Credited (T+24h)"
  }
];

let activeSelectedLot = null;

document.addEventListener("DOMContentLoaded", () => {
  renderProduceGrid(PRODUCE_DATABASE);
  renderPendingLots();
  renderOrdersTable();
  setupNav();
  setupFilters();
  setupFarmerForm();
  setupModals();
  setupFlyout();
});

// Segment Nav
function setupNav() {
  const btns = document.querySelectorAll(".seg-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const tabId = btn.dataset.tab;
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add("active");
    });
  });
}

// Filter Logic
function setupFilters() {
  const searchInput = document.getElementById("catalogueSearch");
  const catFilter = document.getElementById("categoryFilter");
  const gradeFilter = document.getElementById("gradeFilter");
  const harvestFilter = document.getElementById("harvestFilter");
  const resetBtn = document.getElementById("resetFiltersBtn");

  function filter() {
    const q = searchInput.value.toLowerCase().trim();
    const c = catFilter.value;
    const g = gradeFilter.value;
    const h = harvestFilter.value;

    const filtered = PRODUCE_DATABASE.filter(item => {
      const matchQ = item.crop.toLowerCase().includes(q) ||
                     item.farmer.toLowerCase().includes(q) ||
                     item.village.toLowerCase().includes(q) ||
                     item.id.toLowerCase().includes(q);
      const matchC = c === "all" || item.category === c;
      const matchG = g === "all" || item.grade === g;
      const matchH = h === "all" || item.harvestWindow === h;
      return matchQ && matchC && matchG && matchH;
    });

    renderProduceGrid(filtered);
  }

  searchInput.addEventListener("input", filter);
  catFilter.addEventListener("change", filter);
  gradeFilter.addEventListener("change", filter);
  harvestFilter.addEventListener("change", filter);

  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    catFilter.value = "all";
    gradeFilter.value = "all";
    harvestFilter.value = "all";
    renderProduceGrid(PRODUCE_DATABASE);
  });
}

// Render Clean Produce Cards
function renderProduceGrid(items) {
  const grid = document.getElementById("produceGrid");
  const countBadge = document.getElementById("catalogCountBadge");
  const activeCount = document.getElementById("statActiveListings");

  if (countBadge) countBadge.textContent = items.length;
  if (activeCount) activeCount.innerHTML = `<strong>${items.length} Lots</strong> Available`;

  if (!items || items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: white; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <p style="color: #64748b; font-size: 0.9rem;">No produce lots match your filter criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(lot => {
    const gradeClass = lot.grade === 'Grade A' ? 'grade-a' : (lot.grade === 'Grade B' ? 'grade-b' : 'grade-c');
    return `
      <div class="lot-card" data-lot-id="${lot.id}">
        <div class="lot-thumb-wrap">
          <img src="${lot.crateImg}" alt="${lot.crop}" class="lot-thumb" loading="lazy">
          <span class="pill-grade ${gradeClass}">${lot.grade}</span>
          <span class="pill-time"><i class="fa-regular fa-clock"></i> ${lot.harvestTime}</span>
          <span class="pill-code">${lot.id}</span>
        </div>

        <div class="lot-body">
          <h4 class="lot-title">${lot.crop}</h4>
          <p class="lot-farmer">${lot.farmer} • ${lot.village}</p>

          <div class="clean-specs-row">
            <div>
              <span>Volume</span>
              <strong>${lot.quantity} Qtl (${lot.quantity * 100} kg)</strong>
            </div>
            <div>
              <span>Harvest</span>
              <strong>${lot.harvestDate}</strong>
            </div>
          </div>

          <div class="lot-pricing-strip">
            <div>
              <span class="price-sub">Farmgate Rate</span>
              <div class="price-fig">₹${lot.price.toLocaleString()} <span style="font-size:0.75rem; font-weight:500; color:#64748b;">/ Qtl</span></div>
            </div>
            <div style="text-align: right;">
              <span class="price-sub">Lot Est.</span>
              <strong style="color: #059669; font-size: 0.95rem;">₹${(lot.price * lot.quantity).toLocaleString()}</strong>
            </div>
          </div>

          <div class="lot-actions">
            <button class="btn-lot-book" onclick="openBookingModal('${lot.id}')">
              <i class="fa-solid fa-lock"></i> Pre-Book
            </button>
            <button class="btn-lot-spec" onclick="openSpecModal('${lot.id}')">
              <i class="fa-solid fa-file-lines"></i> Specs
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Modals
window.openBookingModal = function(lotId) {
  const lot = PRODUCE_DATABASE.find(item => item.id === lotId);
  if (!lot) return;

  activeSelectedLot = lot;
  document.getElementById("modalProduceTitle").textContent = `Pre-Book: ${lot.crop} (${lot.id})`;
  
  const preview = document.getElementById("modalBatchPreview");
  preview.innerHTML = `
    <img src="${lot.crateImg}" class="mini-img" alt="${lot.crop}">
    <div>
      <h5 style="font-size:0.85rem; color:#0f172a;">${lot.crop} <span class="pill-grade ${lot.grade === 'Grade A' ? 'grade-a' : 'grade-b'}" style="font-size:0.6rem; padding: 1px 5px;">${lot.grade}</span></h5>
      <p style="font-size:0.72rem; color:#64748b;">Farmer: ${lot.farmer} • Harvest: ${lot.harvestDate}</p>
    </div>
  `;

  const qtyInput = document.getElementById("orderQtyInput");
  qtyInput.value = lot.quantity;
  qtyInput.max = lot.quantity;

  calcModalPrice();
  document.getElementById("bookingModal").classList.add("open");
};

function calcModalPrice() {
  if (!activeSelectedLot) return;
  const qtyInput = document.getElementById("orderQtyInput");
  const qty = parseFloat(qtyInput.value) || 0;
  const baseRate = activeSelectedLot.price;
  const fpoFee = Math.round(baseRate * 0.035 + 25);
  const total = (baseRate + fpoFee) * qty;

  document.getElementById("calcBasePrice").textContent = `₹${baseRate.toLocaleString()} / Qtl`;
  document.getElementById("calcFpoFee").textContent = `₹${fpoFee} / Qtl`;
  document.getElementById("calcTotalPrice").textContent = `₹${total.toLocaleString()}`;
}

window.openSpecModal = function(lotId) {
  const lot = PRODUCE_DATABASE.find(item => item.id === lotId);
  if (!lot) return;

  const body = document.getElementById("specModalBody");
  document.getElementById("specTitle").textContent = `${lot.crop} • Spec Sheet (${lot.id})`;

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div>
        <img src="${lot.crossSectionImg}" alt="Produce" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 0.5rem;">
        <span style="font-size: 0.72rem; color: #64748b;"><i class="fa-solid fa-camera"></i> Calibrated scale card verified at field gate.</span>
      </div>
      <div>
        <h4 style="font-size: 1rem; color: #0f172a; margin-bottom: 0.4rem;">${lot.crop}</h4>
        <span class="pill-grade ${lot.grade === 'Grade A' ? 'grade-a' : 'grade-b'}">${lot.grade} AGMARK Standard</span>
        <div style="margin: 0.75rem 0; font-size: 0.78rem; display: flex; flex-direction: column; gap: 0.35rem;">
          <div><span style="color:#64748b;">Farmer:</span> <strong>${lot.farmer} (${lot.village})</strong></div>
          <div><span style="color:#64748b;">Available Quantity:</span> <strong>${lot.quantity} Quintals</strong></div>
          <div><span style="color:#64748b;">Harvest Window:</span> <strong>${lot.harvestDate}</strong></div>
          <div><span style="color:#64748b;">Quality / Sugar:</span> <strong>${lot.brix}</strong></div>
          <div><span style="color:#64748b;">Tolerance / Defect:</span> <strong>${lot.defectRate}</strong></div>
          <div><span style="color:#64748b;">Farmgate Floor Rate:</span> <strong>₹${lot.price.toLocaleString()} / Qtl</strong></div>
        </div>
        <button class="btn-lot-book" style="width: 100%;" onclick="closeSpecAndBook('${lot.id}')">
          <i class="fa-solid fa-lock"></i> Proceed to Pre-Book
        </button>
      </div>
    </div>
  `;

  document.getElementById("specModal").classList.add("open");
};

window.closeSpecAndBook = function(lotId) {
  document.getElementById("specModal").classList.remove("open");
  openBookingModal(lotId);
};

// Pending Lots Render
function renderPendingLots() {
  const container = document.getElementById("pendingLotsContainer");
  const countBadge = document.getElementById("pendingCountBadge");
  const countHeader = document.getElementById("pendingReviewCount");

  if (countBadge) countBadge.textContent = PENDING_SUBMISSIONS.length;
  if (countHeader) countHeader.textContent = PENDING_SUBMISSIONS.length;

  if (PENDING_SUBMISSIONS.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; background: white; border-radius: 8px; border: 1px dashed #cbd5e1;">
        <p style="color: #64748b; font-size: 0.85rem;">All pending submissions reviewed and published.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = PENDING_SUBMISSIONS.map(sub => `
    <div class="clean-pending-card" id="sub-${sub.id}">
      <div class="pending-strip">
        <img src="${sub.photos[0]}" alt="Photo 1">
        <img src="${sub.photos[1]}" alt="Photo 2">
      </div>
      <div class="pending-body">
        <h5>${sub.crop} <span class="ptag">${sub.id}</span></h5>
        <p>${sub.farmer} • ${sub.village}</p>
        <div class="pending-tags">
          <span class="ptag">${sub.quantity} Quintals</span>
          <span class="ptag">${sub.harvestDate}</span>
          <span class="ptag">₹${sub.priceFloor}/Qtl Floor</span>
          <span class="ptag" style="color:#059669;"><i class="fa-solid fa-check"></i> Scale Verified</span>
        </div>
      </div>
      <div class="pending-actions-col">
        <button class="btn-appr" onclick="approveLot('${sub.id}')">Approve & Publish</button>
        <button class="btn-rej" onclick="rejectLot('${sub.id}')">Request Re-Shoot</button>
      </div>
    </div>
  `).join("");
}

window.approveLot = function(subId) {
  const idx = PENDING_SUBMISSIONS.findIndex(s => s.id === subId);
  if (idx === -1) return;
  const sub = PENDING_SUBMISSIONS[idx];

  PRODUCE_DATABASE.unshift({
    id: `LOT-${sub.crop.substring(0,3).toUpperCase()}-${PRODUCE_DATABASE.length + 1}`,
    crop: sub.crop,
    category: "Vegetable",
    farmer: sub.farmer,
    village: sub.village,
    quantity: sub.quantity,
    grade: sub.gradeClaim,
    price: sub.priceFloor,
    harvestTime: sub.harvestDate,
    harvestWindow: "48h",
    harvestDate: sub.harvestDate,
    brix: "Audited",
    diameter: "AGMARK Standard",
    defectRate: "0.9%",
    crateImg: sub.photos[0],
    crossSectionImg: sub.photos[1]
  });

  PENDING_SUBMISSIONS.splice(idx, 1);
  renderPendingLots();
  renderProduceGrid(PRODUCE_DATABASE);
  showToast(`✅ ${sub.crop} approved and published to live catalogue.`);
};

window.rejectLot = function(subId) {
  const idx = PENDING_SUBMISSIONS.findIndex(s => s.id === subId);
  if (idx === -1) return;
  PENDING_SUBMISSIONS.splice(idx, 1);
  renderPendingLots();
  showToast(`⚠️ Re-shoot requested for ${subId}.`);
};

// Orders Table
function renderOrdersTable() {
  const tbody = document.getElementById("ordersTableBody");
  if (!tbody) return;

  tbody.innerHTML = ORDERS_LEDGER.map(o => `
    <tr>
      <td><strong>${o.orderId}</strong><div style="font-size:0.68rem; color:#94a3b8;">${o.lotId}</div></td>
      <td><strong>${o.buyer}</strong></td>
      <td>${o.crop} <span class="pill-grade ${o.grade === 'Grade A' ? 'grade-a' : 'grade-b'}" style="font-size:0.58rem; padding: 1px 4px;">${o.grade}</span></td>
      <td>${o.qty} Qtl</td>
      <td>₹${o.price.toLocaleString()}</td>
      <td><strong>₹${o.total.toLocaleString()}</strong></td>
      <td><span class="status-chip ${o.code}">${o.status}</span></td>
      <td style="color:#059669; font-weight:600; font-size:0.75rem;">${o.settlement}</td>
      <td>
        <button style="background:white; border:1px solid #cbd5e1; font-size:0.7rem; padding:2px 6px; border-radius:4px; cursor:pointer;" onclick="confirmGRN('${o.orderId}')">
          Sign GRN
        </button>
      </td>
    </tr>
  `).join("");
}

window.confirmGRN = function(orderId) {
  const order = ORDERS_LEDGER.find(o => o.orderId === orderId);
  if (!order) return;
  order.status = "Delivered";
  order.code = "status-delivered";
  order.settlement = "UPI Credited (T+24h)";
  renderOrdersTable();
  showToast(`🎉 GRN signed for ${orderId}. Farmer account credited.`);
};

// Setup Farmer Submission Form
function setupFarmerForm() {
  const form = document.getElementById("farmerSubmitForm");
  const quickBtn = document.getElementById("loadSamplePhotosBtn");
  const qtyInput = document.getElementById("quantityInput");

  if (quickBtn) {
    quickBtn.addEventListener("click", () => {
      document.getElementById("farmerSelect").value = "Sunita Bai Deshmukh (Member #042 - Pimpalgaon)";
      document.getElementById("cropSelect").value = "Tomato (Abhinav Hybrid)";
      document.getElementById("targetGradeSelect").value = "Grade A";
      qtyInput.value = 24;

      const t = new Date();
      t.setDate(t.getDate() + 2);
      document.getElementById("harvestDateInput").value = t.toISOString().split("T")[0];
      document.getElementById("expectedPriceInput").value = 2400;

      document.getElementById("preview1").classList.add("has-image");
      document.getElementById("preview1").innerHTML = `<img src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80">`;
      document.getElementById("preview2").classList.add("has-image");
      document.getElementById("preview2").innerHTML = `<img src="https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=400&q=80">`;
      document.getElementById("preview3").classList.add("has-image");
      document.getElementById("preview3").innerHTML = `<img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80">`;

      document.getElementById("chkScale").checked = true;
      document.getElementById("chkMoisture").checked = true;
      document.getElementById("chkAcreage").checked = true;

      showToast("📸 Calibrated sample field photos & standard metadata loaded.");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fVal = document.getElementById("farmerSelect").value;
      const cVal = document.getElementById("cropSelect").value;
      const qVal = parseFloat(qtyInput.value);
      const hDate = document.getElementById("harvestDateInput").value;
      const gVal = document.getElementById("targetGradeSelect").value;
      const pVal = parseFloat(document.getElementById("expectedPriceInput").value);

      PENDING_SUBMISSIONS.unshift({
        id: `PENDING-0${40 + PENDING_SUBMISSIONS.length + 1}`,
        farmer: fVal.split("(")[0].trim(),
        village: "Pimpalgaon Hub",
        crop: cVal,
        quantity: qVal,
        gradeClaim: gVal,
        priceFloor: pVal,
        harvestDate: `On ${hDate}`,
        photos: [
          "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80"
        ]
      });

      renderPendingLots();
      form.reset();
      showToast("🚀 Submitted! Switching to Quality Desk...");
      setTimeout(() => document.querySelector('[data-tab="admin-qc"]').click(), 1000);
    });
  }
}

// Modals Handler
function setupModals() {
  const bModal = document.getElementById("bookingModal");
  const sModal = document.getElementById("specModal");
  const wModal = document.getElementById("whatsappModal");
  const qtyInput = document.getElementById("orderQtyInput");

  document.getElementById("closeBookingModal")?.addEventListener("click", () => bModal.classList.remove("open"));
  document.getElementById("closeSpecModal")?.addEventListener("click", () => sModal.classList.remove("open"));
  document.getElementById("closeWhatsappModal")?.addEventListener("click", () => wModal.classList.remove("open"));

  qtyInput?.addEventListener("input", calcModalPrice);

  // Pre-Booking submit
  document.getElementById("preBookingForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeSelectedLot) return;
    const buyer = document.getElementById("buyerOrgInput").value;
    const qty = parseFloat(qtyInput.value);
    const price = activeSelectedLot.price;
    const total = Math.round((price * 1.035 + 25) * qty);

    ORDERS_LEDGER.unshift({
      orderId: `PO-${Math.floor(1000 + Math.random() * 9000)}`,
      lotId: activeSelectedLot.id,
      buyer: buyer,
      crop: activeSelectedLot.crop,
      grade: activeSelectedLot.grade,
      qty: qty,
      price: price,
      total: total,
      status: "Confirmed",
      code: "status-locked",
      settlement: "Escrow Held"
    });

    renderOrdersTable();
    bModal.classList.remove("open");
    showToast(`🔒 Advance Purchase Order locked for ${buyer}!`);
    setTimeout(() => document.querySelector('[data-tab="orders-escrow"]').click(), 900);
  });

  // WhatsApp RFQ
  document.getElementById("btnSendWhatsappRfq")?.addEventListener("click", () => {
    if (!activeSelectedLot) return;
    const buyer = document.getElementById("buyerOrgInput").value || "B2B Procurement";
    const qty = qtyInput.value || activeSelectedLot.quantity;
    const hub = document.getElementById("deliveryHubSelect").value;

    const msg = `*KISAN-SEVA FPO • B2B HARVEST RFQ* 🚜\n\n` +
                `*Buyer:* ${buyer}\n` +
                `*Lot ID:* ${activeSelectedLot.id}\n` +
                `*Crop:* ${activeSelectedLot.crop} (${activeSelectedLot.grade})\n` +
                `*Volume:* ${qty} Quintals (${qty * 100} kg)\n` +
                `*Harvest:* ${activeSelectedLot.harvestDate}\n` +
                `*Rate:* ₹${activeSelectedLot.price} / Quintal\n` +
                `*Hub:* ${hub}\n` +
                `*Status:* 100% Calibrated Scale Checked`;

    document.getElementById("whatsappMessageContent").textContent = msg;
    wModal.classList.add("open");
  });

  document.getElementById("copyWhatsappBtn")?.addEventListener("click", () => {
    const text = document.getElementById("whatsappMessageContent").textContent;
    navigator.clipboard.writeText(text).then(() => showToast("📋 RFQ copied to clipboard!"));
  });
}

// Flyout Cues
function setupFlyout() {
  const btn = document.getElementById("toggleDemoGuide");
  const flyout = document.getElementById("presenterDrawer");
  const close = document.getElementById("closePresenterDrawer");

  btn?.addEventListener("click", () => flyout.classList.toggle("open"));
  close?.addEventListener("click", () => flyout.classList.remove("open"));

  document.querySelectorAll(".cue-card").forEach(c => {
    c.addEventListener("click", () => {
      const target = c.dataset.target;
      document.querySelector(`[data-tab="${target}"]`)?.click();
    });
  });
}

// Toast
function showToast(msg) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const t = document.createElement("div");
  t.className = "toast-msg";
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
