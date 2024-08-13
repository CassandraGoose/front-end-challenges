export interface IDessert {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    tablet: string;
    mobile: string;
    desktop: string;
  };
}

export interface ICartItem {
  name: string;
  quantity: number;
  price: number;
}