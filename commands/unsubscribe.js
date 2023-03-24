import { SlashCommandBuilder } from "discord.js";
import { EMOJIS } from "../constants.js";

export const unsubscribe = {
  data: new SlashCommandBuilder()
    .setName("unsubscribe")
    .setDescription("Unsubscribe from the Country of the Day."),
  async execute(interaction) {
    const role = await interaction.guild.roles.fetch(process.env.DISCORD_SUBSCRIBED_ROLE_ID);

    if (interaction.member.roles.cache.has(role.id)) {
      interaction.member.roles.remove(role);
      await interaction.reply({ content: `${EMOJIS.CRY} You successfully unsubscribed.`, ephemeral: true });
      return;
    } else {
      await interaction.reply({ content: `${EMOJIS.THINK} You're not subscribed.\n**/subscribe** if you want to.`, ephemeral: true });
      return;
    }
  },
};