export interface DashamailServiceOptions {
    api_key: string;
    from_email: string;
}
export declare class PreConfiguredService<T> {
    config: T;
    constructor(optionsFromConst: T, override?: Partial<T>);
}
export declare class DashamailService extends PreConfiguredService<any> {
    dashamailSendMail({ email, subject, text, html }: Record<string, any>): Promise<unknown>;
}
