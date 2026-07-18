// In-memory heartbeat tracking for the "active script users" counter.
const activeSessions = new Map(); // id -> lastSeen timestamp

const STALE_MS = 60 * 1000;       // drop entries with no ping in 90s
const CLEANUP_INTERVAL_MS = 30 * 1000;

setInterval(() => {
  const cutoff = Date.now() - STALE_MS;
  for (const [id, lastSeen] of activeSessions) {
    if (lastSeen < cutoff) activeSessions.delete(id);
  }
}, CLEANUP_INTERVAL_MS).unref();

export function recordHeartbeat(id) {
  activeSessions.set(id, Date.now());
}

export function removeSession(id) {
  activeSessions.delete(id);
}

export function getActiveCount() {
  return activeSessions.size;
}
