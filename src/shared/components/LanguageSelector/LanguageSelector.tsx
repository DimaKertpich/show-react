import { FC } from "react";
import { LanguageSelectorProps } from "./LanguageSelectorProps";
import { MenuItem, MenuList } from "@mui/material";

const LanguageSelector: FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onSelectLanguage,
  languagesOptions,
}) => {
  return (
    <MenuList
      sx={{
        maxHeight: "200px",
        width: "100%",
        overflow: "auto",
        p: 0,
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {languagesOptions.map((language) => (
        <MenuItem
          key={language.value}
          value={language.value}
          selected={language.value === selectedLanguage}
          onClick={() => onSelectLanguage(language.value)}
        >
          <img src={language.icon} width="30px" height="15px" />
        </MenuItem>
      ))}
    </MenuList>
  );
};
export default LanguageSelector;
