import { REST, Routes } from 'discord.js';
import { commands } from '../commands/index.js';
import dotenv from "dotenv";
dotenv.config();

const discordCommands = commands.map((command) => command.data.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationCommands(process.env.DISCORD_APP_ID),
			{ body: discordCommands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();