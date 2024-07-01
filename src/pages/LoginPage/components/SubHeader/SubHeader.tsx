import { Stack, Box, Typography } from "@mui/material"
import noveltyImg from '../../../../shared/styles/img/1.jpg';
import forHimImg from '../../../../shared/styles/img/2.jpg';
import discounts from '../../../../shared/styles/img/3.jpg';
import './SubHeader.scss';

const SubHeader = () => {

    return(
        <Stack className="subHeader">
            <Box className="subHeaderBoxImg subHeaderBoxImgLeft">
                <img className="subHeaderImg" src={noveltyImg} alt='img1'></img>
                <div className="subHeaderBoxImgBefore"><Typography sx={{left: '30% !important'}}>Знижки</Typography></div>
            </Box>
            <Box className="subHeaderBoxImg subHeaderBoxImgCenter">
                <img className="subHeaderImg" src={forHimImg} alt='img2'></img>
                <div className="subHeaderBoxImgBefore"><Typography>Для нього</Typography></div>
            </Box>
            <Box className="subHeaderBoxImg subHeaderBoxImgRight">
                <img className="subHeaderImg" src={discounts} alt='img3'></img>
                <div className="subHeaderBoxImgBefore"><Typography>Новинки</Typography></div>
            </Box>
        </Stack>
    )
}

export default SubHeader;