import config from '../config/application.js';

export function buildPresenceActivities(client) {
  const memberCount = client.guilds.cache.reduce(
    (total, guild) => total + guild.memberCount,
    0
  );
  const formatted = memberCount.toLocaleString();

  return config.bot.presence.activities.map((activity) => ({
    ...activity,
    name: activity.name.replace('{memberCount}', formatted),
  }));
}

export function updatePresence(client) {
  client.user.setPresence({
    status: config.bot.presence.status,
    activities: buildPresenceActivities(client),
  });
}
