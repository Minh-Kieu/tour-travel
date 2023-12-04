import { client } from './axios';

const getNews = (): Promise<NewsResponse> => client.get(`/news`);

const newsService = {
  getNews,
};

export default newsService;
