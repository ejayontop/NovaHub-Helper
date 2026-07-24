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
      .setColor(getColor('brand'))
      .setTitle('1K+ Members FREE Premium Key by 3 Days (Free)')
       .setImage('https://raw.githubusercontent.com/ejayontop/NovaHub-Helper/refs/heads/main/src/commands/Community/novahubbanner.png')
      .setDescription('New Expiration Date: July 27, 2026');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('get_free_key').setLabel('Get Key').setStyle(ButtonStyle.Success),
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
