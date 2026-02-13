export interface ReadStats {
  totalReads: number;
  uniqueReads: number;
  readsLast24h: number;
  readsLast7d: number;
  readsLast30d: number;
}

export interface TrackReadResponse {
  tracked: boolean;
  message: string;
}