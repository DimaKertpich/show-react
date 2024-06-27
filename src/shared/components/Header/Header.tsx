import { AppBar, Container, Typography, Stack, Button } from '@mui/material';
import { FC } from 'react';
import '../../styles/main.scss';

const Header: FC = () =>{

    return(
        <AppBar position='fixed' sx={{ backgroundColor: '#141414'}}>
            <Container 
                fixed
                sx={{minHeight: '60px', pt: '12px'}}>
                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography 
                            className='poppins-light'>
                            FORGE
                        </Typography>
                        <Stack 
                            flexDirection={'row'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            >
                            
                            <Button color={'inherit'}>Знижки</Button>
                            <Button color={'inherit'}>Для нього</Button>
                            <Button color={'inherit'}>Про нас</Button>
                        </Stack>
                    </Stack>
            </Container>
        </AppBar>
    )
}

export default Header;