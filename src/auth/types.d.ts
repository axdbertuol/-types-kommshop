declare module "auth" {
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
    | "hash"
    | "__entity"
    | "loadPreviousPassword"
    | "password"
    | "previousPassword"
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

    previousPassword: string;

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

  export type FileEntity = {
    id: string;

    path: string;
  };
  export type Status = {
    id: number;

    name: string;
  };
  export type Role = {
    id: number;

    name?: string;
  };
}
