import { ObjectId } from "mongoose";
import { FindOptionsWhere } from "typeorm";
import { IEntityHelper } from "./utils/entity-helper";

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

export type User = IEntityHelper & {
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

export type SortUserDto = {
  orderBy: keyof User;
  order: string;
};

export type QueryUserDto = {
  page?: number;
  limit?: number;
  filters?: FilterUserDto | null;
  sort?: SortUserDto[] | null;
};

export type Forgot = IEntityHelper & {
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

export type Session = IEntityHelper & {
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

export type FileEntity = IEntityHelper & {
  id: string;

  path: string;
};
export type Status = IEntityHelper & {
  id: number;

  name?: string;
};
export type Role = IEntityHelper & {
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

export { IEntityHelper };
