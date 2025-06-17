import fs from "fs";
import path from "path";

export interface Item {
  id: string;
  set: string;
  author: string;
  name: string;
  desc: string[];
  img: string;
  note?: {
    title: string;
    content: string[];
  };
}

export interface ItemsData {
  items: Item[];
}

export function getItemsData(): ItemsData {
  const jsonPath = path.join(process.cwd(), "src", "data", "items.json");
  const jsonText = fs.readFileSync(jsonPath, "utf-8");
  return JSON.parse(jsonText);
}

export const d2 = {
  id: "item-d2",
  set: "D",
  author: "정지은 Ji-eun Jung",
  name: "Harmony, or Something Like It",
  desc: [
    "She entered the national day banquet of Country T, held at a high-end hotel, dressed in heels and a voluminous, modern ceremonial gown. One hand lightly gathered her sweeping skirt. Her eyes scanned the crowd nervously for a certain man, though outwardly, she moved with quiet poise.",
    "What unsettled her most was the fear of being stopped at the entrance—asked to prove her identity, to present an invitation, to justify her presence. What she didn’t realise then was how few people wore traditional dress at such events, especially among those in the diplomatic circle; she was the only one. There was no way the embassy staff wouldn’t recognise her.",
    "Years later, she would somehow become one of the most talked-about figures at the banquet each year.",
    "Once she found her partner, she changed her expression. The woman known for her poker face now made her rounds, exchanging pleasantries. In this setting—one she could never quite escape—she resigned herself to playing the diplomat’s perfect other half. No one ever asked questions outside of that role.",
    "When her smile began to strain the corners of her face, she asked herself quietly, half-laughing: What am I even doing here?",
    "She had grown up surrounded by words and traps designed to cut her down. The only way forward was to accept, to replicate, and to internalise the demand to be flawless in every way. In her dysfunctional family, she had chosen the role of the “hero”: a daughter carrying the outcomes traditionally expected of a son.",
    "In casual settings, when she met new people and exchanged background details, conversations always shifted after they learned her companion’s profession. The spotlight turned to him. Rarely did it return to her.",
    "Especially with older women, once they heard, their eyes sparkled with admiration—or something close to it. They praised her fortune, asked how they met, and what the secret was. She responded with a polite, unreadable smile.",
  ],
  note: {
    title: "＊Chef’s Note｜Gamja-tang (감자탕)",
    content: [
      "This dish is often translated as “potato pork bone soup”—a popular but mistaken interpretation. Even many native speakers are unaware of the misreading.",
      "Originally, gamja referred not to potatoes, but to gamju—a now-obscure term for a specific cut of pork spine. The phonetic overlap led to confusion, and because the dish eventually did incorporate actual potatoes, the assumption became widespread: It must be named for what’s visible in the pot.",
      "But the truth is, the dish was never named for the garnish. The depth came from what lay beneath. The broth was built on slow-boiled bones. That was the core. That was the thing that made it whole.",
    ],
  },
  img: "/placeholder.svg",
};
