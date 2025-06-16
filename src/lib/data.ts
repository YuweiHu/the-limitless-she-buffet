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
