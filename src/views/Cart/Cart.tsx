import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, removeItem, clearCart } from 'reducers/cartSlice';
import { enqueueSnackbar } from 'notistack';

const Cart = () => {
  const { cartItems, numItemsInCart, cartTotal } = useSelector(cartSelector);

  const dispatch = useDispatch();

  const removeItems = (id: number) => {
    dispatch(removeItem(id));
    enqueueSnackbar('Remove items successfully');
  };

  const clearCarts = () => {
    dispatch(clearCart());
    enqueueSnackbar('Clear cart successfully');
  };

  const orderBtn = () => {
    enqueueSnackbar('Your order has been sent');
    dispatch(clearCart());
  };

  if (numItemsInCart === 0) {
    return (
      <Container maxWidth='lg' className='grid place-items-center py-32'>
        Your cart is empty
      </Container>
    );
  }

  return (
    <div>
      <div className='bg-[#FF6600]'>
        <Container maxWidth='lg' className='mb-6 py-8'>
          <p className='text-center text-[18px] font-extrabold text-[#fff]'>Shopping Cart</p>
        </Container>
      </div>
      <Container maxWidth='lg' className='my-8 flex gap-4 lg:flex-col'>
        {cartItems?.map((item: any) => (
          <div key={item.id} className='flex items-center justify-between gap-8 lg:col-span-8'>
            <img src={item.img} className='h-22 w-36 rounded-lg' />
            <div className='text-2xl font-semibold'>{item.name}</div>
            <p>{item.region}</p>
            <p>${item.price}</p>
            <button type='submit' onClick={() => removeItems(item.id)}>
              remove
            </button>
          </div>
        ))}
        <div className='mt-4 flex justify-between text-2xl font-bold'>
          <div className=''>Total price:</div>
          <div>${cartTotal}</div>
        </div>
        <div className='flex'>
          <button type='submit' onClick={orderBtn} className='basis-1/2 px-5 py-3'>
            Order
          </button>
          <button type='submit' className='basis-1/2 px-5 py-3' onClick={clearCarts}>
            Clear all
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
