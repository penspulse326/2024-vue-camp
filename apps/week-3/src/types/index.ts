export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ICartItem extends IMenuItem {
  quantity: number;
  subTotal: number;
}

export interface IOrder {
  id: number;
  items: ICartItem[];
  totalPrice: number;
  comment: string;
  timestamp: Date;
}
