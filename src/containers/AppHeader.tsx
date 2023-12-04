import { AppBar, Chip, Container, IconButton, List, Drawer, Toolbar, Badge } from '@mui/material';
import { SwitchTheme } from 'components';
import { AppMenu } from 'containers';
import { Link, useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';
import { useWindowSize } from 'hooks';
import { useEffect, useState } from 'react';
import { Menu, ShoppingCart, Close, ShoppingCartOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { cartSelector } from 'reducers/cartSlice';

const AppHeader = () => {
  const location = useLocation();

  const { isScreenLG } = useWindowSize();
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [location.pathname]);

  const { numItemsInCart, cartItems } = useSelector(cartSelector);

  return (
    <>
      <Drawer
        variant={isScreenLG ? 'temporary' : 'persistent'}
        anchor='left'
        open={isScreenLG ? openDrawer : false}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ style: { width: '250px', padding: '20px' } }}
      >
        <IconButton className='ml-auto p-0' onClick={() => setOpenDrawer(false)}>
          <Close fontSize='medium' />
        </IconButton>
        <div className='mt-5 flex flex-col gap-3 text-sm text-[#666666D9]'>
          <AppMenu />
        </div>
      </Drawer>

      <AppBar position='sticky' color='transparent' elevation={0} className='bg-paper-main'>
        <Container maxWidth='lg'>
          <Toolbar component={Container} maxWidth='xl' className='relative flex items-center px-0'>
            <IconButton onClick={() => setOpenDrawer(true)} className='absolute  lg:hidden'>
              <Menu />
            </IconButton>
            <IconButton className=' lg:hidden'>
              <ShoppingCart />
            </IconButton>
            <div className='mx-auto'>
              <Link to={privateRoute.home.path}>
                <img
                  src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/logo_dark.png'
                  alt='Logo'
                />
              </Link>
            </div>

            <div className='hidden flex-1 items-center justify-end py-3 lg:flex'>
              <AppMenu />
            </div>
            <Link to={privateRoute.cart.path}>
              <Badge badgeContent={numItemsInCart} color='primary'>
                <ShoppingCartOutlined fontSize='small' />
              </Badge>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AppHeader;
