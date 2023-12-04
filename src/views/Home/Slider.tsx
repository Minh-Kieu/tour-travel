import { InfiniteSlider } from 'components';
import { useRef, useState } from 'react';
import { Container, Grid, Button, Checkbox } from '@mui/material';
import { ArrowDropDown, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { privateRoute } from 'routes';
import clsxm from 'utils/merge';

const SliderImg = () => {
  const slider = useRef<InfiniteSlider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [tourChoice, setTourChoice] = useState(true);
  const [hotelChoice, setHotelChoice] = useState(false);

  const handleClickTour = () => {
    setTourChoice(true);
    setHotelChoice(false);
  };

  const handleClickHotel = () => {
    setHotelChoice(true);
    setTourChoice(false);
  };

  return (
    <div>
      <InfiniteSlider
        ref={slider}
        {...{
          autoplaySpeed: 5000,
          autoplay: true,
          dots: false,
          arrows: false,
          beforeChange: (_, next) => {
            setActiveSlide(next);
          },
        }}
      >
        <div className='relative'>
          <img
            className='h-[80vh] w-full'
            src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/ba-na-hill.jpg'
          />
          <div className='absolute top-0 z-20 h-[80vh] w-full bg-[#00000066]'></div>
          <div className='im absolute left-[50%] top-[50%] z-30 w-[90%] text-center text-[#FFF]'>
            <p className='text-3xl font-extrabold lg:text-5xl'>
              <span className='text-[#FF6600]'>MONA</span> TRAVEL COMPANY
            </p>
            <p className='py-4 text-base font-extrabold lg:text-2xl'>Specializes in organizing domestic tours</p>
            <p className='pb-4 text-xs text-[#C3C3C3] lg:text-base'>
              We still know that working with a piece of text that is easy to read and has clear meaning can easily
              distract the mind and prevent concentration on the text presentation element. Lorem Ipsum's advantage over
              text that only contains content like "Content, content, content" is that it makes the text more realistic
              and normal.
            </p>
            <button className='rounded-2xl bg-[#FF6600] px-5 py-2 text-xs lg:text-[18px]'>
              WATCH NOW <LocationOn fontSize='small' />
            </button>
          </div>
        </div>
        <div className='relative'>
          <img
            className='h-[80vh] w-full'
            src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/phu-quoc.jpg'
          />
          <div className='absolute top-0 z-20 h-[80vh] w-full bg-[#00000066]'></div>
          <div className='im absolute left-[50%] top-[50%] z-30 w-[90%] text-center text-[#FFF]'>
            <p className='text-3xl font-extrabold lg:text-5xl'>
              <span className='text-[#FF6600]'>MONA</span> TRAVEL COMPANY
            </p>
            <p className='py-4 text-base font-extrabold lg:text-2xl'>Specializes in organizing domestic tours</p>
            <p className='pb-4 text-xs text-[#C3C3C3] lg:text-base'>
              We still know that working with a piece of text that is easy to read and has clear meaning can easily
              distract the mind and prevent concentration on the text presentation element. Lorem Ipsum's advantage over
              text that only contains content like "Content, content, content" is that it makes the text more realistic
              and normal.
            </p>
            <button className='rounded-2xl bg-[#FF6600] px-5 py-2 text-xs lg:text-[18px]'>
              WATCH NOW <LocationOn fontSize='small' />
            </button>
          </div>
        </div>
      </InfiniteSlider>

      {/* <div className='relative z-10 mt-[-64px] flex justify-center gap-1 font-bold text-[#FFF]'>
        <div
          className={clsxm(
            'cursor-pointer rounded-tl-xl bg-[#00000066] px-6 py-3 text-xs hover:bg-[#000000ad] hover:text-[#FF6600] lg:px-[50px] lg:py-4 lg:text-base',
            {
              'bg-[#FF6600]': tourChoice,
            },
          )}
          onClick={handleClickTour}
        >
          TÌM TOUR
        </div>
        <div
          className={clsxm(
            'cursor-pointer rounded-tr-xl bg-[#00000066] px-6 py-3 text-xs hover:bg-[#000000ad] hover:text-[#FF6600] lg:px-[50px] lg:py-4 lg:text-base',
            {
              'bg-[#FF6600]': hotelChoice,
            },
          )}
          onClick={handleClickHotel}
        >
          TÌM HOTEL
        </div>
      </div>
      {tourChoice && (
        <Container maxWidth='lg' className='relative rounded-b-xl bg-[#FF6600] py-4 text-[#FFF]'>
          <Grid container direction='row' justifyContent='center' alignItems='center' className='text-center'>
            <Grid item xs={4} sm={3} md={2}>
              <div>
                Danh mục <ArrowDropDown />
              </div>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <div>
                Giá <ArrowDropDown />
              </div>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <div>
                Số ngày <ArrowDropDown />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <div>
                Nơi khởi hành <ArrowDropDown />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <div>
                Giảm giá <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Link to={privateRoute.tours.path}>
                <Button>Tìm kiếm</Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      )}
      {hotelChoice && (
        <Container maxWidth='lg' className='relative rounded-b-xl bg-[#FF6600] py-4 text-[#FFF]'>
          <Grid container direction='row' justifyContent='center' alignItems='center' className='text-center'>
            <Grid item xs={2}>
              <div>
                Danh mục <ArrowDropDown />
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                Loại giường <ArrowDropDown />
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                Price <ArrowDropDown />
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                Giảm giá <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />
              </div>
            </Grid>
            <Grid item xs={2}>
              <Link to={privateRoute.hotel.path}>
                <Button>Tìm kiếm</Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      )} */}
    </div>
  );
};

export default SliderImg;
