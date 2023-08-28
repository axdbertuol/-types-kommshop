import { ObjectId } from "mongoose";

declare namespace Entity {
  export interface Product {
    _id: ObjectId;
    name: string;
    description?: string;
    price: number;
    category: Category;
  }
  export interface Category {
    _id: ObjectId;
    name: string;
  }
}

declare namespace Ref {
  export type Product = Entity.Product & { _id: string };
  export type Category = Entity.Category & { _id: string };
}
