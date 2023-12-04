import { Container, Paper, TextField } from '@mui/material';
import { HorizontalRule, ArrowForwardIos, Search } from '@mui/icons-material';

const NewsDetail = () => {
  return (
    <Container maxWidth='lg'>
      <div className='my-8 flex flex-row gap-12'>
        <div className='basis-3/4'>
          <Paper className='my-8 rounded-md'>
            <div className='p-6'>
              <p className='text-xs'>TIN TỨC</p>
              <p className='text-[28px] font-extrabold'>10 Best Places Gallery</p>
              <HorizontalRule className='mt-3 text-[#0000001A]' />
            </div>
            <div className='relative'>
              <img
                src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/01/blog-img10-1024x700.jpg'
                className='w-full'
              />
              <div className='child absolute left-[-10px] top-[70px] z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                15 <br /> Th1
              </div>
            </div>
            <div className='p-6'>
              <p>
                Sed quam nisl, commodo in interdum sit amet, molestie vehicula erat. Vestibulum ultrices, sem vitae
                congue viverra, ligula lorem faucibus dolor, id tristique libero erat a ipsum. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Pellentesque at nibh malesuada libero dictum condimentum. In
                lacinia consequat nunc quis consequat. Phasellus scelerisque hendrerit quam, sed cursus sapien ultricies
                et. Aenean lobortis pharetra facilisis.
              </p>
            </div>
            <div className='flex flex-row border-t-2 border-[#ececec]'>
              <div className='basis-1/2'></div>
              <p className='basis-1/2 border-l-2 border-[#ececec] py-3 pr-3 text-right'>
                Thailand Special Places of 2014 <ArrowForwardIos />
              </p>
            </div>
          </Paper>
          <form className='mb-12'>
            <p className='text-xl font-extrabold'>Trả lời</p>
            <p className='my-3'>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
            <p className='mb-3 font-extrabold'>Bình luận</p>
            <TextField className='mb-4 w-full bg-[#FFFFFF33]' multiline rows={4} />
            <div className='mb-6 flex flex-row gap-8'>
              <div className='basis-1/3'>
                <p className='mb-3 font-extrabold'>Tên *</p>
                <TextField className='w-full bg-[#FFFFFF33] ' />
              </div>
              <div className='basis-1/3'>
                <p className='mb-3 font-extrabold'>Email *</p>
                <TextField className='w-full bg-[#FFFFFF33] ' />
              </div>
              <div className='basis-1/3'>
                <p className='mb-3 font-extrabold'>Trang web</p>
                <TextField className='w-full bg-[#FFFFFF33] ' />
              </div>
            </div>
            <button className='bg-[#FF6600] px-4 py-2 text-[18px] font-extrabold text-[#FFF]'>PHẢN HỒI</button>
          </form>
        </div>
        <div className='my-8 basis-1/4'>
          <div className='mb-4 flex items-center'>
            <TextField className='w-full bg-[#FFF]' label='Tìm kiếm...' variant='outlined' />
            <div>
              <Search fontSize='small' className='h-[47px] w-[37px] bg-[#E30050] px-2 py-1 text-[#FFF]' />
            </div>
          </div>
          <p className='text-center font-extrabold lg:text-left'>BÀI VIẾT MỚI NHẤT</p>
          <HorizontalRule className='mt-2 text-[#0000001A]' />
          <div className='py-2 lg:flex-col'>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/trip3-150x150.jpg) no-repeat center / cover`,
                }}
                className='relative basis-1/4 py-8 sm:py-12 md:py-16 lg:py-8'
              >
                <div className='absolute top-0 z-10 h-full w-full bg-[#00000066]'></div>
                <p className='im absolute left-[50%] top-[50%] z-20 py-2 text-center text-xs font-extrabold text-[#FFF]'>
                  15
                  <br />
                  Th1
                </p>
              </div>
              <div className='basis-3/4 text-sm'>A Quote Post for Vestibulum</div>
            </div>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/01/blog-img7-150x150.jpg) no-repeat center / cover`,
                }}
                className='relative basis-1/4 py-8 sm:py-12 md:py-16 lg:py-8'
              >
                <div className='absolute top-0 z-10 h-full w-full bg-[#00000066]'></div>
                <p className='im absolute left-[50%] top-[50%] z-20 py-2 text-center text-xs font-extrabold text-[#FFF]'>
                  15
                  <br />
                  Th1
                </p>
              </div>
              <div className='basis-3/4 text-sm'>Thailand Special Places of 2014</div>
            </div>
            <div className='flex flex-row gap-3 py-2'>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/01/blog-img10-150x150.jpg) no-repeat center / cover`,
                }}
                className='relative basis-1/4 py-8 sm:py-12 md:py-16 lg:py-8'
              >
                <div className='absolute top-0 z-10 h-full w-full bg-[#00000066]'></div>
                <p className='im absolute left-[50%] top-[50%] z-20 py-2 text-center text-xs font-extrabold text-[#FFF]'>
                  15
                  <br />
                  Th1
                </p>
              </div>
              <div className='basis-3/4 text-sm'>10 Best Places Gallery</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsDetail;
