import { Container, Stack, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../../shared/styles/main.scss";
import DeliverySection from "./components/DeliverySection/DeliverySection";
import {
  DeliveryAndPaymentPageProps,
  DeliveryItem,
} from "./DeliveryAndPaymentPageProps";

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
        <Stack sx={{textAlign: "center", mb: "80px"}}>
          <Typography className="montserratRegular" sx={{fontSize: '26px'}}>{t("deliveryandpay.title")}</Typography>
          <Typography className="montserratRegular" sx={{fontSize: '18px', color: "#676767", mt: "20px"}}>{t("deliveryandpay.subtitle")}</Typography>
        </Stack>

        {delivery.map((item, index) => (
          <DeliverySection key={index} data={item} getIcon={getIcon} />
        ))}
      </Container>
    </Stack>
  );
};

export default DeliveryAndPaymentPage;
