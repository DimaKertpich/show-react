import { FC } from 'react';
import DeliveryAndPaymentPage from './DeliveryAndPaymentPage';
import useDeliveryAndPaymentPage from './hooks';

const DeliveryAndPaymentPageContainer: FC = () => {
  const deliveryAndPaymentPageProps = useDeliveryAndPaymentPage();
  return <DeliveryAndPaymentPage {...deliveryAndPaymentPageProps} />;
};
export default DeliveryAndPaymentPageContainer;
