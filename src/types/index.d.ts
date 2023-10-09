/// <reference types="bun-types" />
import { Elysia } from "elysia";
export declare const router: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    echo: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            test: string;
        };
        _input_out: {
            test: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string>;
    echoMutate: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            test: string;
        };
        _input_out: {
            test: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string>;
    signUp: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
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
        _input_out: {
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
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string>;
}>;
declare const app: Elysia<"", {
    request: {};
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
    "/": {
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
    "/el": {
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
    "/ela": {
        post: {
            body: {
                echo: string;
            };
            params: unknown;
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
}, false>;
export type router = typeof router;
export type ElysiaApp = typeof app;
export {};
