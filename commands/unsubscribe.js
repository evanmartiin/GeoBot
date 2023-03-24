import { SlashCommandBuilder } from "discord.js";
import { EMOJIS } from "../constants.js";

export const unsubscribe = {
  data: new SlashCommandBuilder()
    .setName("unsubscribe")
    .setDescription("Unsubscribe from the Country of the Day."),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const role = await interaction.guild.roles.fetch(process.env.DISCORD_SUBSCRIBED_ROLE_ID);

    if (interaction.member.roles.cache.has(role.id)) {
      interaction.member.roles.remove(role);
      await interaction.editReply({ content: `${EMOJIS.CRY} You successfully unsubscribed.`});
      return;
    } else {
      await interaction.editReply({ content: `${EMOJIS.THINK} You're not subscribed.\n**/subscribe** if you want to.`});
      return;
    }
  },
};