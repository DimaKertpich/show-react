import { FC, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faMoneyCheck, faArrowRightArrowLeft, faBan } from "@fortawesome/free-solid-svg-icons";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { DeliveryItem } from "./types";

type Props = {data: DeliveryItem}

const DeliverySection: FC<Props> = ({ data }) => (

    const getIcon = useCallback((title: string) => {
        switch (title){
            case t("delivery.deliverytitle"):
              return faTruckFast;
            case "Оплата" || "Payment":
              return faMoneyCheck;
            case "Повернення або обмін" || "Return or exchange":
              return faArrowRightArrowLeft;
            default: 
              return faBan;
        }
    }, [])

    return(
    
        <Stack sx={{ color: '#676767', marginTop: '20px' }}>
        <Stack direction={'row'}>
            
            <FontAwesomeIcon style={{fontSize: "18px", paddingTop: '7px'}} icon={getIcon(data.deliverytitle as string)} />
            
            <Typography className="montserratRegular" sx={{fontSize: '22px', margin: '0px', pl: '20px'}} gutterBottom>{data.deliverytitle}</Typography>
        </Stack>
        {data.Conditions && <Typography sx={{pt: '10px'}} gutterBottom>{data.Conditions}</Typography>}
        <List sx={{ listStyleType: 'disc', pl: '20px' }}>
            <ListItem sx={{ display: 'list-item' }}>{data.textfirst}</ListItem>
            <ListItem sx={{ display: 'list-item' }}>{data.textsecond}</ListItem>
            {data.textthird && <ListItem sx={{ display: 'list-item' }}>{data.textthird}</ListItem>}
            {data.textfourth && <ListItem sx={{ display: 'list-item' }}>{data.textfourth}</ListItem>}
        </List>
        </Stack>
    )
);

export default DeliverySection;