import { TRIGGER_TIME } from "./constants.js";
import { discordConnect } from "./discordConnect.js";
import { getMessageOfToday } from "./countryMessage.js";
import dotenv from "dotenv";
dotenv.config();

let channel = null;

const main = async () => {
  const discord = await discordConnect();
  channel = await discord.guilds.cache
    .get(process.env.DISCORD_SERVER_ID)
    .channels.fetch(process.env.DISCORD_CHANNEL_ID);

  setImmediate(() => tick(getTime()));
};

const tick = async (previousTime) => {
  let time = getTime();
  if (time === TRIGGER_TIME && time !== previousTime) {
    const message = await getMessageOfToday();
    await channel.send(message);
  }
  previousTime = time;
  setImmediate(() => tick(previousTime));
};

function getTime() {
  return `${new Date().getHours()}:${new Date().getMinutes()}`;
}

main();
