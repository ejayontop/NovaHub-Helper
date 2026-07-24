const EPHEMERAL_LIFETIME_MS = 50 * 1000;

async function replyThenDelete(interaction, content) {
  await interaction.reply({ content, ephemeral: true });
  setTimeout(() => {
    interaction.deleteReply().catch(() => {});
  }, EPHEMERAL_LIFETIME_MS);
}

export default [
  {
    name: 'get_script',
    async execute(interaction) {
      await replyThenDelete(
        interaction,
        'loadstring(game:HttpGet("https://raw.githubusercontent.com/NovaHubRBLX/NovaHub/refs/heads/main/novahub.lua"))()'
      );
    },
  },
  {
    name: 'get_free_key',
    async execute(interaction) {
      await replyThenDelete(
        interaction,
        'NOVAHUB_Q7mZ2pL9xR'
      );
    },
  },
];
