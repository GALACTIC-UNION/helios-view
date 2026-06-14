/**
 * HELIOS CODEX — ATLAS AGI Data Stream Client
 * Real-time monetary policy feed from ATLAS at 100ms latency
 * @author GALACTIC-UNION · HELIOS VIEW
 */

export interface ATLASPolicyState {
  heliusSupply: bigint;
  collateralRatioPercent: number;    // Target: 200%+
  currentPegUSD: number;             // Target: 1.0000
  depegRiskScore: number;            // 0–100 (100 = critical)
  monetaryAction: 'MINT' | 'BURN' | 'HOLD' | 'REBALANCE';
  collateralAllocation: {
    realEstate: number;              // % of basket
    gold: number;
    tBills: number;
    liquid: number;
  };
  nextRebalanceAt: Date;
  atlasConfidence: number;           // 0–1
  timestamp: number;
}

export interface DepegAlert {
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  deviation: number;                 // % from $1.00
  archonLayerTriggered: number;      // 0 = none, 1–3 = defense layers active
  estimatedRecoveryMs: number;
}

export class ATLASClient {
  private ws: WebSocket | null = null;
  private readonly endpoint: string;
  private subscribers: Set<(state: ATLASPolicyState) => void> = new Set();
  private alertSubscribers: Set<(alert: DepegAlert) => void> = new Set();

  constructor(endpoint: string = process.env.NEXT_PUBLIC_ATLAS_WS_URL ?? '') {
    this.endpoint = endpoint;
  }

  connect(): void {
    if (typeof window === 'undefined') return;
    this.ws = new WebSocket(this.endpoint);

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'POLICY_STATE') {
        this.subscribers.forEach(cb => cb(msg.data as ATLASPolicyState));
      } else if (msg.type === 'DEPEG_ALERT') {
        this.alertSubscribers.forEach(cb => cb(msg.data as DepegAlert));
      }
    };

    this.ws.onerror = (e) => console.error('[ATLAS] WebSocket error:', e);
    this.ws.onclose = () => {
      console.warn('[ATLAS] Connection closed — reconnecting in 1s');
      setTimeout(() => this.connect(), 1000);
    };
  }

  subscribe(cb: (state: ATLASPolicyState) => void): () => void {
    this.subscribers.add(cb);
    return () => this.subscribers.delete(cb);
  }

  onDepegAlert(cb: (alert: DepegAlert) => void): () => void {
    this.alertSubscribers.add(cb);
    return () => this.alertSubscribers.delete(cb);
  }

  disconnect(): void {
    this.ws?.close();
    this.ws = null;
  }
}

export const atlasClient = new ATLASClient();
