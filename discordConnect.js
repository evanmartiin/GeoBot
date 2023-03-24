import { Client, Collection, GatewayIntentBits } from "discord.js";
import { events } from "./events/index.js";
import { commands } from "./commands/index.js";

export const discordConnect = async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

  for (const event of events) {
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }

  await client.login(process.env.DISCORD_TOKEN);

  client.commands = new Collection();

  for (const command of commands) {
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.warn(
        `The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }

  return client;
};
