"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEnum = exports.RoleEnum = exports.AuthProvidersEnum = void 0;
var AuthProvidersEnum;
(function (AuthProvidersEnum) {
    AuthProvidersEnum["credentials"] = "credentials";
    AuthProvidersEnum["facebook"] = "facebook";
    AuthProvidersEnum["google"] = "google";
    AuthProvidersEnum["twitter"] = "twitter";
    AuthProvidersEnum["apple"] = "apple";
})(AuthProvidersEnum || (exports.AuthProvidersEnum = AuthProvidersEnum = {}));
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["admin"] = 1] = "admin";
    RoleEnum[RoleEnum["user"] = 2] = "user";
})(RoleEnum || (exports.RoleEnum = RoleEnum = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["active"] = 1] = "active";
    StatusEnum[StatusEnum["inactive"] = 2] = "inactive";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
