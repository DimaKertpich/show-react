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
import { Link } from 'react-router-dom';


const Header: FC<HeaderProps> = ({shouldShowPopup, showPopUp}) => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#141414" }}>
      <Container fixed sx={{ minHeight: "70px", pt: "18px" }}>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Link to="/main" style={{textDecoration: "none", color: "White"}}>
            <Typography 
              className="montserratMedium" 
              sx={{ fontSize: "22px"}}>{t("header.title")} 
            </Typography>
          </Link>
          <Stack direction={"row"} sx={{ pl: "60px" }} spacing={2}>
            <CommonButton text="header.discount" />
            <CommonButton onClick={shouldShowPopup}  text="header.forHim" />
            <Link 
              style={{textDecoration: "none", color: "White"}} 
              to="/delivery">
              
              <CommonButton text="header.deliveryAndPayment" /></Link>
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
