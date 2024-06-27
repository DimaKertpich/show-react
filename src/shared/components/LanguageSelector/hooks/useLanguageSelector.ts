import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { language } from "../../../state/language";
import { LanguageSelectorResultProps } from "../LanguageSelectorProps";
import { Option } from "../../../types";
import i18n from "../../../../i18n";

const useLanguageSelector = (): LanguageSelectorResultProps => {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState<string>(
    language.atoms.languageSelector,
  );

  const languagesOptions: Option[] = useMemo(() => {
    return [
      {
        value: "en-US",
        icon: "/img/usa.png",
      },
      {
        value: "ua-UA",
        icon: "/img/ua.png",
      },
    ];
  }, []);

  const onSelectLanguage = useCallback(
    async (language: string) => {
      setSelectedLanguage(language);
      await i18n.changeLanguage(language);
    },
    [setSelectedLanguage],
  );

  return { selectedLanguage, onSelectLanguage, languagesOptions };
};
export default useLanguageSelector;
