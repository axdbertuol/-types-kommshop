// This namespace is merged with the API class and allows for consumers, and this file
// to have types which are nested away in their own sections.
// class API {}
declare namespace Message {
  export interface Content {
    data: any;
  }
  export interface ProductContent extends Content {
    filters?: string | string[];
    category?: string;
  }
}
