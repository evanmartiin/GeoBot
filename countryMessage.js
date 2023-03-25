import { Configuration, OpenAIApi } from "openai";
import { COUNTRIES, ORIGINAL_PROMPT, EMOJIS } from "./constants.js";

export const getMessageOfToday = async (country) => {
  const openai = openaiConnect();
  const number = COUNTRIES.indexOf(country) + 1;
  const url = `https://www.google.com/maps/place/${country.name.replaceAll(" ", "+")}`;
  const countryText = (await openai.createCompletion({
    model: "text-davinci-003",
    prompt: ORIGINAL_PROMPT.replace("COUNTRY_NAME", country.name),
    max_tokens: 400,
    temperature: 0,
  })).data.choices[0].text.replaceAll("\n", "");
  const date = new Date().toLocaleDateString('fr-fr', { year:"numeric", month:"short", day:"numeric"}).toLocaleUpperCase();
  const message = `@everyone\n\n${EMOJIS.CUP} **COUNTRY OF THE DAY — ${date}**\n\n${getFlagEmoji(country.iso)}**${country.name.toLocaleUpperCase()}** — (${number}/${COUNTRIES.length})\n\n${countryText}\n\n${EMOJIS.PIN} Google Maps : ${url}\n`;
  
  return message;
}

const openaiConnect = () => {
  const config = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });
  return new OpenAIApi(config);
};

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  const emoji = String.fromCodePoint(...codePoints);
  return emoji ? emoji + '  ' : '';
}