type ToursResponse = {
  id: number;
  title: string;
  rating: number;
  price: number;
  img: string;
  region: string;
  name: string;
  priceVND: string;
  description: string;
}[];

type ToursStore = {
  cartItems: ToursResponse;
  numItemsInCart: number;
  cartTotal: number;
};

type AtractiveToursResponse = {
  id: number;
  title: string;
  travelTime: string;
  img: string;
}[];

type ToursParams = {
  id?: string;
  title?: string;
  rating?: number;
  price?: number;
  img?: string;
  region?: string;
  name?: string;
  priceVND?: string;
  description?: string;
};

type TourTestParams = {
  _page: number;
  _limit: number;
  region?: string;
  rating?: number;
  price?: number;
};
