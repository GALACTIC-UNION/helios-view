# 🌐 HELIOS VIEW — VISUALIA God Mode Dashboard

> **HELIOS CODEX** — Autonomous Command Intelligence Dashboard  
> *The Eyes and Brain Interface for Sovereign Operators, Institutions, and Retail*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev)
[![WebGPU](https://img.shields.io/badge/Rendering-WebGPU-orange)]()
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)

---

## Overview

HELIOS VIEW is the VISUALIA God Mode Dashboard — a 3D geopolitical command center for the HELIOS CODEX protocol. Real-time ingestion and fusion of $1T+ on-chain + off-chain data streams at 100ms latency, with role-adaptive interfaces for Central Banks, Institutions, and Retail.

---

## User Roles & Views

### 🏛️ Central Bank Governor Mode
- Live collateral ratio & HELIOS supply
- Cross-border SNP settlement volume
- ATLAS policy decisions with rationale
- VULCAN proof-of-reserves (ZK-verified)
- Emergency override: biometric + MPC → protocol pause in 0.3s

### 🏦 Institution / Auditor Mode
- **God Mode Simulator**: run 2008 crisis, UST collapse, SWIFT shutdown
- Real-time ARCHON stability engine status
- RWA portfolio breakdown with live NAV
- Regulatory report generation (SEC/MiCA/FCA)
- Audit trail with cryptographic proof

### 👤 Retail User Mode
- HELIOS balance + real-time yield (4–8% APY)
- RWA backing breakdown by asset class
- Carbon footprint per transaction
- DeFi collateral positions
- Portfolio analytics

---

## Architecture

```
src/
├── app/                           # Next.js 14 app router
│   ├── dashboard/
│   │   ├── governor/page.tsx      # Central Bank Governor view
│   │   ├── institution/page.tsx   # Institution / Auditor view
│   │   └── retail/page.tsx        # Retail user view
│   ├── api/                       # API routes (WebSocket relay + REST)
│   └── layout.tsx
├── components/
│   ├── globe/
│   │   ├── HeliosGlobe3D.tsx      # WebGPU 3D geopolitical globe
│   │   └── MoneyFlowLayer.tsx     # Real-time global money flow visualization
│   ├── panels/
│   │   ├── CollateralBreakdown.tsx
│   │   ├── ATLASPolicyFeed.tsx
│   │   ├── VULCANReserveProof.tsx
│   │   ├── ARCHONStatusPanel.tsx
│   │   └── DepegSimulator.tsx     # God Mode crisis simulator
│   ├── charts/
│   │   ├── HeliosSupplyChart.tsx
│   │   ├── CollateralRatioGauge.tsx
│   │   └── YieldAPYTracker.tsx
│   └── auth/
│       ├── BiometricVerify.tsx    # Governor biometric auth
│       └── MPCWalletConnect.tsx   # MPC wallet connection
├── lib/
│   ├── atlas-client.ts            # ATLAS AGI data stream client
│   ├── vulcan-client.ts           # VULCAN proof-of-reserves consumer
│   ├── archon-client.ts           # ARCHON stability status subscriber
│   ├── websocket.ts               # Real-time data pipeline (100ms latency)
│   └── webgpu-renderer.ts         # WebGPU 3D rendering engine
└── styles/
    └── globals.css                # Sovereign dark theme
```

---

## Features

- **3D Globe**: WebGPU-powered geopolitical visualization of HELIOS flows
- **God Mode Simulator**: Replay 2008 financial crisis or UST collapse with live HELIOS response
- **Natural Language Commands**: "Show depeg risk in BRICS + simulate response"
- **Real-time Data**: 100ms latency ingestion from ATLAS, VULCAN, ARCHON
- **Post-Quantum E2E Encryption**: All dashboard data encrypted with CRYSTALS-Kyber
- **Role-Based Access Control**: Governor / Auditor / Institution / Retail
- **Regulatory Export**: One-click SEC/MiCA/FCA compliance report generation

---

## Setup

```bash
npm install
npm run dev          # Development
npm run build        # Production build
npm run start        # Production server
```

Environment variables: see `.env.example`

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| UI | React 18 + Tailwind CSS |
| 3D Rendering | WebGPU + Three.js |
| State | Zustand + React Query |
| Real-time | WebSocket + Server-Sent Events |
| Auth | NextAuth + Biometric API |
| Charts | D3.js + Recharts |
| Crypto | CRYSTALS-Kyber (post-quantum) |

---

## License

MIT — Built by [GALACTIC-UNION](https://github.com/GALACTIC-UNION) · Architects of Light
