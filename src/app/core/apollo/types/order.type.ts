export interface Order {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export interface Query {
  allOrders: Order[];
}
