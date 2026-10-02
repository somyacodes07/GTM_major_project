# Supply Chain & Operating Flow Architecture
## End-to-End Operating Protocol: Farmgate to B2B Institutional Delivery
**Case Study No. 51:** Farm Produce Photo Catalogue  
**Throughput:** 40 Weekly Harvest Batches | 180 Smallholder Farmers | ~72 MT Weekly Volume  

---

## 1. Operating Flow Map

```
+---------------------------------------------------------------------------------------------------+
| STAGE 1: PRE-HARVEST LISTING & FIELD PHOTO CAPTURE (T - 96h to T - 48h)                           |
+---------------------------------------------------------------------------------------------------+
  • Farmer inputs expected harvest date, crop variety, estimated quantity (quintals).
  • Village Field Scout visits farm, captures 3 standardized photos using calibrated background strip:
    - Photo A: Wide canopy overview (maturity index).
    - Photo B: Crate/sample assortment (color uniformity & skin texture).
    - Photo C: Cross-section cut with sizing caliper / reference scale coin.
  • Scout logs field Brix/moisture reading and submits digital listing draft.

                                           │
                                           ▼
+---------------------------------------------------------------------------------------------------+
| STAGE 2: QUALITY AUDIT & CATALOGUE PUBLICATION (T - 48h to T - 36h)                              |
+---------------------------------------------------------------------------------------------------+
  • FPO Quality Lead reviews lot on admin dashboard against AGMARK Grade Standards:
    - Grade A: <2% surface defect, optimal ripeness, uniform size (Premium Supermarkets).
    - Grade B: 2-6% minor cosmetic defect, firm texture, standard size (HoReCa / Cloud Kitchens).
    - Grade C: >6% cosmetic variations, slight irregular sizing (Agro-processing / Dehydration).
  • FPO generates unique Batch Tracking ID (e.g., `LOT-TOM-A-042`).
  • Catalogue goes live on web portal and automated WhatsApp broadcast triggers at 7:00 AM.

                                           │
                                           ▼
+---------------------------------------------------------------------------------------------------+
| STAGE 3: BUYER PRE-BOOKING & CONTRACT LOCKING (T - 36h to T - 18h)                                |
+---------------------------------------------------------------------------------------------------+
  • Institutional B2B Buyers inspect high-resolution photos, harvest countdown, and lot specs.
  • Buyer clicks "Pre-Book Batch" on Web or WhatsApp RFQ.
  • System generates binding Digital Purchase Order (PO) with locked price per quintal.
  • Buyer places 20% refundable escrow deposit (or corporate LOI for verified accounts).
  • FPO issues "Harvest Authorization Token" to farmer.

                                           │
                                           ▼
+---------------------------------------------------------------------------------------------------+
| STAGE 4: SYNCHRONIZED HARVEST & VILLAGE HUB AGGREGATION (T - 18h to T - 6h)                      |
+---------------------------------------------------------------------------------------------------+
  • Farmer harvests produce at optimal diurnal window (5:00 AM - 8:30 AM) to maintain moisture.
  • Produce transported in reusable FPO crates to nearest Village Aggregation Hub (within 4 km).
  • Village Scout conducts secondary weighment on digital platform scale.
  • Electronic weighment slip generated; batch QR tags attached to each 20-kg crate.

                                           │
                                           ▼
+---------------------------------------------------------------------------------------------------+
| STAGE 5: CONSOLIDATED PALLETIZATION & COLD/VENTILATED TRANSIT (T - 6h to T + 0h)                  |
+---------------------------------------------------------------------------------------------------+
  • Light Commercial Vehicles (1.5 - 3.5T LCVs) aggregate crates from 3 village hubs.
  • Vehicle routed via algorithmic multi-stop milk run.
  • High-perishables (tomatoes, berries, capsicum) shipped in thermal insulated/ventilated trucks.
  • Real-time GPS tracking shared with buyer receiving manager.

                                           │
                                           ▼
+---------------------------------------------------------------------------------------------------+
| STAGE 6: BUYER RECEIVING, INWARD QC & T+24h SETTLEMENT (T + 0h to T + 24h)                        |
+---------------------------------------------------------------------------------------------------+
  • Delivery at Buyer Central Distribution Center (DC) or Dark Store Hub (10:00 PM - 2:00 AM).
  • Buyer scans crate QR code, cross-checks physical lot against original Catalogue Spec Sheet.
  • Instant digital Goods Received Note (GRN) issued.
  • Escrow funds released: FPO deducts 3.5% service fee; balance 96.5% credited directly
    to farmer's bank account via automated UPI/NEFT within 24 hours.
```

---

## 2. Detailed Touchpoints & SLA Protocol

| Touchpoint ID | Name | Channel | Actor Responsible | Maximum Turnaround SLA | Fail-Safe Protocol |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **TP-1** | Farmer Listing Submission | WhatsApp / Mobile App | Farmer / Field Scout | T - 72 Hours prior to harvest | If missed, lot is shifted to spot mandi aggregation. |
| **TP-2** | Quality Verification & Grading | FPO Admin Portal | FPO Quality Agronomist | 4 Hours from submission | Re-photograph request if lighting or clarity fails. |
| **TP-3** | Catalogue Broadcast | Web / WhatsApp Push | Automated API Engine | Monday & Thursday 7:00 AM | Fallback SMS link sent if WhatsApp fails. |
| **TP-4** | Buyer RFQ & Booking | Web / Instant WhatsApp | Institutional Buyer | Within 12 Hours of publication | Unreserved lots released to secondary processor tier. |
| **TP-5** | Farmgate Digital Weighment | Village Collection Hub | Village Scout | 30 Minutes per farmer batch | Calibrated test weight (20 kg) verified daily. |
| **TP-6** | Consolidated Dispatch | LCV Road Freight | FPO Logistics Partner | < 4 Hours from aggregation | Backup transport contractor on standby. |
| **TP-7** | Receiving & QC Audit | Buyer DC Receiving Bay | Buyer Quality Inspector | 90 Minutes from dock arrival | Digital photographic dispute escalation protocol. |
| **TP-8** | Farmer Payment Clearance | Direct UPI / Bank NEFT | Automated Banking API | < 24 Hours from GRN sign-off | FPO working capital reserve guarantees payment. |

---

## 3. Produce Grading Standardization Framework

To guarantee absolute transparency between catalogue photos and physical deliveries, the FPO enforces standardized grading parameters adapted from **AGMARK** and **National Horticulture Board (NHB)**:

```
+---------------------------------------------------------------------------------------------------------+
| GRADE LEVEL | QUALITY SPECIFICATIONS                     | TARGET BUYER SEGMENT     | PRICE REALIZATION |
+---------------------------------------------------------------------------------------------------------+
| GRADE A     | • Uniform color maturity (>90% ripeness)   | Modern Supermarkets,     | Benchmark + 12%   |
| (Premium)   | • Zero mechanical punctures or rot         | Quick Commerce Platforms | to + 18%          |
|             | • Size variance < 10% diameter             | Premium Hotels & Dining  |                   |
|             | • Packed in ventilated HDPE crates         |                          |                   |
+-------------+--------------------------------------------+--------------------------+-------------------+
| GRADE B     | • Good freshness, minor surface blemishes  | HoReCa Chains,           | Benchmark + 2%    |
| (Standard)  | • Mild size variance (10-25%)              | Cloud Kitchens,          | to + 6%           |
|             | • Optimal firmness, ready for cooking      | Local Grocery Wholesalers|                   |
+-------------+--------------------------------------------+--------------------------+-------------------+
| GRADE C     | • Highly ripe, irregular shape or sizing   | Puree & Sauce Processors,| Benchmark - 5%    |
| (Processing)| • Clean, healthy pulp (zero internal rot)  | Dehydration Units,       | (Zero dumping/    |
|             | • Bulk crates or netted sack packing       | Pickle Manufacturers     | complete salvage) |
+---------------------------------------------------------------------------------------------------------+
```

---

## 4. Key Performance Measures for the Supply Chain

1. **Catalogue Accuracy Score (CAS):**
   $$\text{CAS} = \left( 1 - \frac{\text{Lots with Grade or Volume Discrepancy}}{\text{Total Catalogue Lots}} \right) \times 100 \quad \text{[Target: } \ge 96\% \text{]}$$
2. **Order-to-Harvest Fulfillment Ratio (OTHR):**
   $$\text{OTHR} = \frac{\text{Pre-Booked Harvest Volume (Quintals)}}{\text{Total Harvested Volume (Quintals)}} \times 100 \quad \text{[Target: } \ge 85\% \text{]}$$
3. **Transit Shrinkage & Damage Rate (TSDR):**
   $$\text{TSDR} = \frac{\text{Damaged Weight at Inward Bay}}{\text{Dispatched Weight at Farmgate}} \times 100 \quad \text{[Target: } \le 2.5\% \text{]}$$
4. **On-Time Settlement Duration (OTSD):**
   $$\text{OTSD} = \text{Elapsed hours between Buyer GRN generation and Farmer UPI credit} \quad \text{[Target: } \le 24 \text{ Hours]}$$
