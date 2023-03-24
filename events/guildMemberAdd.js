import { Events } from "discord.js";
import { EMOJIS } from "../constants.js";

export const GuildMemberAdd = {
  name: Events.GuildMemberAdd,
  execute(user) {
    user.send({ content: `${EMOJIS.WAVE} Bienvenue !\nLe **Country of the Day**, c'est un nouveau pays tous les matins à 10h30.\n\nPour le recevoir, écris \`/subscribe\` dans <#${process.env.DISCORD_GENERAL_CHANNEL_ID}>.\nPour te désinscrire, c'est \`/unsubscribe\`.` })
  },
};
