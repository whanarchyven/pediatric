/// <reference types="bun-types" />
import { Elysia } from "elysia";
import mongoose from "mongoose";
import { trpcAppRouter } from "./trpc";
declare const app: Elysia<"", {
    request: {
        jwt: {
            readonly sign: (morePayload: Record<string, string> & import("@elysiajs/jwt").JWTPayloadSpec) => Promise<string>;
            readonly verify: (jwt?: string | undefined) => Promise<false | (Record<string, string> & import("@elysiajs/jwt").JWTPayloadSpec)>;
        };
        unsignCookie: (value: string) => {
            valid: true;
            value: string;
        } | {
            valid: false;
            value: undefined;
        };
        cookie: Record<string, string>;
        setCookie: (name: string, value: string, options?: import("@elysiajs/cookie").SetCookieOptions | undefined) => void;
        removeCookie: (name: string) => void;
        uuid?: undefined;
    } | {
        jwt: {
            readonly sign: (morePayload: Record<string, string> & import("@elysiajs/jwt").JWTPayloadSpec) => Promise<string>;
            readonly verify: (jwt?: string | undefined) => Promise<false | (Record<string, string> & import("@elysiajs/jwt").JWTPayloadSpec)>;
        };
        unsignCookie: (value: string) => {
            valid: true;
            value: string;
        } | {
            valid: false;
            value: undefined;
        };
        cookie: Record<string, string>;
        setCookie: (name: string, value: string, options?: import("@elysiajs/cookie").SetCookieOptions | undefined) => void;
        removeCookie: (name: string) => void;
        uuid: string;
    };
    store: {};
}, {
    type: {};
    error: {};
}, {
    body: unknown;
    headers: unknown;
    query: unknown;
    params: unknown;
    cookie: unknown;
    response: unknown;
}, {
    [x: `${string}/*`]: {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<Response>;
            };
        };
    } & {
        post: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<Response>;
            };
        };
    };
    "/auth/signUp": {
        post: {
            body: {
                lastName: string;
                firstName: string;
                middleName: string;
                phoneNumber: string;
                specialty: string;
                email: string;
                city: string;
                workplace: string;
                position: string;
                password: string;
                confirmPassword: string;
                joinCommunity: boolean;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    error: string;
                    success?: undefined;
                } | {
                    success: string;
                    error?: undefined;
                }>;
            };
        };
    };
    "/auth/login": {
        post: {
            body: {
                email: string;
                password: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    error: string;
                    success?: undefined;
                    user_uuid?: undefined;
                } | {
                    success: string;
                    user_uuid: string;
                    error?: undefined;
                }>;
            };
        };
    };
    "/user/:id/profile": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    error: string;
                    profile?: undefined;
                } | {
                    profile: mongoose.FlattenMaps<{
                        lastName: string;
                        firstName: string;
                        middleName: string;
                        phoneNumber: string;
                        specialty: string;
                        email: string;
                        city: string;
                        workplace: string;
                        position: string;
                        password: string;
                        joinCommunity: boolean;
                        uuid: string;
                        gender: string;
                        confirmPassword?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    };
                    error?: undefined;
                }>;
            };
        };
    } & {
        post: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
    "/user/:id/publication/list": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
    "/user/:id/publication": {
        post: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
    "/user/:id/bookmark/publication/list": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
    "/user/:id/bookmark/publication": {
        post: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
    "/user/:id/bookmark/event/list": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
    "/user/:id/bookmark/event": {
        post: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
    "/user/:id/upload": {
        post: {
            body: {
                file: File;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    url: string;
                }>;
            };
        };
    };
}, false>;
export type router = typeof trpcAppRouter;
export type ElysiaApp = typeof app;
export {};
