#!/usr/bin/env python3
"""
Generate Executive Project Submission Document (.docx)
Case Study No. 51: Farm Produce Photo Catalogue
Subject: Go-to-Market & Customer Operations
Student: Somyajeet Singh (Roll No: 150096725043)
ITM Skills University — School of Future Tech
"""

import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

# --- Color Palette Constants ---
HEX_PRIMARY = "059669"       # Deep Forest Emerald
HEX_PRIMARY_DARK = "047857"  # Dark Emerald
HEX_PRIMARY_LIGHT = "ECFDF5" # Mint Tint
HEX_NAVY = "0F172A"          # Deep Slate / Navy
HEX_NAVY_LIGHT = "F1F5F9"    # Ice Slate
HEX_BORDER = "CBD5E1"        # Crisp Border
HEX_MUTED = "64748B"         # Muted Gray
HEX_TEXT = "1E293B"          # Body Text
HEX_RED = "EF4444"           # Red Accent
HEX_AMBER = "D97706"         # Amber Accent
HEX_BLUE = "2563EB"          # Royal Blue

COLOR_PRIMARY = RGBColor(5, 150, 105)
COLOR_NAVY = RGBColor(15, 23, 42)
COLOR_TEXT = RGBColor(30, 41, 59)
COLOR_MUTED = RGBColor(100, 116, 139)
COLOR_WHITE = RGBColor(255, 255, 255)
COLOR_RED = RGBColor(239, 68, 68)
COLOR_BLUE = RGBColor(37, 99, 235)

def set_cell_background(cell, hex_color):
    """Sets background shading of a table cell."""
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=120, bottom=120, left=160, right=160):
    """Sets cell padding in dxa (1 pt = 20 dxa)."""
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'''
        <w:tcMar {nsdecls("w")}>
            <w:top w:w="{top}" w:type="dxa"/>
            <w:bottom w:w="{bottom}" w:type="dxa"/>
            <w:left w:w="{left}" w:type="dxa"/>
            <w:right w:w="{right}" w:type="dxa"/>
        </w:tcMar>
    ''')
    tcPr.append(tcMar)

def set_table_borders(table, border_color="CBD5E1"):
    """Sets thin subtle borders for the entire table."""
    tblPr = table._tbl.tblPr
    borders = parse_xml(f'''
        <w:tblBorders {nsdecls("w")}>
            <w:top w:val="single" w:sz="4" w:space="0" w:color="{border_color}"/>
            <w:left w:val="none"/>
            <w:bottom w:val="single" w:sz="6" w:space="0" w:color="{border_color}"/>
            <w:right w:val="none"/>
            <w:insideH w:val="single" w:sz="4" w:space="0" w:color="{border_color}"/>
            <w:insideV w:val="none"/>
        </w:tblBorders>
    ''')
    tblPr.append(borders)

def make_callout_box(doc, text_paragraphs, border_color="059669", bg_color="F8FAFC", title=None):
    """Creates a modern callout box with a thick colored left border and subtle background."""
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = tbl.cell(0, 0)
    cell.width = Inches(7.0)
    
    set_cell_background(cell, bg_color)
    set_cell_margins(cell, top=130, bottom=130, left=180, right=160)
    
    # Left thick border only
    tcPr = cell._tc.get_or_add_tcPr()
    borders = parse_xml(f'''
        <w:tcBorders {nsdecls("w")}>
            <w:top w:val="none"/>
            <w:left w:val="single" w:sz="36" w:space="0" w:color="{border_color}"/>
            <w:bottom w:val="none"/>
            <w:right w:val="none"/>
        </w:tcBorders>
    ''')
    tcPr.append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.15
    
    if title:
        run_title = p.add_run(title + "\n")
        run_title.font.name = "Arial"
        run_title.font.size = Pt(9.5)
        run_title.font.bold = True
        run_title.font.color.rgb = COLOR_NAVY if border_color != "059669" else COLOR_PRIMARY
    
    for idx, tp in enumerate(text_paragraphs):
        if idx > 0 or title:
            p = cell.add_paragraph()
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.line_spacing = 1.15
        
        if ":" in tp and not tp.startswith("http"):
            parts = tp.split(":", 1)
            r_bold = p.add_run(parts[0] + ":")
            r_bold.font.name = "Arial"
            r_bold.font.size = Pt(9)
            r_bold.font.bold = True
            r_bold.font.color.rgb = COLOR_NAVY
            
            r_text = p.add_run(parts[1])
            r_text.font.name = "Arial"
            r_text.font.size = Pt(9)
            r_text.font.color.rgb = COLOR_TEXT
        else:
            r = p.add_run(tp)
            r.font.name = "Arial"
            r.font.size = Pt(9)
            r.font.color.rgb = COLOR_TEXT

    p_spacer = doc.add_paragraph()
    p_spacer.paragraph_format.space_before = Pt(0)
    p_spacer.paragraph_format.space_after = Pt(3)

def add_heading_1(doc, text):
    """Section Heading (Emerald + Navy)."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(12)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.keep_with_next = True
    run = p.add_run(text)
    run.font.name = "Arial"
    run.font.size = Pt(13)
    run.font.bold = True
    run.font.color.rgb = COLOR_PRIMARY
    return p

def add_heading_2(doc, text):
    """Sub-heading."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    run = p.add_run(text)
    run.font.name = "Arial"
    run.font.size = Pt(10.5)
    run.font.bold = True
    run.font.color.rgb = COLOR_NAVY
    return p

def add_bullet(doc, bold_prefix, text_body):
    """Adds a clean bullet point."""
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_before = Pt(1)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.15
    
    r_bold = p.add_run(bold_prefix + " ")
    r_bold.font.name = "Arial"
    r_bold.font.size = Pt(9)
    r_bold.font.bold = True
    r_bold.font.color.rgb = COLOR_NAVY
    
    r_text = p.add_run(text_body)
    r_text.font.name = "Arial"
    r_text.font.size = Pt(9)
    r_text.font.color.rgb = COLOR_TEXT
    return p

def add_figure(doc, img_path, caption_text, width=Inches(6.8)):
    """Inserts an image centered with a styled caption."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.keep_with_next = True
    run = p.add_run()
    run.add_picture(img_path, width=width)
    
    p_cap = doc.add_paragraph()
    p_cap.paragraph_format.space_before = Pt(2)
    p_cap.paragraph_format.space_after = Pt(6)
    p_cap.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_cap = p_cap.add_run(caption_text)
    r_cap.font.name = "Arial"
    r_cap.font.size = Pt(8)
    r_cap.font.italic = True
    r_cap.font.color.rgb = COLOR_MUTED

def style_table_header(row, col_widths, hex_bg="0F172A"):
    """Styles header row with solid background and white text."""
    for idx, cell in enumerate(row.cells):
        cell.width = col_widths[idx]
        set_cell_background(cell, hex_bg)
        set_cell_margins(cell, top=120, bottom=120, left=120, right=120)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        for run in p.runs:
            run.font.name = "Arial"
            run.font.size = Pt(8.5)
            run.font.bold = True
            run.font.color.rgb = COLOR_WHITE

def style_table_row(row, col_widths, is_even=False):
    """Styles data row with subtle alternating zebra shading."""
    bg_color = "F8FAFC" if is_even else "FFFFFF"
    for idx, cell in enumerate(row.cells):
        cell.width = col_widths[idx]
        set_cell_background(cell, bg_color)
        set_cell_margins(cell, top=90, bottom=90, left=120, right=120)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.line_spacing = 1.15
        for run in p.runs:
            run.font.name = "Arial"
            run.font.size = Pt(8.5)
            run.font.color.rgb = COLOR_TEXT

def create_document():
    doc = docx.Document()
    
    # Page Setup: Standard A4 or Letter with 0.75" margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.7)
        section.bottom_margin = Inches(0.7)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)
        section.page_width = Inches(8.5)
        section.page_height = Inches(11.0)
    
    # Set default font
    style_normal = doc.styles['Normal']
    font = style_normal.font
    font.name = 'Arial'
    font.size = Pt(9.5)
    font.color.rgb = COLOR_TEXT

    # =========================================================================
    # PAGE 1: COVER PAGE
    # =========================================================================
    
    # Top Institution Strip
    p_inst = doc.add_paragraph()
    p_inst.paragraph_format.space_before = Pt(16)
    p_inst.paragraph_format.space_after = Pt(2)
    r_inst = p_inst.add_run("ITM SKILLS UNIVERSITY • SCHOOL OF FUTURE TECH")
    r_inst.font.name = "Arial"
    r_inst.font.size = Pt(11)
    r_inst.font.bold = True
    r_inst.font.color.rgb = COLOR_PRIMARY
    
    p_prog = doc.add_paragraph()
    p_prog.paragraph_format.space_before = Pt(0)
    p_prog.paragraph_format.space_after = Pt(24)
    r_prog = p_prog.add_run("B.Tech Computer Science & Engineering (2026–30) • Semester III: Sprint I")
    r_prog.font.name = "Arial"
    r_prog.font.size = Pt(9.5)
    r_prog.font.color.rgb = COLOR_MUTED

    # Major Subject & Title
    p_subj = doc.add_paragraph()
    p_subj.paragraph_format.space_before = Pt(8)
    p_subj.paragraph_format.space_after = Pt(4)
    r_subj = p_subj.add_run("ACADEMIC COURSEWORK SUBMISSION • GO-TO-MARKET & CUSTOMER OPERATIONS")
    r_subj.font.name = "Arial"
    r_subj.font.size = Pt(10)
    r_subj.font.bold = True
    r_subj.font.color.rgb = COLOR_BLUE

    p_title = doc.add_paragraph()
    p_title.paragraph_format.space_before = Pt(4)
    p_title.paragraph_format.space_after = Pt(8)
    r_title = p_title.add_run("Case Study 51: Farm Produce Photo Catalogue")
    r_title.font.name = "Arial"
    r_title.font.size = Pt(24)
    r_title.font.bold = True
    r_title.font.color.rgb = COLOR_NAVY

    p_sub = doc.add_paragraph()
    p_sub.paragraph_format.space_before = Pt(0)
    p_sub.paragraph_format.space_after = Pt(24)
    p_sub.paragraph_format.line_spacing = 1.25
    r_sub = p_sub.add_run(
        "Commercial Go-to-Market Strategy, Quality Assurance Protocol & Digital B2B Procurement System "
        "for 180 Smallholder Farmers (40 Active Weekly Lots • 72 MT Weekly Throughput)"
    )
    r_sub.font.name = "Arial"
    r_sub.font.size = Pt(11)
    r_sub.font.color.rgb = COLOR_TEXT

    # Student Details Submission Box (Matching user's style snippet)
    tbl_meta = doc.add_table(rows=1, cols=1)
    tbl_meta.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_meta = tbl_meta.cell(0, 0)
    c_meta.width = Inches(7.0)
    set_cell_background(c_meta, "F0FDF4") # subtle soft mint
    set_cell_margins(c_meta, top=160, bottom=160, left=200, right=200)
    
    # Border: Emerald solid
    tcPr = c_meta._tc.get_or_add_tcPr()
    borders = parse_xml(f'''
        <w:tcBorders {nsdecls("w")}>
            <w:top w:val="single" w:sz="8" w:space="0" w:color="{HEX_PRIMARY}"/>
            <w:left w:val="single" w:sz="24" w:space="0" w:color="{HEX_PRIMARY}"/>
            <w:bottom w:val="single" w:sz="8" w:space="0" w:color="{HEX_PRIMARY}"/>
            <w:right w:val="single" w:sz="8" w:space="0" w:color="{HEX_PRIMARY}"/>
        </w:tcBorders>
    ''')
    tcPr.append(borders)
    
    p_m1 = c_meta.paragraphs[0]
    p_m1.paragraph_format.space_before = Pt(0)
    p_m1.paragraph_format.space_after = Pt(6)
    
    r_sname_label = p_m1.add_run("Student Name: ")
    r_sname_label.font.bold = True
    r_sname_label.font.size = Pt(11)
    r_sname_label.font.color.rgb = COLOR_NAVY
    
    r_sname_val = p_m1.add_run("Somyajeet Singh           ")
    r_sname_val.font.size = Pt(11)
    r_sname_val.font.bold = True
    r_sname_val.font.color.rgb = COLOR_PRIMARY
    
    r_sroll_label = p_m1.add_run("Roll Number: ")
    r_sroll_label.font.bold = True
    r_sroll_label.font.size = Pt(11)
    r_sroll_label.font.color.rgb = COLOR_NAVY
    
    r_sroll_val = p_m1.add_run("150096725043")
    r_sroll_val.font.size = Pt(11)
    r_sroll_val.font.bold = True
    r_sroll_val.font.color.rgb = COLOR_PRIMARY

    p_m2 = c_meta.add_paragraph()
    p_m2.paragraph_format.space_before = Pt(2)
    p_m2.paragraph_format.space_after = Pt(2)
    p_m2.paragraph_format.line_spacing = 1.2
    
    r_eval = p_m2.add_run("Course Title: ")
    r_eval.font.bold = True
    r_eval.font.size = Pt(9.5)
    r_eval.font.color.rgb = COLOR_NAVY
    r_eval2 = p_m2.add_run("Go-to-Market & Customer Operations (Sprint I)  |  ")
    r_eval2.font.size = Pt(9.5)
    r_eval2.font.color.rgb = COLOR_TEXT
    
    r_subdate = p_m2.add_run("Submission: ")
    r_subdate.font.bold = True
    r_subdate.font.size = Pt(9.5)
    r_subdate.font.color.rgb = COLOR_NAVY
    r_subdate2 = p_m2.add_run("October 2026")
    r_subdate2.font.size = Pt(9.5)
    r_subdate2.font.color.rgb = COLOR_TEXT

    p_spacer = doc.add_paragraph()
    p_spacer.paragraph_format.space_after = Pt(16)

    # Live Project Deliverables Card
    make_callout_box(
        doc,
        [
            "Master Launchpad Hub: https://somyacodes07.github.io/GTM_major_project/",
            "Interactive Prototype Demo: https://somyacodes07.github.io/GTM_major_project/demo/",
            "Research & Keynote Slides: https://somyacodes07.github.io/GTM_major_project/research/",
            "GitHub Repository: https://github.com/somyacodes07/GTM_major_project",
            "Core Deliverables Included: 5-Page Academic Report, 9-Box Business Model Canvas, Supply Chain Flow & RACI, Unit Economics & Realization Waterfall, 6-Slide Keynote Deck, and Live GitHub Pages Application."
        ],
        border_color="059669",
        bg_color="F8FAFC",
        title="🌐 LIVE SUBMISSION ARTIFACTS & EVALUATION LINKS"
    )

    # Bottom Key Metric Highlights Strip
    tbl_kpi = doc.add_table(rows=1, cols=4)
    tbl_kpi.alignment = WD_TABLE_ALIGNMENT.CENTER
    kpi_widths = [Inches(1.75), Inches(1.75), Inches(1.75), Inches(1.75)]
    kpi_data = [
        ("180 FARMERS", "40 Weekly Lots (72 MT)", "059669"),
        ("+25.8% UPLIFT", "+₹451.75 / Qtl Net Cash", "059669"),
        ("₹66.52L GMV", "₹2.05L Monthly Net Profit", "0F172A"),
        ("> 96% SLA", "Calibrated 3-Photo Standard", "2563EB")
    ]
    for idx, cell in enumerate(tbl_kpi.rows[0].cells):
        cell.width = kpi_widths[idx]
        set_cell_background(cell, "F1F5F9")
        set_cell_margins(cell, top=100, bottom=100, left=100, right=100)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(2)
        r_top = p.add_run(kpi_data[idx][0] + "\n")
        r_top.font.name = "Arial"
        r_top.font.size = Pt(10)
        r_top.font.bold = True
        r_top.font.color.rgb = RGBColor.from_string(kpi_data[idx][2])
        r_sub = p.add_run(kpi_data[idx][1])
        r_sub.font.name = "Arial"
        r_sub.font.size = Pt(8)
        r_sub.font.color.rgb = COLOR_MUTED

    doc.add_page_break()

    # =========================================================================
    # PAGE 2: EXECUTIVE SUMMARY & THE MANDI SQUEEZE
    # =========================================================================
    add_heading_1(doc, "1. Executive Summary & The Problem Paradigm")
    
    make_callout_box(
        doc,
        [
            "The Core Problem: In Indian agriculture, smallholders lose up to 30% of their crop value because of 'blind harvesting'—cutting perishable produce before securing a buyer.",
            "The Mandi Reality: Farmers arrive at crowded APMC mandis with uncommitted truckloads, where commission brokers force arbitrary 15–30% visual haircuts and hidden weighment deductions.",
            "The Solution: KISAN-SEVA FPO digitizes 40 weekly harvest lots across 180 smallholders 72 hours before harvest using a calibrated photo catalogue, connecting directly with institutional B2B buyers."
        ],
        border_color="059669",
        bg_color="F0FDF4",
        title="EXECUTIVE PROBLEM & SOLUTION SUMMARY"
    )

    add_heading_2(doc, "Side-by-Side Comparison: Traditional Mandi vs FPO Photo Catalogue")
    
    tbl_comp = doc.add_table(rows=5, cols=3)
    tbl_comp.alignment = WD_TABLE_ALIGNMENT.CENTER
    comp_widths = [Inches(1.8), Inches(2.6), Inches(2.6)]
    set_table_borders(tbl_comp)
    
    # Headers
    hdr_cells = tbl_comp.rows[0].cells
    hdr_cells[0].paragraphs[0].add_run("Supply Chain Dimension")
    hdr_cells[1].paragraphs[0].add_run("Traditional APMC Mandi Channel")
    hdr_cells[2].paragraphs[0].add_run("FPO Pre-Harvest Photo Catalogue")
    style_table_header(tbl_comp.rows[0], comp_widths, hex_bg="0F172A")
    
    comp_rows = [
        ("Harvest Timing", "Blind harvest; zero price certainty before loading truck.", "72-hour pre-harvest catalogue listing; locked contracts."),
        ("Quality Assessment", "Subjective visual glance by trader; arbitrary 15–25% cuts.", "3 calibrated photos (field, crate, cross-section with scale)."),
        ("Intermediary Friction", "6–8% commission + 3–5% weighment cuts (kata chhoot).", "Zero hidden deductions; clean 3.5% FPO service margin."),
        ("Farmer Net Realization", "₹1,751 / Quintal net cash (high distress risk).", "₹2,202.75 / Quintal (+25.8% net cash increase; +₹451.75/Qtl).")
    ]
    
    for idx, r_data in enumerate(comp_rows):
        row = tbl_comp.rows[idx + 1]
        for c_idx, val in enumerate(r_data):
            row.cells[c_idx].paragraphs[0].add_run(val)
        style_table_row(row, comp_widths, is_even=(idx % 2 == 1))

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # Chart 1: Mandi vs FPO Realization Waterfall
    add_figure(
        doc,
        "assets_doc/chart_mandi_vs_fpo.png",
        "Figure 1: Net Farmer Payout Waterfall — Mandi Deductions (-20.4%) vs. FPO Photo Catalogue Model (+25.8% Cash Uplift)"
    )

    doc.add_page_break()

    # =========================================================================
    # PAGE 3: CUSTOMER SEGMENTATION & VALUE PROPOSITION CANVAS
    # =========================================================================
    add_heading_1(doc, "2. B2B Customer Segmentation & Value Proposition Canvas (VPC)")
    
    p_vpc_intro = doc.add_paragraph()
    p_vpc_intro.paragraph_format.space_before = Pt(2)
    p_vpc_intro.paragraph_format.space_after = Pt(4)
    p_vpc_intro.paragraph_format.line_spacing = 1.15
    p_vpc_intro.add_run(
        "To absorb 72 Metric Tonnes (40 lots) of perishable produce every week without price shocks, "
        "the FPO targets three distinct institutional customer tiers. Each tier absorbs specific quality grades:"
    )

    tbl_cust = doc.add_table(rows=4, cols=4)
    tbl_cust.alignment = WD_TABLE_ALIGNMENT.CENTER
    cust_widths = [Inches(1.8), Inches(1.1), Inches(2.0), Inches(2.1)]
    set_table_borders(tbl_cust)
    
    c_hdr = tbl_cust.rows[0].cells
    c_hdr[0].paragraphs[0].add_run("Customer Segment")
    c_hdr[1].paragraphs[0].add_run("Volume Share")
    c_hdr[2].paragraphs[0].add_run("Quality & Grade Need")
    c_hdr[3].paragraphs[0].add_run("Core Pain Relieved")
    style_table_header(tbl_cust.rows[0], cust_widths, hex_bg="059669")
    
    cust_rows = [
        ("Modern Retail & Q-Commerce\n(Zepto, Blinkit, Supermarkets)", "45% Vol\n(32.4 MT)", "Grade A Produce (<2% defects; uniform color & 55-65mm diameter).", "Eliminates shelf rejection; provides +36 hours extra retail freshness."),
        ("HoReCa & Cloud Kitchens\n(Hotels, Restaurant Chains)", "35% Vol\n(25.2 MT)", "Grade A & Grade B Produce (high edible yield; culinary consistency).", "Locks forward weekly contract rates, insulates against spot mandi price spikes."),
        ("Agro-Processors\n(Sauce, Puree, Dehydrators)", "20% Vol\n(14.4 MT)", "Grade C & Processing Grade (high Brix/acidity; appearance flexible).", "Guarantees bulk processing feedstock; absorbs 100% of farmer yield without dumping.")
    ]
    for idx, r_data in enumerate(cust_rows):
        row = tbl_cust.rows[idx + 1]
        for c_idx, val in enumerate(r_data):
            row.cells[c_idx].paragraphs[0].add_run(val)
        style_table_row(row, cust_widths, is_even=(idx % 2 == 1))

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    add_heading_2(doc, "Value Proposition Canvas (VPC) Alignment")
    add_bullet(doc, "• Customer Jobs:", "Institutional buyers must fulfill morning delivery SLAs, eliminate customer returns, and maintain predictable margin targets.")
    add_bullet(doc, "• Buyer Pains:", "Deceptive packing (toppers hiding bruised bottom produce), random size variations, transit spoilage, and fluctuating spot prices.")
    add_bullet(doc, "• Pain Relievers:", "3-photo visual verification with calibrated ruler scale, AGMARK specification sheets, locked contract pricing, and pre-sorted crating.")
    add_bullet(doc, "• Gain Creators:", "Traceable direct farmgate sourcing, +36h additional shelf-life, and direct integration into automated procurement systems (ONDC).")

    # Chart 2: Buyer Demand Donut
    add_figure(
        doc,
        "assets_doc/chart_buyer_demand.png",
        "Figure 2: Institutional B2B Demand Allocation — 72 MT Weekly Throughput Across 3 Customer Channels"
    )

    doc.add_page_break()

    # =========================================================================
    # PAGE 4: 5-STAGE SUPPLY CHAIN PROTOCOL & QUALITY ASSURANCE
    # =========================================================================
    add_heading_1(doc, "3. 5-Stage Supply Chain Protocol & Quality Standardization")
    
    p_sc_lead = doc.add_paragraph()
    p_sc_lead.paragraph_format.space_before = Pt(2)
    p_sc_lead.paragraph_format.space_after = Pt(4)
    p_sc_lead.paragraph_format.line_spacing = 1.15
    p_sc_lead.add_run(
        "To guarantee >96% catalogue data accuracy, the FPO operates a synchronized 5-stage operating sequence. "
        "No produce is harvested until firm buyer pre-booking is locked in escrow:"
    )

    tbl_stages = doc.add_table(rows=6, cols=4)
    tbl_stages.alignment = WD_TABLE_ALIGNMENT.CENTER
    stg_widths = [Inches(1.2), Inches(1.2), Inches(2.6), Inches(2.0)]
    set_table_borders(tbl_stages)
    
    s_hdr = tbl_stages.rows[0].cells
    s_hdr[0].paragraphs[0].add_run("Stage")
    s_hdr[1].paragraphs[0].add_run("Time Window")
    s_hdr[2].paragraphs[0].add_run("Key Operational Activities")
    s_hdr[3].paragraphs[0].add_run("SLA & Milestone Output")
    style_table_header(tbl_stages.rows[0], stg_widths, hex_bg="0F172A")
    
    stg_rows = [
        ("1. Ingestion", "T - 72 Hours", "Farmer submits harvest intent, estimated crates, and 3 standard photos via WhatsApp bot.", "Unique Batch ID assigned; geo-tagged field verification."),
        ("2. Quality Audit", "T - 48 Hours", "Village scout visits field, verifies brix, diameter, and checks photos with color strip.", "Agronomist signs off; Grade A/B/C classification confirmed."),
        ("3. Catalogue Live", "T - 36 Hours", "Lot published on web catalogue; automated 7:00 AM WhatsApp broadcast to 120+ buyers.", ">96% data accuracy SLA enforced before broadcast."),
        ("4. Pre-Booking", "T - 18 Hours", "Buyers reserve lots with advance deposit; farmer receives confirmed harvest order.", "Zero uncommitted harvesting; dawn harvest synchronized."),
        ("5. Dispatch & Payout", "T + 24 Hours", "Produce graded into HDPE crates, transported via consolidated LCV, digital GRN issued.", "100% digital UPI settlement credited directly to farmer.")
    ]
    for idx, r_data in enumerate(stg_rows):
        row = tbl_stages.rows[idx + 1]
        for c_idx, val in enumerate(r_data):
            row.cells[c_idx].paragraphs[0].add_run(val)
        style_table_row(row, stg_widths, is_even=(idx % 2 == 1))

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    add_heading_2(doc, "The Mandatory 3-Photo Visual Calibration Standard")
    add_bullet(doc, "1. Canopy / Field Photo:", "Shows maturity, plant vigor, pest status, and confirms the harvest readiness date.")
    add_bullet(doc, "2. Crated Top-View Photo:", "Shows assortment uniformity, skin gloss, and absence of physical defects across 20 kg crates.")
    add_bullet(doc, "3. Cross-Section with Calibration Strip:", "Cross-section cut placed next to an official 30 cm ruler and 24-patch color checker card to prove true diameter, internal color, and seed maturity.")

    # Image 1: Calibrated Produce Crate Photo
    add_figure(
        doc,
        "assets_doc/photo_crate_calibration.jpg",
        "Figure 3: Quality Standardization in Practice — Harvested Grade A Tomatoes in Ventilated HDPE Crates with Digital Color Checker and Calibrated Reference Ruler"
    )

    doc.add_page_break()

    # =========================================================================
    # PAGE 5: 9-BOX BUSINESS MODEL CANVAS (BMC)
    # =========================================================================
    add_heading_1(doc, "4. 9-Box Business Model Canvas (BMC)")
    
    p_bmc_lead = doc.add_paragraph()
    p_bmc_lead.paragraph_format.space_before = Pt(2)
    p_bmc_lead.paragraph_format.space_after = Pt(4)
    p_bmc_lead.paragraph_format.line_spacing = 1.15
    p_bmc_lead.add_run(
        "The business model transitions the FPO from a passive community group into a self-sustaining commercial bridge. "
        "Below is the complete 9-box operational framework:"
    )

    tbl_bmc = doc.add_table(rows=3, cols=3)
    tbl_bmc.alignment = WD_TABLE_ALIGNMENT.CENTER
    bmc_widths = [Inches(2.33), Inches(2.33), Inches(2.34)]
    set_table_borders(tbl_bmc)

    def populate_bmc_cell(cell, title, bullets, is_even=False):
        set_cell_background(cell, "F8FAFC" if is_even else "FFFFFF")
        set_cell_margins(cell, top=100, bottom=100, left=120, right=120)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(2)
        r_t = p.add_run(title + "\n")
        r_t.font.name = "Arial"
        r_t.font.size = Pt(8.5)
        r_t.font.bold = True
        r_t.font.color.rgb = COLOR_PRIMARY
        for b in bullets:
            p_b = cell.add_paragraph()
            p_b.paragraph_format.space_before = Pt(0)
            p_b.paragraph_format.space_after = Pt(1)
            p_b.paragraph_format.line_spacing = 1.12
            r_b = p_b.add_run("• " + b)
            r_b.font.name = "Arial"
            r_b.font.size = Pt(8)
            r_b.font.color.rgb = COLOR_TEXT

    # Row 1
    populate_bmc_cell(tbl_bmc.cell(0, 0), "KEY PARTNERS", ["180 Smallholder Farmers", "NABARD / SFAC (Grants)", "Meta WhatsApp Cloud API", "Local LCV Logistics Fleet", "Input Suppliers & Agronomists"])
    populate_bmc_cell(tbl_bmc.cell(0, 1), "KEY ACTIVITIES", ["72h Pre-Harvest Cataloguing", "Field QA & Calibration Audits", "Buyer Demand Aggregation", "Crating & Route Milk-Runs", "T+24h Digital UPI Settlement"])
    populate_bmc_cell(tbl_bmc.cell(0, 2), "VALUE PROPOSITIONS", ["For Farmers: +25.8% Net Cash Gain (+₹451/Qtl), zero transit losses, guaranteed T+24h payout.", "For Buyers: Visual proof without site visits, +36h shelf life, zero hidden cuts."])

    # Row 2
    populate_bmc_cell(tbl_bmc.cell(1, 0), "KEY RESOURCES", ["2 Village Field Scouts", "Calibrated QC Grading Kits", "1,200 Reusable HDPE Crates", "Web Catalogue & WhatsApp Bot", "3 Collection Hub Facilities"], is_even=True)
    populate_bmc_cell(tbl_bmc.cell(1, 1), "CUSTOMER RELATIONSHIPS", ["Dedicated Account Desk for Retail", "WhatsApp Broadcasts for HoReCa", "Automated Quality SLA Sign-offs", "Transparent Digital Weight Slips"], is_even=True)
    populate_bmc_cell(tbl_bmc.cell(1, 2), "CUSTOMER SEGMENTS", ["Tier 1: Modern Retail (45% Vol)", "Tier 2: HoReCa & Kitchens (35% Vol)", "Tier 3: Agro-Processors (20% Vol)", "180 Farmer Producer Members"], is_even=True)

    # Row 3
    populate_bmc_cell(tbl_bmc.cell(2, 0), "CHANNELS", ["Standalone Mobile Web Catalogue", "WhatsApp Automated RFQ Bot", "ONDC Digital AgTech Network", "FPO Village Collection Hubs"])
    populate_bmc_cell(tbl_bmc.cell(2, 1), "COST STRUCTURE", ["Field Scout Salaries (₹36k/mo)", "FPO Ops Manager (₹28k/mo)", "WhatsApp Cloud API (₹5.5k/mo)", "HDPE Crate Amortization (₹12k/mo)", "Spoilage Reserve 0.25% (₹16.6k/mo)"])
    populate_bmc_cell(tbl_bmc.cell(2, 2), "REVENUE STREAMS", ["3.5% Trade Facilitation: ₹2.33L/mo", "₹50 / Lot QC Listing Fee: ₹8.4k/mo", "1.0% Crating/Logistics Margin: ₹66.5k/mo", "Total Gross Revenue: ₹3.08 Lakhs/mo"])

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    add_heading_2(doc, "Core Defensible Moats")
    add_bullet(doc, "1. Calibrated Visual Trust:", "Traders cannot replicate our standardized photo calibration scale without field presence, preventing visual fraud.")
    add_bullet(doc, "2. High Cluster Density:", "180 farmers situated within a 15 km radius creates highly efficient milk-run logistics (LCVs achieve 92% capacity utilization).")
    add_bullet(doc, "3. Zero Inventory Risk:", "The FPO acts purely as a transaction facilitator and quality guarantor, holding zero crop ownership or price depreciation risk.")

    doc.add_page_break()

    # =========================================================================
    # PAGE 6: FINANCIAL ARCHITECTURE & UNIT ECONOMICS
    # =========================================================================
    add_heading_1(doc, "5. Financial Architecture & Unit Economics (Company Earnings)")
    
    make_callout_box(
        doc,
        [
            "Gross Merchandise Value (GMV): ₹66,52,800 / month (~₹66.5 Lakhs) across 40 lots/week @ ₹2,200/Qtl baseline.",
            "Gross Company Revenue: ₹3,07,776 / month (~₹3.08 Lakhs) via 3.5% trade fee + QC fees + crating logistics.",
            "Monthly Operating Costs: -₹1,02,632 / month for 2 field scouts, ops manager, cloud API, and crate maintenance.",
            "Net Retained Surplus (Profit): ₹2,05,144 / month (~₹2.05 Lakhs / month) → Annualized Profit: ₹24,61,728 / year."
        ],
        border_color="059669",
        bg_color="F0FDF4",
        title="MONTHLY FINANCIAL SNAPSHOT"
    )

    add_heading_2(doc, "Monthly Operating Financial Waterfall")

    tbl_fin = doc.add_table(rows=6, cols=3)
    tbl_fin.alignment = WD_TABLE_ALIGNMENT.CENTER
    fin_widths = [Inches(3.2), Inches(1.8), Inches(2.0)]
    set_table_borders(tbl_fin)
    
    f_hdr = tbl_fin.rows[0].cells
    f_hdr[0].paragraphs[0].add_run("Financial Revenue & Expense Head")
    f_hdr[1].paragraphs[0].add_run("Monthly Amount (₹)")
    f_hdr[2].paragraphs[0].add_run("Basis of Calculation")
    style_table_header(tbl_fin.rows[0], fin_widths, hex_bg="0F172A")
    
    fin_rows = [
        ("1. Catalogue Facilitation Commission", "₹2,32,848", "3.5% applied on monthly GMV of ₹66,52,800."),
        ("2. Digital QC Audit & Listing Fee", "₹8,400", "₹50 flat fee per verified lot across 168 monthly lots."),
        ("3. Consolidated Logistics & Crating Margin", "₹66,528", "1.0% efficiency rebate on bulk vehicle dispatch."),
        ("TOTAL GROSS MONTHLY REVENUE", "₹3,07,776", "Sum of all three commercial revenue streams."),
        ("Less: Operational OPEX (Scouts, Mgr, API, Crates)", "-₹1,02,632", "2 Scouts (₹36k) + Mgr (₹28k) + Tech/Crates/Buffer (₹38.6k).")
    ]
    for idx, r_data in enumerate(fin_rows):
        row = tbl_fin.rows[idx + 1]
        for c_idx, val in enumerate(r_data):
            row.cells[c_idx].paragraphs[0].add_run(val)
        style_table_row(row, fin_widths, is_even=(idx % 2 == 1))

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # Chart 3: Financial Waterfall
    add_figure(
        doc,
        "assets_doc/chart_financial_waterfall.png",
        "Figure 4: FPO Monthly Unit Economics — Revenue Streams vs. OPEX vs. Net Retained Profit (₹2.05L / Month)"
    )

    p_fpu = doc.add_paragraph()
    p_fpu.paragraph_format.space_before = Pt(4)
    p_fpu.paragraph_format.space_after = Pt(2)
    p_fpu.paragraph_format.line_spacing = 1.15
    r_fpu_title = p_fpu.add_run("Farmer Wealth Creation Impact: ")
    r_fpu_title.font.bold = True
    r_fpu_title.font.color.rgb = COLOR_PRIMARY
    p_fpu.add_run(
        "By replacing traditional mandi middlemen deductions with our 3.5% service fee, farmers earn "
        "+₹451.75 extra per quintal (+25.8% net cash increase). Over 12 months, this injects ₹1.64 Crores "
        "directly into 180 smallholder rural households."
    )

    doc.add_page_break()

    # =========================================================================
    # PAGE 7: RISK ENGINEERING & 90-DAY IMPLEMENTATION ROADMAP
    # =========================================================================
    add_heading_1(doc, "6. Risk Engineering & 90-Day Scaling Roadmap")
    
    p_risk_lead = doc.add_paragraph()
    p_risk_lead.paragraph_format.space_before = Pt(2)
    p_risk_lead.paragraph_format.space_after = Pt(4)
    p_risk_lead.paragraph_format.line_spacing = 1.15
    p_risk_lead.add_run(
        "Agricultural supply chains face systemic risks. The table below details our 5 core operational defenses:"
    )

    tbl_risks = doc.add_table(rows=6, cols=3)
    tbl_risks.alignment = WD_TABLE_ALIGNMENT.CENTER
    risk_widths = [Inches(1.8), Inches(2.2), Inches(3.0)]
    set_table_borders(tbl_risks)
    
    r_hdr = tbl_risks.rows[0].cells
    r_hdr[0].paragraphs[0].add_run("Critical Risk")
    r_hdr[1].paragraphs[0].add_run("Potential Negative Impact")
    r_hdr[2].paragraphs[0].add_run("FPO Operational Defense & Protocol")
    style_table_header(tbl_risks.rows[0], risk_widths, hex_bg="0F172A")
    
    risk_rows = [
        ("1. Photo Drift / Visual Fraud", "Buyer rejects produce at DC, claiming real harvest doesn't match photo.", "Mandatory color checker strip & ruler in photo 3; 100% pre-dispatch check by field scout."),
        ("2. Harvest Weather Delays", "Sudden rainfall halts picking; unfulfilled buyer orders.", "12-hour automated WhatsApp status ping; standby lot reserve in adjacent micro-climates."),
        ("3. Transit Spoilage / Bruising", "Squashed produce in unventilated transit reduces saleable weight by 18%.", "Multi-trip ventilated HDPE crates eliminate gunny-sack compression; damages drop to <2.5%."),
        ("4. Farmer Side-Selling", "Farmer breaches contract if spot mandi price spikes suddenly.", "Guaranteed T+24h digital UPI payout + 50% year-end profit dividend retains 94% farmer loyalty."),
        ("5. Buyer Payment Default", "Institutional buyer delays payout beyond contract terms.", "Mandatory 20% advance booking deposit held in escrow; 7-day credit limit on formal bank LC.")
    ]
    for idx, r_data in enumerate(risk_rows):
        row = tbl_risks.rows[idx + 1]
        for c_idx, val in enumerate(r_data):
            row.cells[c_idx].paragraphs[0].add_run(val)
        style_table_row(row, risk_widths, is_even=(idx % 2 == 1))

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    add_heading_2(doc, "90-Day Implementation Roadmap: Pilot to Scale")
    add_bullet(doc, "• Month 1 (Days 1–30) — Foundation & Pilot:", "Onboard 40 lead farmers across 2 vegetable hubs; calibrate testing kits; run 15 trial lots/week; validate 3-photo checklist.")
    add_bullet(doc, "• Month 2 (Days 31–60) — Commercial Traction:", "Scale to 80 farmers and 20 lots/week; onboard 15 institutional buyers; deploy T+24h UPI payouts; maintain <3% rejection rate.")
    add_bullet(doc, "• Month 3 (Days 61–90) — Full 180-Farmer Scale:", "All 180 members active; 40 lots/week stabilized (72 MT); integrate with ONDC for automated B2B procurement routing.")

    # Chart 4: Scaling Trajectory
    add_figure(
        doc,
        "assets_doc/chart_scaling_trajectory.png",
        "Figure 5: 90-Day Operational Scaling Trajectory — Growth from 40 to 180 Farmers and 27 to 72 MT Weekly Volume"
    )

    doc.add_page_break()

    # =========================================================================
    # PAGE 8: DIGITAL PROTOTYPE & EXAMINER EVALUATION GUIDE
    # =========================================================================
    add_heading_1(doc, "7. Digital Prototype Demonstration & Examiner Guide")
    
    p_proto_lead = doc.add_paragraph()
    p_proto_lead.paragraph_format.space_before = Pt(1)
    p_proto_lead.paragraph_format.space_after = Pt(2)
    p_proto_lead.paragraph_format.line_spacing = 1.15
    p_proto_lead.add_run(
        "A working web prototype has been deployed live on GitHub Pages to demonstrate "
        "the pre-harvest catalogue during faculty viva examinations:"
    )

    add_heading_2(doc, "Live Prototype Modules (In demo/index.html)")
    add_bullet(doc, "1. Produce Marketplace:", "Displays all 40 weekly lots with real-time filters by crop category, grade, and harvest countdown.")
    add_bullet(doc, "2. Calibrated Lot Spec Sheet:", "Opens high-res photos, calibrated ruler measurements, Brix content, and AGMARK tolerances.")
    add_bullet(doc, "3. WhatsApp RFQ Engine:", "Pre-formats institutional purchase requests into WhatsApp messages for one-click buyer quotation.")
    add_bullet(doc, "4. Farmer Submission Portal:", "Allows farmers and scouts to log harvest intent, crop specs, and simulated photo uploads.")
    add_bullet(doc, "5. FPO Quality Gate Desk:", "FPO agronomists audit pending lots, approve verified listings, and reject non-compliant submissions.")

    # Image 2: Mobile Catalogue Photo (scaled to fit perfectly on Page 8)
    add_figure(
        doc,
        "assets_doc/photo_mobile_catalogue.jpg",
        "Figure 6: Mobile Catalogue Field Application — Village Scout Verifying Pre-Harvest Listings in Field",
        width=Inches(4.4)
    )

    add_heading_2(doc, "5-to-15 Minute Viva Presentation Guide")
    
    tbl_viva = doc.add_table(rows=5, cols=3)
    tbl_viva.alignment = WD_TABLE_ALIGNMENT.CENTER
    viva_widths = [Inches(1.1), Inches(2.1), Inches(3.8)]
    set_table_borders(tbl_viva)
    
    v_hdr = tbl_viva.rows[0].cells
    v_hdr[0].paragraphs[0].add_run("Time")
    v_hdr[1].paragraphs[0].add_run("Screen / View")
    v_hdr[2].paragraphs[0].add_run("Presenter Talking Points & Actions")
    style_table_header(tbl_viva.rows[0], viva_widths, hex_bg="059669")
    
    viva_rows = [
        ("0:00 – 2:30", "Research Portal (Slide 1)", "Explain Mandi Squeeze: 180 farmers harvesting blind lose 25.8% to middlemen deductions."),
        ("2:30 – 5:00", "Research Portal (Slides 2 & 3)", "Walk through 3 buyer segments (Retail 45%, HoReCa 35%, Processors 20%) & 5-stage flow."),
        ("5:00 – 9:30", "Interactive Demo (demo/)", "Filter 40 lots by Grade A, open spec sheet, generate WhatsApp RFQ, and show FPO QC approval."),
        ("9:30 – 13:00", "Research Portal (Calculator)", "Move sliders to prove ₹66.5L GMV, ₹3.08L gross revenue, ₹2.05L net profit, and +₹451/Qtl gain.")
    ]
    for idx, r_data in enumerate(viva_rows):
        row = tbl_viva.rows[idx + 1]
        for c_idx, val in enumerate(r_data):
            row.cells[c_idx].paragraphs[0].add_run(val)
        style_table_row(row, viva_widths, is_even=(idx % 2 == 1))

    # Master Verification Links Box
    make_callout_box(
        doc,
        [
            "Master Launchpad: https://somyacodes07.github.io/GTM_major_project/",
            "Interactive Demo Prototype: https://somyacodes07.github.io/GTM_major_project/demo/",
            "Research & Slide Deck: https://somyacodes07.github.io/GTM_major_project/research/",
            "GitHub Repository: https://github.com/somyacodes07/GTM_major_project"
        ],
        border_color="059669",
        bg_color="F0FDF4",
        title="🔗 MASTER PROJECT VERIFICATION LINKS"
    )

    output_path = "/Users/somyajeet/Git/college projects/GTM_major_project/Case_Study_51_Farm_Produce_Catalogue_Documentation.docx"
    doc.save(output_path)
    print(f"Documentation saved successfully to: {output_path}")

if __name__ == "__main__":
    create_document()
