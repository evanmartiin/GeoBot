import { Configuration, OpenAIApi } from "openai";
import { COUNTRY_NAMES, START_DATE, ORIGINAL_PROMPT, EMOJIS } from "./constants.js";

export const getMessageOfToday = async () => {
  const openai = openaiConnect();
  const country = pickCountryOfToday(new Date());
  const number = COUNTRY_NAMES.indexOf(country) + 1;
  const url = `https://www.google.com/maps/place/${country.replaceAll(" ", "+")}`;
  const countryText = (await openai.createCompletion({
    model: "text-davinci-003",
    prompt: ORIGINAL_PROMPT.replace("COUNTRY_NAME", country),
    max_tokens: 400,
    temperature: 0,
  })).data.choices[0].text.replaceAll("\n", "");
  const date = new Date().toLocaleDateString('fr-fr', { year:"numeric", month:"short", day:"numeric"}).toLocaleUpperCase();
  const message = `@everyone\n\n${EMOJIS.CUP} **COUNTRY OF THE DAY — ${date}**\n\n**${country.toLocaleUpperCase()}** — (${number}/${COUNTRY_NAMES.length})\n\n${countryText}\n\n${EMOJIS.PIN} Google Maps : ${url}`;
  
  return message;
}

const openaiConnect = () => {
  const config = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });
  return new OpenAIApi(config);
};

function mod(n, m) {
  return ((n % m) + m) % m;
}

const pickCountryOfToday = (date) => {
  const daysSinceStart = Math.floor(
    (date.getTime() - START_DATE.getTime()) / 1000 / 60 / 60 / 24
  );
  return COUNTRY_NAMES[mod(daysSinceStart, COUNTRY_NAMES.length)];
};