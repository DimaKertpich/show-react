import { Stack, Box, Typography } from "@mui/material";
import noveltyImg from "../../../../shared/styles/img/1.jpg";
import forHimImg from "../../../../shared/styles/img/2.jpg";
import discounts from "../../../../shared/styles/img/3.jpg";
import "./SubHeader.scss";
import { useTranslation } from "react-i18next";

const SubHeader = () => {
  const { t } = useTranslation();
  return (
    <Stack className="subHeader">
      <Box className="subHeaderBoxImg" sx={{zIndex: '10'}}>
        <img className="subHeaderImg" src={noveltyImg} alt="img1"></img>
        <Box className="subHeaderBoxBefore"><Typography>{t('header.discount')}</Typography></Box>
      </Box>
      <Box className="subHeaderBoxImg" sx={{zIndex: '5'}}>
        <img className="subHeaderImg" src={forHimImg} alt="img2"></img>
        <Box className="subHeaderBoxBefore"><Typography>{t('header.forHim')}</Typography></Box>
      </Box>
      <Box className="subHeaderBoxImg" sx={{zIndex: '1'}}>
        <img className="subHeaderImg" src={discounts} alt="img3"></img>
        <Box className="subHeaderBoxBefore"><Typography>{t('header.novelties')}</Typography></Box>
      </Box>
    </Stack>
  );
};

export default SubHeader;
