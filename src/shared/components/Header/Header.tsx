import "../../styles/main.scss";
import {
  AppBar,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { FC } from "react";
import CommonButton from "../CommonButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";
import PopupWindow from "./components/PopupWindow";
import { HeaderProps } from "./HeaderProps";
import Styles from './Header.module.scss';


const Header: FC<HeaderProps> = ({shouldShowPopup, showPopUp}) => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#141414" }}>
      <Container fixed sx={{ minHeight: "70px", pt: "18px" }}>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography className="jostMedium" sx={{ fontSize: "22px" }}>
            {t("header.title")}
          </Typography>
          <Stack direction={"row"} sx={{ pl: "60px" }} spacing={2}>
            <CommonButton text="header.discount" />
            <CommonButton onClick={shouldShowPopup}  text="header.forHim" />
            <CommonButton text="header.deliveryAndPayment" />
            <CommonButton text="header.aboutUs" />
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ ml: "auto" }}
            spacing={2}
          >
            <LanguageSelector />
            <IconButton sx={{ color: "White", cursor: "pointer" }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: "White", cursor: "pointer" }}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: "White", cursor: "pointer" }}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container> 

      <PopupWindow className={showPopUp ? Styles.headerPopUp : Styles.headerPopUpHidden}/>

    </AppBar>
  );
};

export default Header;
