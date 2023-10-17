/// <reference types="bun-types" />
import { Elysia } from "elysia";
import mongoose from "mongoose";
import { trpcAppRouter } from "./trpc";
export declare const app: Elysia<"", {
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
        auth_user_email: string;
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
    "/admin/stats": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<string>;
            };
        };
    };
    "/auth/echo": {
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
    "/auth/login/admin_eehaekae4zah6abahy3uShaem3Ru9hai": {
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
                        email: string;
                        password: string;
                        uuid: string;
                        gender: string;
                        education: any[];
                        career: any[];
                        saved: any[];
                        awards: any[];
                        middleName?: string | undefined;
                        phoneNumber?: string | undefined;
                        specialty?: string | undefined;
                        city?: string | undefined;
                        workplace?: string | undefined;
                        position?: string | undefined;
                        confirmPassword?: string | undefined;
                        joinCommunity?: boolean | undefined;
                        isBlocked?: boolean | undefined;
                        isMember?: boolean | undefined;
                        legacyId?: string | undefined;
                        impotedFromSiteVersion?: string | undefined;
                        lastAuthAt?: Date | undefined;
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
    "/user/:user_uuid/participations": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    status: string | undefined;
                    qrCodeUrl: string | undefined;
                    sum: number;
                    info: {
                        name?: string | undefined;
                        participationType?: string | undefined;
                        event_name?: string | undefined;
                        event_id?: string | undefined;
                    } | undefined;
                    cert: string | undefined;
                }[]>;
            };
        };
    };
    "/user/:user_uuid/participation/:event_id": {
        get: {
            body: unknown;
            params: {
                event_id: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    status: string | undefined;
                    qrCodeUrl: string | undefined;
                    sum: number;
                    info: {
                        name?: string | undefined;
                        participationType?: string | undefined;
                        event_name?: string | undefined;
                        event_id?: string | undefined;
                    } | undefined;
                    cert: string | undefined;
                }>;
            };
        };
    };
    "/user/:user_uuid/participation/:event_id/getTicketLink": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    ticketLink: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/admin/participations/byEventId/:event_id": {
        get: {
            body: unknown;
            params: {
                event_id: string;
                user_uuid: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    status: string | undefined;
                    sum: number;
                    info: {
                        name?: string | undefined;
                        participationType?: string | undefined;
                        event_name?: string | undefined;
                        event_id?: string | undefined;
                    } | undefined;
                    email: string | undefined;
                    cert: string | undefined;
                }[]>;
            };
        };
    };
    "/user/:user_uuid/admin/participations/byEventId/:event_id/getCertByEmail/:for_user_email": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<Response>;
            };
        };
    };
    "/user/:user_uuid/participations/byEventId/:event_id": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    registration: (mongoose.Document<unknown, {}, {
                        email: string;
                        invoice_id: number;
                        out_sum: number;
                        status?: string | undefined;
                        meta?: {
                            query?: string | undefined;
                            participationType?: string | undefined;
                            phone?: string | undefined;
                        } | undefined;
                        _id?: mongoose.Types.ObjectId | undefined;
                        customer?: string | undefined;
                        event?: string | undefined;
                        transactions?: {
                            initial?: {
                                amountRub: number;
                            } | undefined;
                        } | undefined;
                        after_reg_email_subject?: string | undefined;
                        after_reg_email_body?: string | undefined;
                        after_reg_email_placeholders?: {
                            name?: string | undefined;
                            participationType?: string | undefined;
                            event_name?: string | undefined;
                            event_id?: string | undefined;
                        } | undefined;
                        after_pay_email_subject?: string | undefined;
                        after_pay_email_body?: string | undefined;
                        after_pay_email_placeholders?: {
                            name?: string | undefined;
                            participationType?: string | undefined;
                            event_name?: string | undefined;
                            event_id?: string | undefined;
                        } | undefined;
                        user_email?: string | undefined;
                        register_timestamp?: Date | undefined;
                        after_pay_email_text?: string | undefined;
                        cert?: string | undefined;
                    }> & {
                        email: string;
                        invoice_id: number;
                        out_sum: number;
                        status?: string | undefined;
                        meta?: {
                            query?: string | undefined;
                            participationType?: string | undefined;
                            phone?: string | undefined;
                        } | undefined;
                        _id?: mongoose.Types.ObjectId | undefined;
                        customer?: string | undefined;
                        event?: string | undefined;
                        transactions?: {
                            initial?: {
                                amountRub: number;
                            } | undefined;
                        } | undefined;
                        after_reg_email_subject?: string | undefined;
                        after_reg_email_body?: string | undefined;
                        after_reg_email_placeholders?: {
                            name?: string | undefined;
                            participationType?: string | undefined;
                            event_name?: string | undefined;
                            event_id?: string | undefined;
                        } | undefined;
                        after_pay_email_subject?: string | undefined;
                        after_pay_email_body?: string | undefined;
                        after_pay_email_placeholders?: {
                            name?: string | undefined;
                            participationType?: string | undefined;
                            event_name?: string | undefined;
                            event_id?: string | undefined;
                        } | undefined;
                        user_email?: string | undefined;
                        register_timestamp?: Date | undefined;
                        after_pay_email_text?: string | undefined;
                        cert?: string | undefined;
                    } & Required<{
                        _id: mongoose.Types.ObjectId;
                    }>) | null;
                }>;
            };
        };
    };
    "/user/:user_uuid/participations/byEventId/:event_id/getCert": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<Response>;
            };
        };
    };
    "/user/:user_uuid/user-list": {
        get: {
            body: unknown;
            params: {
                user_uuid: string;
            };
            query: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
            };
            headers: unknown;
            response: {
                200: Promise<{
                    users: (mongoose.FlattenMaps<{
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        lastName: string;
                        firstName: string;
                        email: string;
                        password: string;
                        uuid: string;
                        gender: string;
                        education: any[];
                        career: any[];
                        saved: any[];
                        awards: any[];
                        middleName?: string | undefined;
                        phoneNumber?: string | undefined;
                        specialty?: string | undefined;
                        city?: string | undefined;
                        workplace?: string | undefined;
                        position?: string | undefined;
                        confirmPassword?: string | undefined;
                        joinCommunity?: boolean | undefined;
                        isBlocked?: boolean | undefined;
                        isMember?: boolean | undefined;
                        legacyId?: string | undefined;
                        impotedFromSiteVersion?: string | undefined;
                        lastAuthAt?: Date | undefined;
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
                        email: string;
                        password: string;
                        uuid: string;
                        gender: string;
                        education: any[];
                        career: any[];
                        saved: any[];
                        awards: any[];
                        middleName?: string | undefined;
                        phoneNumber?: string | undefined;
                        specialty?: string | undefined;
                        city?: string | undefined;
                        workplace?: string | undefined;
                        position?: string | undefined;
                        confirmPassword?: string | undefined;
                        joinCommunity?: boolean | undefined;
                        isBlocked?: boolean | undefined;
                        isMember?: boolean | undefined;
                        legacyId?: string | undefined;
                        impotedFromSiteVersion?: string | undefined;
                        lastAuthAt?: Date | undefined;
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
                    yearStart?: number | undefined;
                    yearEnd?: number | undefined;
                    faculty?: string | undefined;
                    degree?: string | undefined;
                    diploma?: string | undefined;
                    university: string;
                }[] | undefined;
                birthDate?: string | undefined;
                about?: string | undefined;
                interests?: string | undefined;
                career?: {
                    start?: string | undefined;
                    end?: string | undefined;
                    post?: string | undefined;
                    description?: string | undefined;
                    placeName: string;
                }[] | undefined;
                saved?: {
                    title: string;
                    imageUrl: string;
                    href: string;
                    category: string;
                }[] | undefined;
                photoUrl?: string | undefined;
                awards?: {
                    title: string;
                    imageUrl: string;
                }[] | undefined;
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
                user_uuid: string;
            };
            query: {
                limit?: number | undefined;
                skip?: number | undefined;
            };
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
                uuid?: string | undefined;
                authors?: string[] | undefined;
                date: string;
                title: string;
                category: string;
                fileUrl: string;
            };
            params: {
                user_uuid: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/update": {
        post: {
            body: {
                uuid?: string | undefined;
                authors?: string[] | undefined;
                date: string;
                title: string;
                category: string;
                fileUrl: string;
            };
            params: {
                user_uuid: string;
            };
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
            params: {
                user_uuid: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                    debug: mongoose.UpdateWriteOpResult;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/undo-like": {
        post: {
            body: {
                uuid: string;
            };
            params: {
                user_uuid: string;
            };
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
            params: {
                user_uuid: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/list/saved": {
        get: {
            body: unknown;
            params: unknown;
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
                        publishedByUserUuid?: string | undefined;
                    }> & {
                        _id: mongoose.Types.ObjectId;
                    })[];
                }>;
            };
        };
    };
    "/user/:user_uuid/publication/undo-save": {
        post: {
            body: {
                uuid: string;
            };
            params: {
                user_uuid: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    success: string;
                }>;
            };
        };
    };
    "/event/jsonschema": {
        get: {
            body: unknown;
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    $schema: string;
                    type: string;
                    title: string;
                    properties: {
                        id: {
                            type: string[];
                            title: string;
                        };
                        type: {
                            type: string;
                            title: string;
                        };
                        date: {
                            type: string;
                            title: string;
                        };
                        dateStart: {
                            type: string;
                            format: string;
                            title: string;
                        };
                        dateEnd: {
                            type: string[];
                            format: string;
                            title: string;
                        };
                        timePeriod: {
                            type: string;
                            title: string;
                        };
                        name: {
                            type: string;
                            title: string;
                        };
                        place: {
                            type: string;
                            title: string;
                        };
                        format: {
                            type: string;
                            title: string;
                        };
                        participants: {
                            type: string;
                            title: string;
                        };
                        layoutBg: {
                            type: string;
                            title: string;
                        };
                        avatar: {
                            type: string;
                            title: string;
                        };
                        announcement: {
                            type: string;
                            title: string;
                        };
                        description: {
                            type: string[];
                            title: string;
                        };
                        speakers: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                properties: {
                                    name: {
                                        type: string;
                                        title: string;
                                    };
                                    post: {
                                        type: string;
                                        title: string;
                                    };
                                    contact: {
                                        type: string;
                                        title: string;
                                    };
                                    description: {
                                        type: string;
                                        title: string;
                                    };
                                    photo: {
                                        type: string;
                                        title: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                        halls: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                properties: {
                                    name: {
                                        type: string;
                                        title: string;
                                    };
                                    program: {
                                        type: string;
                                        title: string;
                                        items: {
                                            type: string;
                                            properties: {
                                                name: {
                                                    type: string;
                                                    title: string;
                                                };
                                                timePeriod: {
                                                    type: string;
                                                    title: string;
                                                };
                                                speaker: {
                                                    type: string;
                                                    title: string;
                                                };
                                                sponsor: {
                                                    type: string;
                                                    title: string;
                                                };
                                                substages: {
                                                    type: string;
                                                    title: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            name: {
                                                                type: string;
                                                                title: string;
                                                            };
                                                            timePeriod: {
                                                                type: string;
                                                                title: string;
                                                            };
                                                            description: {
                                                                type: string;
                                                                title: string;
                                                            };
                                                            sponsor: {
                                                                type: string;
                                                                title: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                required: string[];
                            };
                        };
                        prices: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                properties: {
                                    date: {
                                        type: string;
                                        title: string;
                                    };
                                    online: {
                                        type: string;
                                        title: string;
                                    };
                                    offline: {
                                        type: string;
                                        title: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                    required: string[];
                };
            };
        };
    };
    "/eventwithId:event_id": {
        get: {
            body: unknown;
            params: {
                event_id: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    events: (mongoose.Document<unknown, {}, {
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        type: string;
                        id: string;
                        date: string;
                        format: string;
                        name: string;
                        dateStart: Date;
                        timePeriod: string;
                        place: string;
                        participants: number;
                        layoutBg: string;
                        avatar: string;
                        announcement: string;
                        speakers: any[];
                        halls: any[];
                        prices: any[];
                        description?: string | undefined;
                        link?: string | undefined;
                        dateEnd?: Date | undefined;
                        onlinePrice?: number | undefined;
                        offlinePrice?: number | undefined;
                        isOnlyOnline?: boolean | undefined;
                        isPassed?: boolean | undefined;
                        isStream?: boolean | undefined;
                    }> & {
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        type: string;
                        id: string;
                        date: string;
                        format: string;
                        name: string;
                        dateStart: Date;
                        timePeriod: string;
                        place: string;
                        participants: number;
                        layoutBg: string;
                        avatar: string;
                        announcement: string;
                        speakers: any[];
                        halls: any[];
                        prices: any[];
                        description?: string | undefined;
                        link?: string | undefined;
                        dateEnd?: Date | undefined;
                        onlinePrice?: number | undefined;
                        offlinePrice?: number | undefined;
                        isOnlyOnline?: boolean | undefined;
                        isPassed?: boolean | undefined;
                        isStream?: boolean | undefined;
                    } & {
                        _id: mongoose.Types.ObjectId;
                    }) | null;
                }>;
            };
        };
    };
    "/eventbyId/:event_id": {
        get: {
            body: unknown;
            params: {
                event_id: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                200: Promise<{
                    events: (mongoose.Document<unknown, {}, {
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        type: string;
                        id: string;
                        date: string;
                        format: string;
                        name: string;
                        dateStart: Date;
                        timePeriod: string;
                        place: string;
                        participants: number;
                        layoutBg: string;
                        avatar: string;
                        announcement: string;
                        speakers: any[];
                        halls: any[];
                        prices: any[];
                        description?: string | undefined;
                        link?: string | undefined;
                        dateEnd?: Date | undefined;
                        onlinePrice?: number | undefined;
                        offlinePrice?: number | undefined;
                        isOnlyOnline?: boolean | undefined;
                        isPassed?: boolean | undefined;
                        isStream?: boolean | undefined;
                    }> & {
                        createdAt: NativeDate;
                        updatedAt: NativeDate;
                    } & {
                        type: string;
                        id: string;
                        date: string;
                        format: string;
                        name: string;
                        dateStart: Date;
                        timePeriod: string;
                        place: string;
                        participants: number;
                        layoutBg: string;
                        avatar: string;
                        announcement: string;
                        speakers: any[];
                        halls: any[];
                        prices: any[];
                        description?: string | undefined;
                        link?: string | undefined;
                        dateEnd?: Date | undefined;
                        onlinePrice?: number | undefined;
                        offlinePrice?: number | undefined;
                        isOnlyOnline?: boolean | undefined;
                        isPassed?: boolean | undefined;
                        isStream?: boolean | undefined;
                    } & {
                        _id: mongoose.Types.ObjectId;
                    }) | null;
                }>;
            };
        };
    };
    "/event/list": {
        get: {
            body: unknown;
            params: unknown;
            query: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
            };
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
                        name: string;
                        dateStart: Date;
                        timePeriod: string;
                        place: string;
                        participants: number;
                        layoutBg: string;
                        avatar: string;
                        announcement: string;
                        speakers: any[];
                        halls: any[];
                        prices: any[];
                        description?: string | undefined;
                        link?: string | undefined;
                        dateEnd?: Date | undefined;
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
                description?: string | undefined;
                link?: string | undefined;
                dateEnd?: Date | undefined;
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
                name: string;
                dateStart: string;
                timePeriod: string;
                place: string;
                participants: number;
                layoutBg: string;
                avatar: string;
                announcement: string;
                speakers: {
                    post: string;
                    description: string;
                    name: string;
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
                    }[];
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
                description?: string | undefined;
                link?: string | undefined;
                dateEnd?: Date | undefined;
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
                name: string;
                dateStart: string;
                timePeriod: string;
                place: string;
                participants: number;
                layoutBg: string;
                avatar: string;
                announcement: string;
                speakers: {
                    post: string;
                    description: string;
                    name: string;
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
                    }[];
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
            params: unknown;
            query: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
            };
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
    "/publication/list": {
        get: {
            body: unknown;
            params: unknown;
            query: {
                search?: string | undefined;
                limit?: number | undefined;
                skip?: number | undefined;
                categories?: string | undefined;
            };
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
