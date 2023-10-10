export declare const Ok: <T>(message: string, result: T) => {
    ok: true;
    message: string;
    result: T;
    test: number;
};
export declare const Err: (message?: string) => {
    ok: boolean;
    message: string | undefined;
};
