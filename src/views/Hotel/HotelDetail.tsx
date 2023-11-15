import {
  FacebookRounded,
  Google,
  HorizontalRule,
  LinkedIn,
  MailOutlined,
  Pinterest,
  Twitter,
} from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Container, Rating, Tab, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'components';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import { hotelsService } from 'services';

const HotelDetail = () => {
  const [value, setValue] = useState('1');

  const { id: hotelId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hotelId]);

  const { data: hotel, isLoading } = useQuery(['hotelsService.getHotelsID', { hotelId }], () =>
    hotelsService.getHotelsID(hotelId!),
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Spinner loading={isLoading}>
      <div>
        <div className='bg-[#FF6600]'>
          <Container maxWidth='lg' className='mb-6 py-8'>
            <p className='text-center text-[18px] font-extrabold text-[#fff]'>KHÁCH SẠN</p>
          </Container>
        </div>
        <Container maxWidth='lg' className='py-12'>
          <div className='flex gap-4'>
            <div className='basis-3/5'>
              <Carousel>
                <div>
                  <img src={hotel?.[0].img1} />
                </div>
                <div>
                  <img src={hotel?.[0].img2} />
                </div>
                <div>
                  <img src={hotel?.[0].img3} />
                </div>
              </Carousel>
            </div>
            <div className='basis-2/5 pl-2'>
              <p className='text-[28px] font-extrabold'>{hotel?.[0].name}</p>
              <HorizontalRule fontSize='large' className='mt-2 text-[#0000001A]' />
              <p className='mb-2 text-2xl font-extrabold'>{hotel?.[0].price} ₫</p>
              <p className='mb-2'>{hotel?.[0].title}</p>
              <button type='button' className='rounded-lg bg-[#E30050] px-5 py-3 font-extrabold text-[#FFF]'>
                ĐẶT NGAY
              </button>
              <div className='my-4 border border-[#ececec]'></div>
              <p className='text-xs'>Danh mục: {hotel?.[0].type}</p>
              <div className='mt-3 flex gap-1 text-[#bbb8b8]'>
                <FacebookRounded className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Twitter className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <MailOutlined className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Pinterest className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Google className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <LinkedIn className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
              </div>
            </div>
          </div>

          <div className='my-5 border border-[#ececec]'></div>

          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab label='MÔ TẢ' value='1' />
              <Tab label='THÔNG TIN BỔ SUNG' value='2' />
              <Tab label='ĐÁNH GIÁ (0)' value='3' />
            </TabList>
            <TabPanel className='border-2 border-[#ececec]' value='1'>
              {hotel?.[0].title}
            </TabPanel>
            <TabPanel className='border-2 border-[#ececec]' value='2'>
              <div className='flex text-sm'>
                <div className='basis-2/5 font-bold'>LOẠI GIƯỜNG</div>
                <div className='flex basis-3/5'>
                  <p>{hotel?.[0].bedType1}</p>
                  {hotel?.[0].bedType2 && <p> ,{hotel?.[0].bedType2}</p>}
                </div>
              </div>
            </TabPanel>
            <TabPanel className='border-2 border-[#ececec]' value='3'>
              <p className='mb-3 text-xl font-extrabold'>Đánh giá</p>
              <p className='mb-8'>Chưa có đánh giá nào.</p>
              <Container maxWidth='lg' className='border-2 border-[#FF6600] py-6'>
                <p className='mb-[10px] text-xl font-extrabold'>
                  Hãy là người đầu tiên nhận xét “Đặt Phòng Khách Sạn Grand Hồ Tràm 5 Sao”
                </p>
                <p className='mb-2 text-sm font-extrabold'>Đánh giá của bạn</p>
                <Rating precision={0.5} />
                <p className='mb-2 mt-4 text-sm font-extrabold'>Nhận xét của bạn *</p>
                <TextField className='mb-4' multiline maxRows={6} rows={4} fullWidth />
                <div className='mb-4 flex gap-6'>
                  <div className='basis-1/2'>
                    <p className='text-sm font-extrabold'>Tên *</p>
                    <TextField fullWidth />
                  </div>
                  <div className='basis-1/2'>
                    <p className='text-sm font-extrabold'>Email *</p>
                    <TextField fullWidth />
                  </div>
                </div>
                <button
                  className='mb-6 rounded-lg bg-[#FF6600] px-5 py-3 text-sm font-extrabold text-[#fff]'
                  type='button'
                >
                  GỬI ĐI
                </button>
              </Container>
            </TabPanel>
          </TabContext>
          <div className='my-5 border border-[#ececec]'></div>
        </Container>
      </div>
    </Spinner>
  );
};

export default HotelDetail;
