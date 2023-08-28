import * as models from "./models";
declare namespace Message {
    interface Content {
        data: any;
    }
    interface ProductContent extends Content {
        filters?: string | string[];
        category?: string;
    }
}
export { Message, models };
