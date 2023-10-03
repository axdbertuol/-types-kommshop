// This namespace is merged with the API class and allows for consumers, and this file
// to have types which are nested away in their own sections.
// class API {}
import { ObjectId } from "mongoose";
import { Content } from "../index";

declare namespace Entity {
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

declare namespace Ref {
  export type Product = Entity.Product & { _id: string };
  export type Category = Entity.Category & { _id: string };
}

declare namespace Message {
  export interface Content {
    data: any;
  }
  export interface ProductContent extends Content {
    filters?: string | string[];
    category?: string;
  }
}
