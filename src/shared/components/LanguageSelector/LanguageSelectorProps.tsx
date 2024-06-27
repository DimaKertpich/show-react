import { Option } from "../../types";

export type LanguageSelectorResultProps = {
  onSelectLanguage: (language: string) => void;
  languagesOptions: Option[];
  selectedLanguage: string;
};

export type LanguageSelectorProps = LanguageSelectorResultProps;
