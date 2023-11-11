declare module Entity {
  export interface Product {
    _id: ObjectId;
    name: string;
    description?: string;
    price: number;
    category: Category;
    favouritedBy?: ObjectId[];
  }
  export interface Category {
    _id: ObjectId;
    name: string;
  }
}

declare module Ref {
  export type Product = Entity.Product & { _id: string };
  export type Category = Entity.Category & { _id: string };
}
