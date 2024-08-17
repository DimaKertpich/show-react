import '../../styles/main.scss';
import { AppBar, Container, Typography, Stack, IconButton } from '@mui/material';
import { FC, useCallback, useMemo, useState } from 'react';
import CommonButton from '../CommonButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import PopupWindow from './components/PopupWindow';
import { HeaderProps } from './HeaderProps';
import Styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { pageUrls } from '../../../pageUrls';

const enum HeaderButtons {
  Discount = 'Discount',
  ForHim = 'ForHim',
  DeliveryAndPayment = 'DeliveryAndPayment',
  AboutUs = 'AboutUs',
}

type HeaderButtonOption = {
  name: string;
  value: HeaderButtons;
};

const Header: FC<HeaderProps> = ({ shouldShowPopup, showPopUp }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const headerButtons = useMemo(() => {
    return [
      {
        name: 'discount',
        value: HeaderButtons.Discount,
      },
      {
        name: 'forHim',
        value: HeaderButtons.ForHim,
      },
      {
        name: 'deliveryAndPayment',
        value: HeaderButtons.DeliveryAndPayment,
      },
      {
        name: 'aboutUs',
        value: HeaderButtons.AboutUs,
      },
    ];
  }, []);

  const [selectedSection, setSelectetSection] = useState({} as HeaderButtonOption);

  const handleSelectSection = useCallback(
    (buttonValue: HeaderButtonOption) => {
      setSelectetSection(buttonValue);
      console.log('buttonValue', buttonValue);
      if (buttonValue.value === HeaderButtons.ForHim) {
        shouldShowPopup();
      } else {
        navigate(pageUrls[buttonValue.value]);
      }
    },
    [setSelectetSection, shouldShowPopup, navigate]
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#141414' }}>
      <Container fixed sx={{ minHeight: '70px', pt: '18px' }}>
        <Stack flexDirection={'row'} alignItems={'center'}>
          <Link to="/main" style={{ textDecoration: 'none', color: 'White' }}>
            <Typography
              onClick={() => setSelectetSection({} as HeaderButtonOption)}
              className="montserratMedium"
              sx={{ fontSize: '22px' }}
            >
              {t('header.title')}
            </Typography>
          </Link>
          <Stack direction={'row'} sx={{ pl: '60px' }} spacing={2}>
            {headerButtons.map((headerButton: HeaderButtonOption) => (
              <CommonButton
                onClick={() => handleSelectSection(headerButton)}
                className={selectedSection === headerButton ? Styles.selectedSectionColor : undefined}
                key={headerButton.value}
                text={`header.${headerButton.name}`}
              ></CommonButton>
            ))}
          </Stack>

          <Stack direction={'row'} alignItems={'center'} sx={{ ml: 'auto' }} spacing={2}>
            <LanguageSelector />
            <IconButton sx={{ color: 'White', cursor: 'pointer' }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: 'White', cursor: 'pointer' }}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: 'White', cursor: 'pointer' }}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <PopupWindow className={showPopUp ? Styles.headerPopUp : Styles.headerPopUpHidden} />
    </AppBar>
  );
};

export default Header;
