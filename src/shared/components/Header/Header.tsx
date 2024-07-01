import "../../styles/main.scss";
import { AppBar, Container, Typography, Stack } from "@mui/material";
import { FC } from "react";
import ButtonComponent from "./ButtonComponent";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#141414" }}>
      <Container fixed sx={{ minHeight: "70px", pt: "18px" }}>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography className="jostMedium" sx={{ fontSize: "22px" }}>
            {t("header.title")}
          </Typography>
          <Stack direction={"row"} sx={{ pl: "60px" }} spacing={2}>
            <ButtonComponent text="header.discount" />
            <ButtonComponent text="header.forHim" />
            <ButtonComponent text="header.deliveryAndPayment" />
            <ButtonComponent text="header.aboutUs" />
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ ml: "auto" }}
            spacing={3}
          >
            <LanguageSelector />
            <SearchIcon sx={{ color: "White", cursor: "pointer" }} />
            <PersonOutlineOutlinedIcon
              sx={{ color: "White", cursor: "pointer" }}
            />
            <ShoppingBagOutlinedIcon
              sx={{ color: "White", cursor: "pointer" }}
            />
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
