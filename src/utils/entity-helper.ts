import { BaseEntity } from "typeorm";

export interface IEntityHelper extends BaseEntity {
  __entity?: string;

  setEntityName(): void;

  toJSON(): Record<string, any>;
}
