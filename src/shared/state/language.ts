import { atom } from "recoil";

const keys = {
  language: "language",
};

const atoms = {
  languageSelector: atom({
    key: keys.language,
    default: "en-US",
  }),
};
export const language = {
  keys,
  atoms,
};
