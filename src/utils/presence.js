import config from '../config/application.js';
import { getActiveCount } from '../services/activeScriptService.js';

export function buildPresenceActivities(client) {
  const memberCount = client.guilds.cache.reduce(
    (total, guild) => total + guild.memberCount,
    0
  );
  const formattedMembers = memberCount.toLocaleString();
  const formattedActive = getActiveCount().toLocaleString();

  return config.bot.presence.activities.map((activity) => ({
    ...activity,
    name: activity.name
      .replace('{memberCount}', formattedMembers)
      .replace('{activePlayers}', formattedActive),
  }));
}

export function updatePresence(client) {
  client.user.setPresence({
    status: config.bot.presence.status,
    activities: buildPresenceActivities(client),
  });
}
