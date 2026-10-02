/**
 * KISAN-SEVA FPO • Farm Produce Photo Catalogue Prototype Engine
 * Case Study No. 51: AgriBusiness - Digital Marketing
 * Handles 40 weekly catalogue lots, farmer submission, quality audit, and B2B bookings.
 */

// Initial Dataset: 40 Active Catalogue Lots (Representative of 180 Farmers)
const PRODUCE_DATABASE = [
  {
    id: "LOT-TOM-01",
    crop: "Tomato (Abhinav Hybrid)",
    category: "Vegetable",
    farmer: "Ramesh Patil",
    village: "Shirasgaon Hub",
    memberId: "#014",
    quantity: 22, // Quintals
    grade: "Grade A",
    price: 2350,
    harvestTime: "Harvesting in 24 Hours",
    harvestWindow: "24h",
    harvestDate: "Tomorrow 6:00 AM",
    brix: "4.8° Brix",
    diameter: "55-65 mm",
    defectRate: "0.8% (Well within <2% AGMARK)",
    canopyImg: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-ONN-02",
    crop: "Red Onion (Nashik Special)",
    category: "Bulb & Root",
    farmer: "Sunita Bai Deshmukh",
    village: "Pimpalgaon Hub",
    memberId: "#042",
    quantity: 35,
    grade: "Grade A",
    price: 1980,
    harvestTime: "Harvesting Today",
    harvestWindow: "today",
    harvestDate: "Today 10:00 AM",
    brix: "11.2° Brix",
    diameter: "50-60 mm",
    defectRate: "1.1%",
    canopyImg: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-CAP-03",
    crop: "Green Capsicum (Indam 98)",
    category: "Vegetable",
    farmer: "Balasaheb Shinde",
    village: "Dindori Hub",
    memberId: "#078",
    quantity: 16,
    grade: "Grade A",
    price: 3400,
    harvestTime: "Harvesting in 48-72h",
    harvestWindow: "48h",
    harvestDate: "In 2 Days",
    brix: "5.1° Brix",
    diameter: "70-85 mm blocky",
    defectRate: "0.5%",
    canopyImg: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-CHL-04",
    crop: "Green Chilli (G-4 Hot)",
    category: "Commercial",
    farmer: "Kisanrao More",
    village: "Ozar Hub",
    memberId: "#103",
    quantity: 12,
    grade: "Grade B",
    price: 4200,
    harvestTime: "Harvesting in 24 Hours",
    harvestWindow: "24h",
    harvestDate: "Tomorrow 7:30 AM",
    brix: "Standard pungency 65k SHU",
    diameter: "8-11 cm slender",
    defectRate: "3.2% (Grade B culinary)",
    canopyImg: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1526346698789-224a79ed7b83?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-POM-05",
    crop: "Pomegranate (Bhagwa Red)",
    category: "Fruit",
    farmer: "Anand Thorat",
    village: "Chandwad Hub",
    memberId: "#144",
    quantity: 28,
    grade: "Grade A",
    price: 7800,
    harvestTime: "Harvesting in 48-72h",
    harvestWindow: "48h",
    harvestDate: "In 3 Days",
    brix: "16.4° Brix (Deep ruby)",
    diameter: "250-320 grams/fruit",
    defectRate: "1.4%",
    canopyImg: "https://images.unsplash.com/photo-1541344999736-83eca872f240?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-POT-06",
    crop: "Potato (Kufri Pukhraj)",
    category: "Bulb & Root",
    farmer: "Pooja Gavit",
    village: "Niphad Hub",
    memberId: "#167",
    quantity: 45,
    grade: "Grade B",
    price: 1450,
    harvestTime: "Harvesting Today",
    harvestWindow: "today",
    harvestDate: "Today 2:00 PM",
    brix: "18.5% Dry Matter",
    diameter: "45-65 mm oval",
    defectRate: "4.0% (HoReCa fries/curry)",
    canopyImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-BAN-07",
    crop: "G9 Banana (Grand Naine)",
    category: "Fruit",
    farmer: "Dnyaneshwar Jadhav",
    village: "Shirasgaon Hub",
    memberId: "#089",
    quantity: 50,
    grade: "Grade A",
    price: 1650,
    harvestTime: "Harvesting in 24 Hours",
    harvestWindow: "24h",
    harvestDate: "Tomorrow 6:00 AM",
    brix: "Optimal green maturity",
    diameter: "Calibration 39-44 mm",
    defectRate: "0.9%",
    canopyImg: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-MAR-08",
    crop: "Marigold Flower (Orange Gold)",
    category: "Commercial",
    farmer: "Laxman Khairnar",
    village: "Dindori Hub",
    memberId: "#055",
    quantity: 14,
    grade: "Grade A",
    price: 3200,
    harvestTime: "Harvesting Today",
    harvestWindow: "today",
    harvestDate: "Today 5:00 AM",
    brix: "Floral density 98%",
    diameter: "6-8 cm bloom head",
    defectRate: "1.5%",
    canopyImg: "https://images.unsplash.com/photo-1534705868369-581fe1a60803?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1534705868369-581fe1a60803?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-TOM-09",
    crop: "Tomato (Sindoori Local)",
    category: "Vegetable",
    farmer: "Suresh Bhor",
    village: "Pimpalgaon Hub",
    memberId: "#033",
    quantity: 26,
    grade: "Grade B",
    price: 1850,
    harvestTime: "Harvesting in 24 Hours",
    harvestWindow: "24h",
    harvestDate: "Tomorrow 8:00 AM",
    brix: "4.4° Brix",
    diameter: "45-55 mm",
    defectRate: "3.8% (Culinary table use)",
    canopyImg: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "LOT-TOM-10",
    crop: "Tomato (Puree Processing Special)",
    category: "Vegetable",
    farmer: "Vikram Gaikwad",
    village: "Chandwad Hub",
    memberId: "#118",
    quantity: 38,
    grade: "Grade C",
    price: 1250,
    harvestTime: "Harvesting Today",
    harvestWindow: "today",
    harvestDate: "Today 11:30 AM",
    brix: "5.5° Brix (High solids)",
    diameter: "Mixed 40-75 mm",
    defectRate: "7.2% (Cosmetic only, 100% sound pulp)",
    canopyImg: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
    crateImg: "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=600&q=80",
    crossSectionImg: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
  }
];

// Generate additional 30 simulated lots dynamically to reach full 40 weekly listings
const CROPS_POOL = [
  { name: "Tomato (Abhinav)", cat: "Vegetable", p: 2300, g: "Grade A", img: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80" },
  { name: "Red Onion (Nashik)", cat: "Bulb & Root", p: 1950, g: "Grade A", img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80" },
  { name: "Green Capsicum", cat: "Vegetable", p: 3350, g: "Grade A", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80" },
  { name: "Green Chilli (G-4)", cat: "Commercial", p: 4100, g: "Grade B", img: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80" },
  { name: "Pomegranate (Bhagwa)", cat: "Fruit", p: 7600, g: "Grade A", img: "https://images.unsplash.com/photo-1541344999736-83eca872f240?auto=format&fit=crop&w=600&q=80" },
  { name: "Potato (Kufri Pukhraj)", cat: "Bulb & Root", p: 1400, g: "Grade B", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80" },
  { name: "G9 Banana (Green)", cat: "Fruit", p: 1600, g: "Grade A", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80" }
];

const FARMERS_POOL = [
  "Pandurang Kadam", "Sanjay Wagh", "Santosh Dhikale", "Manoj Pingle", "Yogesh Aher",
  "Shivaji Sonawane", "Gopal Gunjal", "Nitin Darade", "Tukaram Shinde", "Madhavrao Pawar"
];

const VILLAGES_POOL = ["Shirasgaon Hub", "Pimpalgaon Hub", "Dindori Hub", "Chandwad Hub", "Ozar Hub", "Niphad Hub"];
const HARVEST_WINDOWS = [
  { t: "Harvesting Today", w: "today", d: "Today 3:00 PM" },
  { t: "Harvesting in 24 Hours", w: "24h", d: "Tomorrow 6:30 AM" },
  { t: "Harvesting in 48-72h", w: "48h", d: "In 2 Days" }
];

for (let i = 11; i <= 40; i++) {
  const cropMeta = CROPS_POOL[(i - 11) % CROPS_POOL.length];
  const farmerName = FARMERS_POOL[(i - 11) % FARMERS_POOL.length];
  const village = VILLAGES_POOL[(i - 11) % VILLAGES_POOL.length];
  const hWin = HARVEST_WINDOWS[(i - 11) % HARVEST_WINDOWS.length];
  const lotCode = `LOT-${cropMeta.cat.substring(0,3).toUpperCase()}-${i < 10 ? '0' + i : i}`;

  PRODUCE_DATABASE.push({
    id: lotCode,
    crop: cropMeta.name,
    category: cropMeta.cat,
    farmer: farmerName,
    village: village,
    memberId: `#${100 + i}`,
    quantity: Math.floor(Math.random() * 20) + 12,
    grade: i % 7 === 0 ? "Grade C" : (i % 3 === 0 ? "Grade B" : "Grade A"),
    price: cropMeta.p + (Math.floor(Math.random() * 7) - 3) * 50,
    harvestTime: hWin.t,
    harvestWindow: hWin.w,
    harvestDate: hWin.d,
    brix: "Standard AGMARK calibrated",
    diameter: "AGMARK Size Band II",
    defectRate: i % 7 === 0 ? "7.5%" : (i % 3 === 0 ? "3.2%" : "0.9%"),
    canopyImg: cropMeta.img,
    crateImg: cropMeta.img,
    crossSectionImg: cropMeta.img
  });
}

// Pending Submissions for FPO Quality Verification Desk
let PENDING_SUBMISSIONS = [
  {
    id: "PENDING-041",
    farmer: "Kisanrao More (Member #103)",
    village: "Ozar Hub",
    crop: "Green Capsicum (Indam 98)",
    quantity: 18,
    gradeClaim: "Grade A",
    priceFloor: 3300,
    harvestDate: "In 48 Hours",
    photos: [
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=400&q=80"
    ],
    checklist: "Calibration scale verified; moisture reading normal; 1.5-acre registered land"
  },
  {
    id: "PENDING-042",
    farmer: "Sunita Bai Deshmukh (Member #042)",
    village: "Pimpalgaon Hub",
    crop: "Red Onion (Nashik Special)",
    quantity: 25,
    gradeClaim: "Grade A",
    priceFloor: 2000,
    harvestDate: "Tomorrow Morning",
    photos: [
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80"
    ],
    checklist: "Scale strip visible; cured skin layer; zero sprouting"
  },
  {
    id: "PENDING-043",
    farmer: "Balasaheb Shinde (Member #078)",
    village: "Dindori Hub",
    crop: "Tomato (Abhinav Hybrid)",
    quantity: 20,
    gradeClaim: "Grade B",
    priceFloor: 1900,
    harvestDate: "In 3 Days",
    photos: [
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80"
    ],
    checklist: "Minor size variance flagged; sound pulp for HoReCa channel"
  }
];

// Active Orders / Pre-Bookings Ledger
let ORDERS_LEDGER = [
  {
    orderId: "PO-FPO-8821",
    lotId: "LOT-TOM-01",
    buyer: "FreshMart Hypermarkets Ltd.",
    crop: "Tomato (Abhinav Hybrid)",
    grade: "Grade A",
    qty: 22,
    farmgatePrice: 2350,
    totalValue: 51700,
    status: "Confirmed & Locked",
    statusCode: "status-locked",
    settlement: "Escrow Held (T+24h on delivery)"
  },
  {
    orderId: "PO-FPO-8822",
    lotId: "LOT-ONN-02",
    buyer: "Zepto Dark Store Hub #4",
    crop: "Red Onion (Nashik Special)",
    grade: "Grade A",
    qty: 35,
    farmgatePrice: 1980,
    totalValue: 69300,
    status: "Dispatched in LCV Transit",
    statusCode: "status-transit",
    settlement: "Escrow Funded (En Route)"
  },
  {
    orderId: "PO-FPO-8823",
    lotId: "LOT-POM-05",
    buyer: "Nature's Basket Regional DC",
    crop: "Pomegranate (Bhagwa)",
    grade: "Grade A",
    qty: 28,
    farmgatePrice: 7800,
    totalValue: 218400,
    status: "Delivered & Verified",
    statusCode: "status-delivered",
    settlement: "Paid to Farmer Account (UPI T+24h)"
  },
  {
    orderId: "PO-FPO-8824",
    lotId: "LOT-CAP-03",
    buyer: "Taj Dining Cloud Kitchens",
    crop: "Green Capsicum (Indam 98)",
    grade: "Grade A",
    qty: 16,
    farmgatePrice: 3400,
    totalValue: 54400,
    status: "Confirmed & Locked",
    statusCode: "status-locked",
    settlement: "Escrow Held"
  },
  {
    orderId: "PO-FPO-8825",
    lotId: "LOT-POT-06",
    buyer: "McCain Local Contract Processor",
    crop: "Potato (Kufri Pukhraj)",
    grade: "Grade B",
    qty: 45,
    farmgatePrice: 1450,
    totalValue: 65250,
    status: "Delivered & Verified",
    statusCode: "status-delivered",
    settlement: "Paid to Farmer Account (UPI T+24h)"
  },
  {
    orderId: "PO-FPO-8826",
    lotId: "LOT-CHL-04",
    buyer: "Haldiram Snack Ingredients",
    crop: "Green Chilli (G-4)",
    grade: "Grade B",
    qty: 12,
    farmgatePrice: 4200,
    totalValue: 50400,
    status: "Confirmed & Locked",
    statusCode: "status-locked",
    settlement: "Escrow Held"
  }
];

// Active selection state for booking modal
let activeSelectedLot = null;

// ================= INITIALIZATION & EVENT LISTENERS =================
document.addEventListener("DOMContentLoaded", () => {
  renderProduceGrid(PRODUCE_DATABASE);
  renderPendingReviews();
  renderOrdersTable();
  setupTabNavigation();
  setupFilterControls();
  setupFarmerForm();
  setupModals();
  setupPresenterGuide();
});

// Setup Tab Navigation
function setupTabNavigation() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = tab.dataset.tab;
      document.querySelectorAll(".tab-pane").forEach(pane => {
        pane.classList.remove("active");
      });
      const activePane = document.getElementById(targetId);
      if (activePane) activePane.classList.add("active");
    });
  });
}

// Setup Filters & Search
function setupFilterControls() {
  const searchInput = document.getElementById("catalogueSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const gradeFilter = document.getElementById("gradeFilter");
  const harvestFilter = document.getElementById("harvestFilter");
  const resetBtn = document.getElementById("resetFiltersBtn");

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    const cat = categoryFilter.value;
    const grade = gradeFilter.value;
    const harvest = harvestFilter.value;

    const filtered = PRODUCE_DATABASE.filter(item => {
      const matchSearch = item.crop.toLowerCase().includes(query) ||
                          item.farmer.toLowerCase().includes(query) ||
                          item.village.toLowerCase().includes(query) ||
                          item.id.toLowerCase().includes(query);
      const matchCat = cat === "all" || item.category === cat;
      const matchGrade = grade === "all" || item.grade === grade;
      const matchHarvest = harvest === "all" || item.harvestWindow === harvest;

      return matchSearch && matchCat && matchGrade && matchHarvest;
    });

    renderProduceGrid(filtered);
  }

  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  gradeFilter.addEventListener("change", applyFilters);
  harvestFilter.addEventListener("change", applyFilters);

  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "all";
    gradeFilter.value = "all";
    harvestFilter.value = "all";
    renderProduceGrid(PRODUCE_DATABASE);
  });
}

// Render Catalogue Grid
function renderProduceGrid(items) {
  const grid = document.getElementById("produceGrid");
  const countBadge = document.getElementById("catalogCountBadge");
  const statActive = document.getElementById("statActiveListings");

  if (countBadge) countBadge.textContent = items.length;
  if (statActive) statActive.textContent = `${items.length} Lots`;

  if (!items || items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <i class="fa-solid fa-seedling" style="font-size: 2.5rem; color: #94a3b8; margin-bottom: 0.75rem;"></i>
        <h3 style="color: #0f172a; margin-bottom: 0.25rem;">No Produce Batches Found</h3>
        <p style="color: #64748b; font-size: 0.85rem;">Try adjusting your search terms or filter criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(lot => {
    const gradeClass = lot.grade === 'Grade A' ? 'grade-a' : (lot.grade === 'Grade B' ? 'grade-b' : 'grade-c');
    return `
      <div class="produce-card" data-lot-id="${lot.id}">
        <div class="card-media">
          <img src="${lot.crateImg}" alt="${lot.crop}" class="card-img" loading="lazy">
          <span class="badge-grade ${gradeClass}">${lot.grade}</span>
          <span class="badge-harvest-time"><i class="fa-regular fa-clock"></i> ${lot.harvestTime}</span>
          <span class="badge-calibrated"><i class="fa-solid fa-check"></i> Calibrated Scale</span>
        </div>

        <div class="card-body">
          <div class="card-meta-top">
            <span class="batch-code">${lot.id}</span>
            <span class="crop-category-tag">${lot.category}</span>
          </div>

          <h3 class="card-title">${lot.crop}</h3>
          <p class="farmer-subtext">
            <i class="fa-solid fa-user-tag text-emerald"></i> ${lot.farmer} (${lot.village})
          </p>

          <div class="lot-specs-grid">
            <div class="spec-cell">
              <span class="spec-lbl">Available Volume</span>
              <span class="spec-val">${lot.quantity} Quintals (${lot.quantity * 100} kg)</span>
            </div>
            <div class="spec-cell">
              <span class="spec-lbl">Harvest Window</span>
              <span class="spec-val">${lot.harvestDate}</span>
            </div>
            <div class="spec-cell">
              <span class="spec-lbl">Quality Index</span>
              <span class="spec-val">${lot.brix}</span>
            </div>
            <div class="spec-cell">
              <span class="spec-lbl">Defect Rate</span>
              <span class="spec-val">${lot.defectRate}</span>
            </div>
          </div>

          <div class="card-pricing-bar">
            <div class="price-box">
              <span class="price-sub">Farmgate Price:</span>
              <div>
                <span class="price-main">₹${lot.price.toLocaleString()}</span>
                <span class="price-unit">/ Quintal</span>
              </div>
            </div>
            <div style="text-align: right;">
              <span class="price-sub">Lot Est. Value:</span>
              <div style="font-weight: 700; color: #059669; font-size: 0.95rem;">
                ₹${(lot.price * lot.quantity).toLocaleString()}
              </div>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-book" onclick="openBookingModal('${lot.id}')">
              <i class="fa-solid fa-lock"></i> Pre-Book Lot
            </button>
            <button class="btn-spec" onclick="openSpecModal('${lot.id}')">
              <i class="fa-solid fa-magnifying-glass-plus"></i> View Specs
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Open Booking Modal
window.openBookingModal = function(lotId) {
  const lot = PRODUCE_DATABASE.find(item => item.id === lotId);
  if (!lot) return;

  activeSelectedLot = lot;
  document.getElementById("modalProduceTitle").textContent = `Pre-Book: ${lot.crop} (${lot.id})`;
  
  const preview = document.getElementById("modalBatchPreview");
  preview.innerHTML = `
    <img src="${lot.crateImg}" class="preview-img" alt="${lot.crop}">
    <div class="preview-details">
      <h4>${lot.crop} <span class="badge-grade ${lot.grade === 'Grade A' ? 'grade-a' : 'grade-b'}" style="font-size:0.65rem; padding: 2px 6px;">${lot.grade}</span></h4>
      <p style="font-size:0.75rem; color:#64748b;">Farmer: ${lot.farmer} • Hub: ${lot.village}</p>
      <p style="font-size:0.75rem; color:#0f172a; font-weight:700;">Scheduled Harvest: ${lot.harvestDate}</p>
    </div>
  `;

  const qtyInput = document.getElementById("orderQtyInput");
  qtyInput.value = lot.quantity;
  qtyInput.max = lot.quantity;

  updatePriceCalculations();

  document.getElementById("bookingModal").classList.add("open");
};

// Update Pricing Breakdown in Modal
function updatePriceCalculations() {
  if (!activeSelectedLot) return;
  const qtyInput = document.getElementById("orderQtyInput");
  const qty = parseFloat(qtyInput.value) || 0;
  const basePricePerQtl = activeSelectedLot.price;
  const fpoFeePerQtl = Math.round(basePricePerQtl * 0.035 + 25); // 3.5% + ₹25 handling
  const landedPricePerQtl = basePricePerQtl + fpoFeePerQtl;
  const grandTotal = landedPricePerQtl * qty;

  document.getElementById("calcBasePrice").textContent = `₹${basePricePerQtl.toLocaleString()} / Qtl`;
  document.getElementById("calcFpoFee").textContent = `₹${fpoFeePerQtl} / Qtl`;
  document.getElementById("calcTotalPrice").textContent = `₹${grandTotal.toLocaleString()}`;
}

// Open Quality Spec Modal
window.openSpecModal = function(lotId) {
  const lot = PRODUCE_DATABASE.find(item => item.id === lotId);
  if (!lot) return;

  const body = document.getElementById("specModalBody");
  document.getElementById("specTitle").textContent = `${lot.crop} - Inspection Certificate (${lot.id})`;

  body.innerHTML = `
    <div class="spec-grid-layout">
      <div class="spec-photos-col">
        <img src="${lot.crossSectionImg}" alt="Calibrated Cross Section" class="spec-main-photo">
        <div class="spec-thumbs">
          <img src="${lot.canopyImg}" alt="Canopy Photo" class="spec-thumb-img">
          <img src="${lot.crateImg}" alt="Crate Sample" class="spec-thumb-img">
        </div>
        <p style="font-size: 0.72rem; color: #64748b; text-align: center;">
          <i class="fa-solid fa-camera"></i> Photos captured using FPO Calibrated Reference Strip at field gate.
        </p>
      </div>

      <div class="spec-info-col">
        <h4>${lot.crop}</h4>
        <span class="badge-grade ${lot.grade === 'Grade A' ? 'grade-a' : 'grade-b'}">${lot.grade} AGMARK Standard</span>

        <table class="spec-details-table">
          <tr><td>Batch Tracking ID:</td><td>${lot.id}</td></tr>
          <tr><td>Producer Member:</td><td>${lot.farmer} (${lot.memberId})</td></tr>
          <tr><td>Aggregation Hub:</td><td>${lot.village} (Center #2)</td></tr>
          <tr><td>Total Harvest Volume:</td><td>${lot.quantity} Quintals (${lot.quantity * 100} kg)</td></tr>
          <tr><td>Scheduled Harvest Date:</td><td>${lot.harvestDate}</td></tr>
          <tr><td>Sugar / Firmness Index:</td><td>${lot.brix}</td></tr>
          <tr><td>Sizing Calibration:</td><td>${lot.diameter}</td></tr>
          <tr><td>Tolerance / Defect Rate:</td><td>${lot.defectRate}</td></tr>
          <tr><td>Recommended Channel:</td><td>${lot.grade === 'Grade A' ? 'Supermarket Retail / Quick-Commerce' : 'HoReCa / Cloud Kitchens'}</td></tr>
          <tr><td>Farmgate Reserve Price:</td><td>₹${lot.price.toLocaleString()} / Quintal</td></tr>
        </table>

        <div style="background: #f0fdf4; padding: 0.75rem; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 1rem;">
          <strong style="color: #065f46; font-size: 0.78rem;"><i class="fa-solid fa-circle-check"></i> 100% Quality Assurance Guarantee:</strong>
          <p style="font-size: 0.72rem; color: #166534; margin-top: 0.2rem;">
            If inward inspection at buyer receiving dock deviates >3% from this calibrated spec sheet, FPO transit guarantee covers instant lot replacement or credit refund within 2 hours.
          </p>
        </div>

        <button class="btn-primary-large" onclick="closeSpecModalAndBook('${lot.id}')">
          <i class="fa-solid fa-lock"></i> Proceed to Pre-Book This Lot
        </button>
      </div>
    </div>
  `;

  document.getElementById("specModal").classList.add("open");
};

window.closeSpecModalAndBook = function(lotId) {
  document.getElementById("specModal").classList.remove("open");
  openBookingModal(lotId);
};

// Render Pending Quality Review Submissions
function renderPendingReviews() {
  const container = document.getElementById("pendingLotsContainer");
  const countBadge = document.getElementById("pendingCountBadge");
  const pendingStat = document.getElementById("pendingReviewCount");

  if (countBadge) countBadge.textContent = PENDING_SUBMISSIONS.length;
  if (pendingStat) pendingStat.textContent = PENDING_SUBMISSIONS.length;

  if (PENDING_SUBMISSIONS.length === 0) {
    container.innerHTML = `
      <div style="padding: 2.5rem; text-align: center; background: white; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: #10b981; margin-bottom: 0.5rem;"></i>
        <h4 style="color: #0f172a;">All Pending Submissions Reviewed</h4>
        <p style="font-size: 0.8rem; color: #64748b;">The weekly catalogue entries are 100% audited and verified.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = PENDING_SUBMISSIONS.map(sub => {
    return `
      <div class="pending-card" id="card-${sub.id}">
        <div class="pending-media-strip">
          <img src="${sub.photos[0]}" class="pending-thumb" alt="Photo 1">
          <img src="${sub.photos[1]}" class="pending-thumb" alt="Photo 2">
          <img src="${sub.photos[2]}" class="pending-thumb" alt="Photo 3">
        </div>

        <div class="pending-details">
          <h4>${sub.crop} <span class="badge-pending" style="font-size:0.7rem;">${sub.id}</span></h4>
          <p class="pending-farmer-info"><i class="fa-solid fa-user"></i> ${sub.farmer} • ${sub.village}</p>
          <div class="pending-specs">
            <span class="pill-spec"><i class="fa-solid fa-weight-hanging"></i> ${sub.quantity} Quintals</span>
            <span class="pill-spec"><i class="fa-solid fa-calendar-check"></i> ${sub.harvestDate}</span>
            <span class="pill-spec"><i class="fa-solid fa-award"></i> Claimed: ${sub.gradeClaim}</span>
            <span class="pill-spec"><i class="fa-solid fa-indian-rupee-sign"></i> ₹${sub.priceFloor}/Qtl Floor</span>
          </div>
          <p style="font-size: 0.74rem; color: #059669; font-weight:600;"><i class="fa-solid fa-clipboard-check"></i> ${sub.checklist}</p>
        </div>

        <div class="pending-actions">
          <button class="btn-approve" onclick="approveSubmission('${sub.id}')">
            <i class="fa-solid fa-check"></i> Approve & Publish
          </button>
          <button class="btn-reject" onclick="rejectSubmission('${sub.id}')">
            <i class="fa-solid fa-xmark"></i> Request Re-Shoot
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Approve Submission Workflow
window.approveSubmission = function(subId) {
  const subIndex = PENDING_SUBMISSIONS.findIndex(s => s.id === subId);
  if (subIndex === -1) return;

  const sub = PENDING_SUBMISSIONS[subIndex];
  const newLotId = `LOT-${sub.crop.substring(0,3).toUpperCase()}-${PRODUCE_DATABASE.length + 1}`;

  // Add to active database
  PRODUCE_DATABASE.unshift({
    id: newLotId,
    crop: sub.crop,
    category: sub.crop.includes("Onion") ? "Bulb & Root" : "Vegetable",
    farmer: sub.farmer.split("(")[0].trim(),
    village: sub.village,
    memberId: sub.farmer.match(/#[0-9]+/)?.[0] || "#999",
    quantity: sub.quantity,
    grade: sub.gradeClaim,
    price: sub.priceFloor,
    harvestTime: sub.harvestDate,
    harvestWindow: "48h",
    harvestDate: sub.harvestDate,
    brix: "Verified by Field Scout",
    diameter: "AGMARK Uniform Lot",
    defectRate: "0.9%",
    canopyImg: sub.photos[0],
    crateImg: sub.photos[1],
    crossSectionImg: sub.photos[2]
  });

  PENDING_SUBMISSIONS.splice(subIndex, 1);
  renderPendingReviews();
  renderProduceGrid(PRODUCE_DATABASE);

  showToast(`✅ Approved! ${newLotId} (${sub.crop}) published to live buyer catalogue.`);
};

// Reject Submission Workflow
window.rejectSubmission = function(subId) {
  const subIndex = PENDING_SUBMISSIONS.findIndex(s => s.id === subId);
  if (subIndex === -1) return;

  PENDING_SUBMISSIONS.splice(subIndex, 1);
  renderPendingReviews();
  showToast(`⚠️ Re-shoot requested for ${subId}. Automated WhatsApp alert dispatched to Field Scout.`);
};

// Render Orders & Escrow Table
function renderOrdersTable() {
  const tbody = document.getElementById("ordersTableBody");
  if (!tbody) return;

  tbody.innerHTML = ORDERS_LEDGER.map(order => {
    return `
      <tr>
        <td>
          <strong>${order.orderId}</strong>
          <div style="font-size:0.7rem; color:#94a3b8;">Ref: ${order.lotId}</div>
        </td>
        <td><strong>${order.buyer}</strong></td>
        <td>
          ${order.crop}
          <span class="badge-grade ${order.grade === 'Grade A' ? 'grade-a' : 'grade-b'}" style="font-size:0.6rem; padding: 1px 5px;">${order.grade}</span>
        </td>
        <td>${order.qty} Qtl (${order.qty * 100} kg)</td>
        <td>₹${order.farmgatePrice.toLocaleString()} / Qtl</td>
        <td><strong>₹${order.totalValue.toLocaleString()}</strong></td>
        <td><span class="status-badge ${order.statusCode}"><i class="fa-solid fa-circle-dot" style="font-size: 0.5rem;"></i> ${order.status}</span></td>
        <td style="font-size:0.75rem; color:#059669; font-weight:600;">${order.settlement}</td>
        <td>
          <button class="btn-refresh" style="font-size:0.7rem; padding: 3px 6px;" onclick="simulateGoodsReceived('${order.orderId}')">
            <i class="fa-solid fa-file-signature"></i> GRN Audit
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

window.simulateGoodsReceived = function(orderId) {
  const order = ORDERS_LEDGER.find(o => o.orderId === orderId);
  if (!order) return;

  order.status = "Delivered & Verified";
  order.statusCode = "status-delivered";
  order.settlement = "Paid to Farmer Account (UPI T+24h)";
  renderOrdersTable();

  showToast(`🎉 Goods Received Note signed for ${orderId}. UPI transfer of ₹${(order.totalValue * 0.965).toFixed(0)} credited to farmer.`);
};

// Setup Farmer Submission Form
function setupFarmerForm() {
  const form = document.getElementById("farmerSubmitForm");
  const qtyInput = document.getElementById("quantityInput");
  const sampleBtn = document.getElementById("loadSamplePhotosBtn");

  // Auto populate sample photos
  if (sampleBtn) {
    sampleBtn.addEventListener("click", () => {
      document.getElementById("farmerSelect").value = "Sunita Bai Deshmukh (Member #042 - Pimpalgaon)";
      document.getElementById("cropSelect").value = "Tomato (Abhinav Hybrid)";
      qtyInput.value = 24;
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 2);
      document.getElementById("harvestDateInput").value = tomorrow.toISOString().split("T")[0];
      
      document.getElementById("targetGradeSelect").value = "Grade A";
      document.getElementById("expectedPriceInput").value = 2400;

      // Update previews
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

  // Handle Form Submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const farmerVal = document.getElementById("farmerSelect").value;
      const cropVal = document.getElementById("cropSelect").value;
      const qtyVal = parseFloat(qtyInput.value);
      const harvestDateVal = document.getElementById("harvestDateInput").value;
      const gradeVal = document.getElementById("targetGradeSelect").value;
      const priceVal = parseFloat(document.getElementById("expectedPriceInput").value);

      const newPending = {
        id: `PENDING-0${40 + PENDING_SUBMISSIONS.length + 1}`,
        farmer: farmerVal,
        village: farmerVal.includes("Pimpalgaon") ? "Pimpalgaon Hub" : "Shirasgaon Hub",
        crop: cropVal,
        quantity: qtyVal,
        gradeClaim: gradeVal,
        priceFloor: priceVal,
        harvestDate: `Scheduled on ${harvestDateVal}`,
        photos: [
          "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1546470427-227c7369a9b9?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80"
        ],
        checklist: "Calibration strip verified; Scout digital sign-off complete"
      };

      PENDING_SUBMISSIONS.unshift(newPending);
      renderPendingReviews();

      form.reset();
      showToast("🚀 Harvest listing submitted! FPO Quality Lead will audit within 4 hours.");

      // Switch to Admin QC tab to show the evaluator the workflow!
      setTimeout(() => {
        document.querySelector('[data-tab="admin-qc"]').click();
      }, 1200);
    });
  }
}

// Setup Modals & RFQ Handlers
function setupModals() {
  const bookingModal = document.getElementById("bookingModal");
  const closeBookingBtn = document.getElementById("closeBookingModal");
  const qtyInput = document.getElementById("orderQtyInput");
  const preBookingForm = document.getElementById("preBookingForm");
  const btnSendWhatsappRfq = document.getElementById("btnSendWhatsappRfq");

  const specModal = document.getElementById("specModal");
  const closeSpecBtn = document.getElementById("closeSpecModal");

  const whatsappModal = document.getElementById("whatsappModal");
  const closeWhatsappBtn = document.getElementById("closeWhatsappModal");
  const copyWhatsappBtn = document.getElementById("copyWhatsappBtn");

  if (closeBookingBtn) closeBookingBtn.addEventListener("click", () => bookingModal.classList.remove("open"));
  if (closeSpecBtn) closeSpecBtn.addEventListener("click", () => specModal.classList.remove("open"));
  if (closeWhatsappBtn) closeWhatsappBtn.addEventListener("click", () => whatsappModal.classList.remove("open"));

  if (qtyInput) {
    qtyInput.addEventListener("input", updatePriceCalculations);
  }

  // Pre-Booking Form Submit
  if (preBookingForm) {
    preBookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!activeSelectedLot) return;

      const buyerOrg = document.getElementById("buyerOrgInput").value;
      const orderQty = parseFloat(qtyInput.value);
      const deliveryHub = document.getElementById("deliveryHubSelect").value;
      const basePrice = activeSelectedLot.price;
      const totalVal = Math.round((basePrice * 1.035 + 25) * orderQty);

      const newOrder = {
        orderId: `PO-FPO-${Math.floor(1000 + Math.random() * 9000)}`,
        lotId: activeSelectedLot.id,
        buyer: buyerOrg,
        crop: activeSelectedLot.crop,
        grade: activeSelectedLot.grade,
        qty: orderQty,
        farmgatePrice: basePrice,
        totalValue: totalVal,
        status: "Confirmed & Locked",
        statusCode: "status-locked",
        settlement: "Escrow Held (T+24h on delivery)"
      };

      ORDERS_LEDGER.unshift(newOrder);
      renderOrdersTable();

      bookingModal.classList.remove("open");
      showToast(`🔒 Advance Purchase Order ${newOrder.orderId} locked for ${buyerOrg}!`);

      // Switch to Bookings tab to verify
      setTimeout(() => {
        document.querySelector('[data-tab="orders-escrow"]').click();
      }, 1000);
    });
  }

  // WhatsApp RFQ Generator
  if (btnSendWhatsappRfq) {
    btnSendWhatsappRfq.addEventListener("click", () => {
      if (!activeSelectedLot) return;
      const buyerOrg = document.getElementById("buyerOrgInput").value || "B2B Procurement Partner";
      const orderQty = qtyInput.value || activeSelectedLot.quantity;
      const deliveryHub = document.getElementById("deliveryHubSelect").value;

      const msg = `*KISAN-SEVA FPO • B2B HARVEST RFQ* 🚜\n\n` +
                  `*Buyer Organization:* ${buyerOrg}\n` +
                  `*Batch Tracking ID:* ${activeSelectedLot.id}\n` +
                  `*Crop & Variety:* ${activeSelectedLot.crop}\n` +
                  `*Certified Grade:* ${activeSelectedLot.grade} (AGMARK Standard)\n` +
                  `*Requested Quantity:* ${orderQty} Quintals (${orderQty * 100} kg)\n` +
                  `*Scheduled Harvest:* ${activeSelectedLot.harvestDate}\n` +
                  `*Farmgate Agreed Rate:* ₹${activeSelectedLot.price} / Quintal\n` +
                  `*Destination DC:* ${deliveryHub}\n` +
                  `*Quality Guarantee:* Verified with FPO Calibrated Scale Strip\n\n` +
                  `👉 _Please confirm allocation and issue digital PO for farmgate loading._`;

      document.getElementById("whatsappMessageContent").textContent = msg;
      whatsappModal.classList.add("open");
    });
  }

  if (copyWhatsappBtn) {
    copyWhatsappBtn.addEventListener("click", () => {
      const text = document.getElementById("whatsappMessageContent").textContent;
      navigator.clipboard.writeText(text).then(() => {
        showToast("📋 WhatsApp RFQ copied to clipboard!");
      });
    });
  }
}

// Presenter Guide Drawer Toggle
function setupPresenterGuide() {
  const guideBtn = document.getElementById("toggleDemoGuide");
  const drawer = document.getElementById("presenterDrawer");
  const closeBtn = document.getElementById("closePresenterDrawer");

  if (guideBtn && drawer) {
    guideBtn.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  }

  // Clicking steps in presenter drawer switches tabs
  document.querySelectorAll(".demo-step").forEach(step => {
    step.addEventListener("click", () => {
      document.querySelectorAll(".demo-step").forEach(s => s.classList.remove("active-step"));
      step.classList.add("active-step");

      const targetTab = step.dataset.target;
      const tabButton = document.querySelector(`[data-tab="${targetTab}"]`);
      if (tabButton) tabButton.click();
    });
  });
}

// Toast Notifications
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  toast.innerHTML = `<i class="fa-solid fa-bell"></i> <span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
