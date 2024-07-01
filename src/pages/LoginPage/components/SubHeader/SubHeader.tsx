import { Stack, Box } from "@mui/material"
import noveltyImg from '../../../../shared/styles/img/1.jpg';
import forHimImg from '../../../../shared/styles/img/2.jpg';
import discounts from '../../../../shared/styles/img/3.jpg';
import './SubHeader.scss';

const SubHeader = () => {

    return(
        <Stack className="subHeader">
            <Box className="subHeaderBoxImg subHeaderBoxImgLeft">
                <img className="subHeaderImg" src={noveltyImg} alt='img1'></img>
                <div className="subHeaderBoxImgBefore"></div>
            </Box>
            <Box className="subHeaderBoxImg subHeaderBoxImgCenter">
                <img className="subHeaderImg" src={forHimImg} alt='img1'></img>
                <div className="subHeaderBoxImgBefore"></div>
            </Box>
            <Box className="subHeaderBoxImg subHeaderBoxImgRight">
                <img className="subHeaderImg" src={discounts} alt='img1'></img>
                <div className="subHeaderBoxImgBefore"></div>
            </Box>
        </Stack>
    )
}

export default SubHeader;