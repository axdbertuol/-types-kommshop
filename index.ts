import { ObjectId } from "mongoose";
import { FindOptionsWhere } from "typeorm";

export type AuthConfirmEmailDto = {
  hash: string;
};

export type AuthEmailLoginDto = {
  email: string;
  password: string;
};

export type AuthForgotPasswordDto = {
  email: string;
};

export type AuthRegisterLoginDto = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type AuthResetPasswordDto = {
  password: string;
  hash: string;
};

export type AuthUpdateDto = {
  photo?: FileEntity;
  firstName?: string;
  lastName?: string;
  password?: string;
  oldPassword: string;
};

export interface IEntityHelper {
  __entity?: string;

  setEntityName(): void;

  toJSON(): Record<string, any>;
}

export type JwtPayloadType = Pick<User, "id" | "role"> & {
  sessionId: Session["id"];
  iat: number;
  exp: number;
};

export type JwtRefreshPayloadType = {
  sessionId: Session["id"];
  iat: number;
  exp: number;
};
export type AuthGoogleLoginDto = {
  idToken: string;
};
export type LoginResponseType = Readonly<{
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: LoginResponseUserDto;
}>;
export type LoginResponseUserDto = Omit<
  User,
  "hash" | "__entity" | "loadPreviousPassword" | "password" | "previousPassword"
>;

export type CreateUserDto = {
  email: string | null;

  password?: string;

  provider?: string;

  socialId?: string | null;

  firstName: string | null;

  lastName: string | null;

  photo?: FileEntity | null;

  role?: Role | null;

  status?: Status;

  hash?: string | null;
};

export type User = {
  id: number;

  email: string | null;

  password: string;

  loadPreviousPassword: () => void;

  previousPassword: string;

  setPassword: () => void;

  provider: string;

  socialId: string | null;

  firstName: string | null;

  lastName: string | null;

  photo?: FileEntity | null;

  role?: Role | null;

  status?: Status;

  hash: string | null;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;
};
export type FilterUserDto = {
  roles?: Role[] | null;
};

export type SortDto<T> = {
  orderBy: keyof T;
  order: string;
};

export type QueryDto<F, S> = {
  page?: number;
  limit?: number;
  filters?: F | null;
  sort?: S[] | null;
};

export type Forgot = {
  id: number;

  hash: string;

  user: User;

  createdAt: Date;

  deletedAt: Date;
};

export type UpdateUserDto = Partial<{
  email: string | null;
  password: string | null;
  provider: string;
  socialId: string | null;
  firstName: string | null;
  lastName: string | null;
  photo: FileEntity | null;
  role: Role | null;
  status: Status | null;
  hash: string | null;
}>;

export type Session = {
  id: number;

  user: User;

  createdAt: Date;

  deletedAt: Date;
};

export type Social = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type FileEntity = {
  id: string;

  path: string;
};
export type Status = {
  id: number;

  name?: string;
};
export type Role = {
  id: number;

  name?: string;
};

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

export interface Content {
  data: any;
}
export interface ProductContent extends Content {
  filters?: string | string[];
  category?: string;
}

export type EntityCondition<T> = FindOptionsWhere<T>;

export type FindOptions<T> = {
  where: EntityCondition<T>[] | EntityCondition<T>;
};

export type InfinityPaginationResultType<T> = Readonly<{
  data: T[];
  hasNextPage: boolean;
}>;
export type MaybeType<T> = T | undefined;

export type NullableType<T> = T | null;
export type OrNeverType<T> = T | never;
export interface IPaginationOptions {
  page: number;
  limit: number;
}

export enum AuthProvidersEnum {
  credentials = "credentials",
  facebook = "facebook",
  google = "google",
  twitter = "twitter",
  apple = "apple",
}
export enum RoleEnum {
  "admin" = 1,
  "user" = 2,
}
export enum StatusEnum {
  "active" = 1,
  "inactive" = 2,
}
