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
        isAdmin: boolean;
        auth_user_uuid: string;
        uuid: string;
        canEditUser: boolean;
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
    "/auth/login/request-otp": {
        post: {
            body: {
                email: string;
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
    "/auth/login/by-otp": {
        post: {
            body: {
                email: string;
                otp: string;
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
    "/user/:user_uuid/card": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    profile: (mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
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
                        education: any[];
                        career: any[];
                        saved: any[];
                        confirmPassword?: string | undefined;
                        fullNameNormalized?: string | undefined;
                        birthDate?: string | undefined;
                        about?: string | undefined;
                        interests?: string | undefined;
                        verificationCode?: string | undefined;
                        photoUrl?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    }) | null;
                }>;
            };
        };
    };
    "/user/:user_uuid/user-list": {
        get: {
            body: unknown;
            params: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    users: (mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
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
                        education: any[];
                        career: any[];
                        saved: any[];
                        confirmPassword?: string | undefined;
                        fullNameNormalized?: string | undefined;
                        birthDate?: string | undefined;
                        about?: string | undefined;
                        interests?: string | undefined;
                        verificationCode?: string | undefined;
                        photoUrl?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    })[];
                    count: number;
                }>;
            };
        };
    };
    "/user/:user_uuid/profile": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    error: string;
                    profile?: undefined;
                    isAdmin?: undefined;
                    canEditUser?: undefined;
                } | {
                    profile: mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
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
                        education: any[];
                        career: any[];
                        saved: any[];
                        confirmPassword?: string | undefined;
                        fullNameNormalized?: string | undefined;
                        birthDate?: string | undefined;
                        about?: string | undefined;
                        interests?: string | undefined;
                        verificationCode?: string | undefined;
                        photoUrl?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    };
                    isAdmin: boolean;
                    canEditUser: boolean;
                    error?: undefined;
                }>;
            };
        };
    } & {
        post: {
            body: {
                lastName?: string | undefined;
                firstName?: string | undefined;
                middleName?: string | undefined;
                phoneNumber?: string | undefined;
                specialty?: string | undefined;
                city?: string | undefined;
                workplace?: string | undefined;
                position?: string | undefined;
                password?: string | undefined;
                confirmPassword?: string | undefined;
                joinCommunity?: boolean | undefined;
                gender?: string | undefined;
                education?: {
                    faculty?: string | undefined;
                    degree?: string | undefined;
                    diploma?: string | undefined;
                    yearStart: number;
                    yearEnd: number;
                    university: string;
                }[] | undefined;
                birthDate?: string | undefined;
                about?: string | undefined;
                interests?: string | undefined;
                career?: {
                    position: string;
                    yearStart: number;
                    yearEnd: number;
                    monthStart: string;
                    monthEnd: string;
                    place: string;
                }[] | undefined;
                saved?: {
                    title: string;
                    imageUrl: string;
                    href: string;
                    category: string;
                }[] | undefined;
                photoUrl?: string | undefined;
                email: string;
                uuid: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/profile/content-save": {
        post: {
            body: {
                title: string;
                imageUrl: string;
                href: string;
                category: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/profile/content-save-undo": {
        post: {
            body: {
                href: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/list/own-published": {
        get: {
            body: unknown;
            params: {
                limit?: number | undefined;
                skip?: number | undefined;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    publications: (mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        uuid: string;
                        date: Date;
                        title: string;
                        category: string;
                        viewCount: number;
                        likedByUserUuids: string[];
                        savedByUserUuids: string[];
                        fileUrl: string;
                        authors: string[];
                        awards: any[];
                        publishedByUserUuid?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    })[];
                    count: number;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication": {
        post: {
            body: {
                authors?: string[] | undefined;
                awards?: {
                    title: string;
                    imageUrl: string;
                }[] | undefined;
                uuid: string;
                date: string;
                title: string;
                category: string;
                fileUrl: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/like": {
        post: {
            body: {
                uuid: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/undo-like": {
        post: {
            body: {
                uuid: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/save": {
        post: {
            body: {
                uuid: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/undo-save": {
        post: {
            body: {
                uuid: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/event/list": {
        get: {
            body: unknown;
            params: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    events: (mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        type: string;
                        id: string;
                        date: string;
                        format: string;
                        place: string;
                        name: string;
                        timePeriod: string;
                        participants: number;
                        layoutBg: string;
                        avatar: string;
                        announcement: string;
                        speakers: any[];
                        halls: any[];
                        prices: any[];
                        link?: string | undefined;
                        description?: string | undefined;
                        onlinePrice?: number | undefined;
                        offlinePrice?: number | undefined;
                        isOnlyOnline?: boolean | undefined;
                        isPassed?: boolean | undefined;
                        isStream?: boolean | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    })[];
                }>;
            };
        };
    };
    "/event/create": {
        post: {
            body: {
                id?: string | undefined;
                link?: string | undefined;
                description?: string | undefined;
                onlinePrice?: number | undefined;
                offlinePrice?: number | undefined;
                prices?: {
                    date: string;
                    online: number;
                    offline: number;
                }[] | undefined;
                isOnlyOnline?: boolean | undefined;
                isPassed?: boolean | undefined;
                isStream?: boolean | undefined;
                type: string;
                date: string;
                format: string;
                place: string;
                name: string;
                timePeriod: string;
                participants: number;
                layoutBg: string;
                avatar: string;
                announcement: string;
                speakers: {
                    name: string;
                    description: string;
                    post: string;
                    contact: string;
                    photo: string;
                }[];
                halls: {
                    name: string;
                    program: {
                        timePeriod?: string | undefined;
                        sponsor?: string | undefined;
                        speaker?: string | undefined;
                        substages?: {
                            description?: string | undefined;
                            sponsor?: string | undefined;
                            name: string;
                            timePeriod: string;
                        }[] | undefined;
                        name: string;
                    };
                }[];
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/event/update": {
        post: {
            body: {
                id?: string | undefined;
                link?: string | undefined;
                description?: string | undefined;
                onlinePrice?: number | undefined;
                offlinePrice?: number | undefined;
                prices?: {
                    date: string;
                    online: number;
                    offline: number;
                }[] | undefined;
                isOnlyOnline?: boolean | undefined;
                isPassed?: boolean | undefined;
                isStream?: boolean | undefined;
                type: string;
                date: string;
                format: string;
                place: string;
                name: string;
                timePeriod: string;
                participants: number;
                layoutBg: string;
                avatar: string;
                announcement: string;
                speakers: {
                    name: string;
                    description: string;
                    post: string;
                    contact: string;
                    photo: string;
                }[];
                halls: {
                    name: string;
                    program: {
                        timePeriod?: string | undefined;
                        sponsor?: string | undefined;
                        speaker?: string | undefined;
                        substages?: {
                            description?: string | undefined;
                            sponsor?: string | undefined;
                            name: string;
                            timePeriod: string;
                        }[] | undefined;
                        name: string;
                    };
                }[];
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/post/list": {
        get: {
            body: unknown;
            params: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    posts: (mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        uuid: string;
                        title: string;
                        imageUrl: string;
                        description: string;
                        contentMd: string;
                        publishedByUserUuid?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    })[];
                    count: number;
                }>;
            };
        };
    };
    "/post/create": {
        post: {
            body: {
                uuid?: string | undefined;
                title: string;
                imageUrl: string;
                description: string;
                contentMd: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/post/update": {
        post: {
            body: {
                uuid?: string | undefined;
                title: string;
                imageUrl: string;
                description: string;
                contentMd: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/publication/list/": {
        get: {
            body: unknown;
            params: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    publications: (mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        uuid: string;
                        date: Date;
                        title: string;
                        category: string;
                        viewCount: number;
                        likedByUserUuids: string[];
                        savedByUserUuids: string[];
                        fileUrl: string;
                        authors: string[];
                        awards: any[];
                        publishedByUserUuid?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    })[];
                    count: number;
                }>;
            };
        };
    };
    "/echo": {
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
    "/upload": {
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
