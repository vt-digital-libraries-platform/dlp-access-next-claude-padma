// Lightweight health endpoint for EB health checks
export default function handler(req, res) {
  res.status(200).json({ ok: true, ts: new Date().toISOString() });
}
