import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List, ListItem, Stack, Typography } from '@mui/material';
import { DeliveryItem } from '../../DeliveryAndPaymentPageProps';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  data: DeliveryItem;
  getIcon: (title: string) => IconDefinition | undefined;
};

const DeliverySection: FC<Props> = ({ data, getIcon }) => {
  return (
    <Stack sx={{ color: '#676767', marginTop: '30px', position: 'relative' }}>
      <Stack direction={'row'}>
        <FontAwesomeIcon
          style={{ fontSize: '18px', paddingTop: '7px' }}
          icon={getIcon(data.deliverytitle as string) as IconDefinition}
        />
        <Typography className="montserratRegular" sx={{ fontSize: '22px', margin: '0px', pl: '20px' }} gutterBottom>
          {data.deliverytitle}
        </Typography>
      </Stack>
      {data.conditions && (
        <Typography className="montserratRegular" sx={{ pt: '10px' }} gutterBottom>
          {data.conditions}
        </Typography>
      )}
      <List sx={{ listStyleType: 'disc', p: '0 0 40px 20px' }}>
        <ListItem sx={{ display: 'list-item' }}>{data.textfirst}</ListItem>
        <ListItem sx={{ display: 'list-item' }}>{data.textsecond}</ListItem>
        {data.textthird && <ListItem sx={{ display: 'list-item' }}>{data.textthird}</ListItem>}
        {data.textfourth && <ListItem sx={{ display: 'list-item' }}>{data.textfourth}</ListItem>}
      </List>
    </Stack>
  );
};

export default DeliverySection;
