import { Stack } from "@mui/material";
import { FC } from "react";
import SubHeader from "./Components/SubHeader";
import MainProductList from "./Components/MainProductList";

const MainPage: FC = () =>{
    return(
        <Stack>
            <SubHeader />
            <MainProductList />
        </Stack>
    )
}

export default MainPage;