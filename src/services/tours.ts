import { client } from './axios';

const getTours = (): Promise<ToursResponse> => client.get(`/tours`);

const getToursID = (params: ToursParams): Promise<ToursResponse> => client.get(`/tours?`, { params });

const getTour = (params: TourTestParams): Promise<ToursResponse> => client.get(`/tours?`, { params });

const atractiveTours = (): Promise<AtractiveToursResponse> => client.get(`/attractive-tours`);

const toursService = {
  getTours,
  atractiveTours,
  getTour,
  getToursID,
};

export default toursService;
