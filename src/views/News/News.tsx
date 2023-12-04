import { HorizontalRule, Search } from '@mui/icons-material';
import { Container, TextField, CardContent, Card } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { newsService } from 'services';
import { Link } from 'react-router-dom';
import { privateRoute } from 'routes';

const News = () => {
  const { data: news, isLoading } = useQuery(['newsService.getNews'], () => newsService.getNews());

  return (
    <Container maxWidth='lg' className='py-12'>
      <p className='mb-8 text-center text-[18px] font-extrabold'>TIN TỨC</p>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <div className='flex flex-col gap-8 md:grid md:grid-cols-3 lg:basis-3/4'>
          {news?.map((item) => (
            <div className='relative' key={item.id}>
              <Link to={privateRoute.newsDetail.path} className='max-h-[300px]'>
                <Card className='parent max-h-[500px] cursor-pointer lg:basis-1/3'>
                  <img
                    src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/trip3-300x161.jpg'
                    className='h-[174px] w-full'
                  />
                  <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                    15 <br /> Th1
                  </div>
                  <CardContent>
                    <p className='font-extrabold'>{item.name}</p>
                    <HorizontalRule className='mt-2 text-[#0807071a]' />
                    <p className='text-sm'>${item.description.substring(0, 300)} ...</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <div className='lg:basis-1/4'>
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

export default News;
