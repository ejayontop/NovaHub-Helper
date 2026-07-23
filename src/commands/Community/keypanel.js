// src/commands/Community/keypanel.js
import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { getColor } from '../../config/bot.js';

export default {
  category: 'Community',
  data: new SlashCommandBuilder()
    .setName('keypanel')
    .setDescription('Post the Get Free Key panel'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(getColor('primary'))
      .setTitle('Get Key | Expiration Date: July 24, 2026')
      .setDescription('Click below to get your free key.');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('get_free_key').setLabel('Get Key').setStyle(ButtonStyle.Success),
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
