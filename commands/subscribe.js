import { SlashCommandBuilder } from "discord.js";
import { EMOJIS, TRIGGER_TIME } from "../constants.js";

export const subscribe = {
  data: new SlashCommandBuilder()
    .setName("subscribe")
    .setDescription("Subscribe for the Country of the Day."),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const role = await interaction.guild.roles.fetch(process.env.DISCORD_SUBSCRIBED_ROLE_ID);

    if (interaction.member.roles.cache.has(role.id)) {
      await interaction.editReply({ content: `${EMOJIS.THINK} You're already subscribed.`});
      return;
    } else {
      interaction.member.roles.add(role);
      await interaction.editReply({ content: `${EMOJIS.PARTY} You successfully subscribed!\nYou'll be mentioned __everyday at ${TRIGGER_TIME}__ for the **Country of the Day**.\nYou now have access to <#${process.env.DISCORD_CHANNEL_ID}>.`});
      return;
    }
  },
};