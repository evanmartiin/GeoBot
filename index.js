import { COUNTRIES, START_DATE, TRIGGER_TIME } from "./constants.js";
import { discordConnect } from "./discordConnect.js";
import { getMessageOfToday } from "./countryMessage.js";
import { AttachmentBuilder } from "discord.js";
import sharp from "sharp";
import dotenv from "dotenv";
dotenv.config();

let discord = null, channel = null;

const main = async () => {
  discord = await discordConnect();
  channel = await discord.guilds.cache
    .get(process.env.DISCORD_SERVER_ID)
    .channels.fetch(process.env.DISCORD_CHANNEL_ID);

  setImmediate(() => tick(getTime()));
};

const tick = async (previousTime) => {
  let time = getTime();
  if (time === TRIGGER_TIME && time !== previousTime) {
    const country = pickCountryOfToday(new Date());
    const message = await getMessageOfToday(country);
    const flag = await getFlagImage(country.iso);
    await channel.send({ content: message, files: [flag] });
  }
  previousTime = time;
  setImmediate(() => tick(previousTime));
};

function getTime() {
  return `${new Date().getHours()}:${new Date().getMinutes()}`;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

const pickCountryOfToday = (date) => {
  const daysSinceStart = Math.floor(
    (date.getTime() - START_DATE.getTime()) / 1000 / 60 / 60 / 24
  );
  return COUNTRIES[mod(daysSinceStart, COUNTRIES.length)];
};

const getFlagImage = async (iso) => {
  const svg = await fetch(`https://flagicons.lipis.dev/flags/4x3/${iso.toLowerCase()}.svg`);
  const png = await sharp(await svg.arrayBuffer()).png().resize(320, 240).toBuffer();
  return new AttachmentBuilder(png, `${iso}.png`)
}

main();
