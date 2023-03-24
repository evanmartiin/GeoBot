import { ClientReady } from "./clientReady.js";
import { GuildMemberAdd } from "./guildMemberAdd.js";
import { InteractionCreate } from "./interactionCreate.js";

export const events = [ClientReady, InteractionCreate, GuildMemberAdd];