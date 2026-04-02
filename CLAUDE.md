# CLAUDE.md — MaxLifeMD / VitaMD (vitamd)

## Project Overview
Affiliate site for MaxLifeMD, a direct-to-consumer telemedicine practice offering HRT and peptide therapy evaluations.
- **GitHub repo:** bb313x/vitamd
- **Owner:** Bryan Boutins
- **Purpose:** Affiliate application intake for MaxLifeMD

## Tech Stack
- Single-file HTML/CSS/JS — no frameworks, no build tools
- **Deployment:** GitHub → Hostinger manual deploy via hPanel
- **Form:** Monday.com WorkForm embedded for affiliate applications
- **CRM:** Monday.com (workspace: bryanboutins-team)

## Business Context
- MaxLifeMD is a DTC telemedicine practice
- This repo is the affiliate-facing site (not the main patient-facing product)
- Affiliates apply via embedded Monday.com WorkForm
- Sister businesses: Lets Grow Digital (LGD), InsureMyBiz123 (daven-insurance)
- Bryan has produced a Bain-style competitive landscape analysis and B2B affiliate playbook for this business

## Deployment Workflow
1. Edit HTML file locally
2. Commit and push to GitHub (bb313x/vitamd)
3. Deploy manually via Hostinger hPanel
4. Monday.com WorkForm handles affiliate application submissions

## Coding Conventions
- Single-file architecture is intentional — do not split into separate CSS/JS files
- Mobile-responsive by default
- No npm, no node_modules, no build step
- CSS variables for all colors and design tokens

## What Claude Should NOT Do
- Do not suggest multi-file architecture
- Do not add npm dependencies or build tools
- Do not expose Monday.com API token in client-side code
- Do not redesign without explicit instruction
- Do not use placeholder copy — ask if real copy is needed
