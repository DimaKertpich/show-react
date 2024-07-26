import { Container, Stack } from "@mui/material";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../../shared/styles/main.scss";
import DeliverySection from "./components/DeliverySection/DeliverySection";
import {
  DeliveryAndPaymentPageProps,
  DeliveryItem,
} from "./DeliveryAndPaymentPageProps";

// const getIcon = (title: string) => {
//   switch (title){
//     case t("delivery.deliverytitle"):
//       return faTruckFast;
//     case "Оплата" || "Payment":
//       return faMoneyCheck;
//     case "Повернення або обмін" || "Return or exchange":
//       return faArrowRightArrowLeft;
//     default:
//       return faBan;
//   }
// }

// interface DeliveryItem {
//     deliverytitle?: string;
//     paytitle?: string;
//     retruntitle?: string;
//     textfirst: string;
//     textsecond: string;
//     textthird?: string;
//     textfourth?: string;
//     Conditions?: string;
// }

// const DeliverySection = ({ data }: { data: DeliveryItem }) => (
//   <Stack sx={{ color: '#676767', marginTop: '20px' }}>
//     <Stack direction={'row'}>

//         <FontAwesomeIcon style={{fontSize: "18px", paddingTop: '7px'}} icon={getIcon(data.deliverytitle as string)} />

//       <Typography className="montserratRegular" sx={{fontSize: '22px', margin: '0px', pl: '20px'}} gutterBottom>{data.deliverytitle}</Typography>
//     </Stack>
//     {data.Conditions && <Typography sx={{pt: '10px'}} gutterBottom>{data.Conditions}</Typography>}
//     <List sx={{ listStyleType: 'disc', pl: '20px' }}>
//       <ListItem sx={{ display: 'list-item' }}>{data.textfirst}</ListItem>
//       <ListItem sx={{ display: 'list-item' }}>{data.textsecond}</ListItem>
//       {data.textthird && <ListItem sx={{ display: 'list-item' }}>{data.textthird}</ListItem>}
//       {data.textfourth && <ListItem sx={{ display: 'list-item' }}>{data.textfourth}</ListItem>}
//     </List>
//   </Stack>
// );

const DeliveryAndPaymentPage: FC<DeliveryAndPaymentPageProps> = ({
  getIcon,
}) => {
  const { t } = useTranslation();
  const delivery: DeliveryItem[] = useMemo(() => {
    return t("deliveryandpay.delivery", {
      returnObjects: true,
    });
  }, [t]);

  return (
    <Stack sx={{ pt: "150px" }}>
      <Container>
        {delivery.map((item, index) => (
          <DeliverySection key={index} data={item} getIcon={getIcon} />
        ))}
      </Container>
    </Stack>
  );
};

export default DeliveryAndPaymentPage;
