import { Home } from 'views/Home';
import { Introduce } from 'views/Introduce';
import { Hotel, HotelDetail } from 'views/Hotel';
import { News } from 'views/News';
import { Contact } from 'views/Contact';
import { Tour, TourDetail } from 'views/Tour';

const privateRoute = {
  home: {
    path: '/',
    name: 'TRANG CHỦ',
    component: Home,
  },
  intro: {
    path: '/introduce',
    name: 'GIỚI THIỆU',
    component: Introduce,
  },
  hotel: {
    path: '/hotel',
    name: 'KHÁCH SẠN',
    component: Hotel,
  },
  tours: {
    path: '/tours',
    name: 'TOUR TRONG NƯỚC',
    component: Tour,
  },
  news: {
    path: '/news',
    name: 'TIN TỨC',
    component: News,
  },
  contact: {
    path: '/contact',
    name: 'LIÊN HỆ',
    component: Contact,
  },
  hotelDetail: {
    path: '/hotelDetail/:id',
    url: ({ id }: { id: number }) => `/hotelDetail/${id}`,
    name: 'KHÁCH SẠN',
    component: HotelDetail,
  },
  tourDetail: {
    path: '/tourDetail/:id',
    url: ({ id }: { id: number }) => `/tourDetail/${id}`,
    name: 'KHÁCH SẠN',
    component: TourDetail,
  },
};

export default privateRoute;
