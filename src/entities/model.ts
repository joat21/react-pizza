type PizzaParams = {
  sizes: number[];
  types: number[];
};

type Pizza = {
  id: string;
  title: string;
  ingredients: string;
  price: number;
  imageUrl: string;
  rating?: number;
};

export type PizzaItem = Pizza & PizzaParams;

export type CartItemType = Pizza & {
  size: number;
  type: string;
  count: number;
};

export type Meta = {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  remaining_count: number;
};

export enum SortBy {
  RATING_DESC = '-rating',
  PRICE_ASC = 'price',
  PRICE_DESC = '-price',
  ALPHABET = 'title',
}

export type SortType = {
  name: string;
  sortBy: SortBy;
};

export enum Status {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
