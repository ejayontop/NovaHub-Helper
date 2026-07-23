const EPHEMERAL_LIFETIME_MS = 60 * 1000;

async function replyThenDelete(interaction, content) {
  await interaction.reply({ content, ephemeral: true });
  setTimeout(() => {
    interaction.deleteReply().catch(() => {});
  }, EPHEMERAL_LIFETIME_MS);
}

const handlers = {
  get_script: async (interaction) => {
    await replyThenDelete(
      interaction,
      'loadstring(game:HttpGet("https://raw.githubusercontent.com/NovaHubRBLX/NovaHub/refs/heads/main/novahub.lua"))()'
    );
  },

  get_free_key: async (interaction) => {
    await replyThenDelete(
      interaction,
      'NOVAHUB_8f2kx7me'
    );
  },
};

export default {
  customIds: ['get_script', 'get_free_key'],
  async execute(interaction) {
    const handler = handlers[interaction.customId];
    if (handler) await handler(interaction);
  },
};
