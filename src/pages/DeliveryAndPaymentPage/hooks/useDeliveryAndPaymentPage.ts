import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { faArrowRightArrowLeft, faMoneyCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { DeliveryAndPaymentPageResultProps } from '../DeliveryAndPaymentPageProps';

const useDeliveryAndPaymentPage = (): DeliveryAndPaymentPageResultProps => {
  const { t } = useTranslation();

  const getIcon = useCallback(
    (title: string) => {
      switch (title) {
        case t('deliveryandpay.delivery.0.deliverytitle'):
          return faTruckFast;
        case t('deliveryandpay.delivery.1.deliverytitle'):
          return faMoneyCheck;
        case t('deliveryandpay.delivery.2.deliverytitle'):
          return faArrowRightArrowLeft;
        default:
          return;
      }
    },
    [t]
  );

  return { getIcon };
};
export default useDeliveryAndPaymentPage;
