import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { getColor } from '../config/bot.js';

export default {
  data: new SlashCommandBuilder()
    .setName('keypanel')
    .setDescription('Post the Get Free Key panel'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(getColor('primary'))
      .setTitle('Get Your Free Key')
      .setDescription('Click below to get your free key.');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('get_free_key').setLabel('Get Free Key').setStyle(ButtonStyle.Success),
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
