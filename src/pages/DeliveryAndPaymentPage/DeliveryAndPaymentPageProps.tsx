import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type DeliveryItem = {
  deliverytitle?: string;
  paytitle?: string;
  retruntitle?: string;
  textfirst: string;
  textsecond: string;
  textthird?: string;
  textfourth?: string;
  Conditions?: string;
};

export type DeliveryAndPaymentPageResultProps = {
  getIcon: (title: string) => IconDefinition | undefined;
};

export type DeliveryAndPaymentPageProps = DeliveryAndPaymentPageResultProps;
