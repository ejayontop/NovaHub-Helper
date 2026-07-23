// src/commands/Community/scriptpanel.js
import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { getColor } from '../../config/bot.js';

export default {
  category: 'Community',
  data: new SlashCommandBuilder()
    .setName('scriptpanel')
    .setDescription('Post the Get Script panel'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(getColor('primary'))
      .setTitle('Get the Script')
      .setDescription('Click below to get the script.');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('get_script').setLabel('Get Script').setStyle(ButtonStyle.Primary),
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
