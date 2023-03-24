import { SlashCommandBuilder } from "discord.js";
import { EMOJIS, TRIGGER_TIME } from "../constants.js";

export const subscribe = {
  data: new SlashCommandBuilder()
    .setName("subscribe")
    .setDescription("Subscribe for the Country of the Day."),
  async execute(interaction) {
    const role = await interaction.guild.roles.fetch(process.env.DISCORD_SUBSCRIBED_ROLE_ID);

    if (interaction.member.roles.cache.has(role.id)) {
      await interaction.reply({ content: `${EMOJIS.THINK} You're already subscribed.`, ephemeral: true });
      return;
    } else {
      interaction.member.roles.add(role);
      await interaction.reply({ content: `${EMOJIS.PARTY} You successfully subscribed!\nYou'll be mentioned __everyday at ${TRIGGER_TIME}__ for the **Country of the Day**.\nYou now have access to <#${process.env.DISCORD_CHANNEL_ID}>.`, ephemeral: true });
      return;
    }
  },
};