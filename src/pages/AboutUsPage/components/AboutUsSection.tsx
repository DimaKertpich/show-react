import { ListItem, List, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { AboutUsItem } from '../AboutUsPageProps';
import '../../../shared/styles/main.scss';
type Props = {
  data: AboutUsItem;
};

const AboutUsSection: FC<Props> = ({ data }) => {
  console.log('data.ourPrinciples', data.ourPrinciples);
  return (
    <Stack textAlign="center" sx={{ pt: '30px' }}>
      <Typography className="nunitoSansRegular" sx={{ fontSize: '26px', color: '#383838' }}>
        {data.aboutUsTitle}
      </Typography>

      {data.ourPrinciples && (
        <Stack alignItems="center" sx={{ mt: '10px' }}>
          <List sx={{ listStyleType: 'disc' }}>
            {data.ourPrinciples.map((item, index) => (
              <ListItem
                className="montserratRegular"
                sx={{
                  display: 'list-item',
                  listStylePosition: 'inside',
                  fontSize: '16px',
                  color: '#676767',
                  lineHeight: '14px',
                  textAlign: 'center',
                }}
                key={index}
              >
                {item.textFirst}
                {item.textSecond}
                {item.textThird}
                {item.textFourth}
              </ListItem>
            ))}
          </List>
        </Stack>
      )}

      {data.description && (
        <Stack
          className="montserratRegular"
          sx={{ color: '#676767', mt: '20px', textAlign: 'left', p: '0 80px 0 80px', lineHeight: '22px' }}
        >
          {data.description}
        </Stack>
      )}
    </Stack>
  );
};

export default AboutUsSection;
