import { Events } from "discord.js";
import { EMOJIS, TRIGGER_TIME } from "../constants.js";

export const GuildMemberAdd = {
  name: Events.GuildMemberAdd,
  execute(user) {
    user.send({ content: `${EMOJIS.WAVE} Bienvenue !\nLe **Country of the Day**, c'est un nouveau pays tous les matins à ${TRIGGER_TIME}.\n\nPour le recevoir, écris \`/subscribe\` dans <#${process.env.DISCORD_GENERAL_CHANNEL_ID}>.\nPour te désinscrire, c'est \`/unsubscribe\`.\n\nN'oublie pas que les informations quotidiennes proviennent de ChatGPT, elles ne sont donc pas vérifiées et des erreurs peuvent être publiées.` })
  },
};
